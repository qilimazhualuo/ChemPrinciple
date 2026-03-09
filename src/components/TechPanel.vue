<script lang="ts">
export default { name: 'TechPanel' }
</script>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { techs } from '@/data/techs'

const open = ref(false)
const researched = ref<Set<string>>(new Set(['start']))
const researchPoints = ref(500)

const techMap = computed(() => new Map(techs.map((t) => [t.id, t])))

function canResearch(id: string): boolean {
    const tech = techMap.value.get(id)
    if (!tech || researched.value.has(id)) return false
    if (researchPoints.value < tech.cost) return false
    return tech.prerequisites.every((p) => researched.value.has(p))
}

function getTechStatus(id: string): 'researched' | 'available' | 'locked' {
    if (researched.value.has(id)) return 'researched'
    if (canResearch(id)) return 'available'
    return 'locked'
}

function doResearch(id: string) {
    if (!canResearch(id)) return
    const tech = techMap.value.get(id)
    if (!tech || researchPoints.value < tech.cost) return
    researchPoints.value -= tech.cost
    researched.value = new Set([...researched.value, id])
}

const tiers = computed(() => {
    const byTier = new Map<number, typeof techs>()
    for (const t of techs) {
        if (t.tier === 0) continue
        const list = byTier.get(t.tier) ?? []
        list.push(t)
        byTier.set(t.tier, list)
    }
    return Array.from(byTier.entries()).sort((a, b) => a[0] - b[0])
})

function onKeyDown(e: KeyboardEvent) {
    if (e.key === 't' || e.key === 'T') {
        e.preventDefault()
        open.value = !open.value
    }
}

onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
    <div class="fixed right-3 top-3 z-[9999] flex flex-col items-end pointer-events-auto">
        <!-- 科技按钮 -->
        <button
            type="button"
            class="flex flex-col items-center justify-center gap-0.5 w-12 h-12 p-1 rounded-lg border text-xs cursor-pointer transition-colors bg-gray-950/90 border-gray-500/40 text-gray-400 hover:bg-gray-700/95 hover:border-gray-400/60 hover:text-gray-200 shadow-lg"
            :class="open && 'bg-blue-500/35 border-blue-400/70 text-blue-300'"
            title="科技 (T)"
            @click="open = !open"
        >
            <span class="text-lg leading-none">⚙</span>
            <span class="text-[10px] leading-none">科技</span>
        </button>

        <!-- 科技树面板 -->
        <Transition name="submenu">
            <div v-if="open" class="fixed inset-0 z-[9998] flex flex-col overflow-hidden bg-gray-950/98 border border-gray-500/40 shadow-lg">
                <div class="flex items-center justify-between px-3 py-2 bg-gray-700/80 text-sm text-gray-200">
                    <span>科技</span>
                    <span class="text-xs text-gray-400">点数: {{ researchPoints }}</span>
                    <button type="button" class="w-6 h-6 p-0 bg-transparent border-none text-gray-400 text-lg leading-none cursor-pointer rounded hover:bg-gray-500/30 hover:text-white" @click="open = false">×</button>
                </div>
                <div class="p-3 overflow-y-auto overflow-x-auto flex-1">
                    <div v-for="[tier, tierTechs] in tiers" :key="tier" class="flex flex-wrap gap-2 mb-3">
                        <div class="w-full text-xs text-gray-500 mb-1">第 {{ tier }} 层</div>
                        <div
                            v-for="tech in tierTechs"
                            :key="tech.id"
                            class="flex flex-col items-center gap-0.5 min-w-[72px] p-2 rounded-md border text-[11px] cursor-pointer transition-colors"
                            :class="{
                                'bg-green-900/40 border-green-500/50 text-green-300': getTechStatus(tech.id) === 'researched',
                                'bg-amber-900/40 border-amber-500/50 text-amber-300 hover:bg-amber-800/50': getTechStatus(tech.id) === 'available',
                                'bg-gray-800/60 border-gray-600/40 text-gray-500 cursor-not-allowed': getTechStatus(tech.id) === 'locked',
                            }"
                            :title="tech.prerequisites.length ? `前置: ${tech.prerequisites.join(', ')}` : '无前置'"
                            @click="getTechStatus(tech.id) === 'available' && doResearch(tech.id)"
                        >
                            <span class="font-medium">{{ tech.name }}</span>
                            <span class="text-[10px] opacity-80">{{ tech.cost }} 点</span>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.submenu-enter-active,
.submenu-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
}
.submenu-enter-from,
.submenu-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
