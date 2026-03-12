<script lang="ts">
export default { name: 'BuildPanel' }
</script>
<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import type { BuildItem } from '@/data/buildings'
import { buildCategories } from '@/data/buildings'

const setSelectedBuild = inject<(item: BuildItem | null) => void>('setSelectedBuild')
const selectedBuild = inject<{ value: BuildItem | null }>('selectedBuild')

const categories = buildCategories

const openCategory = ref<string | null>(null)

const currentCategory = computed(() => categories.find((c) => c.id === openCategory.value))
const currentBuildings = computed(() => currentCategory.value?.buildings ?? [])

function toggleCategory(id: string) {
    openCategory.value = openCategory.value === id ? null : id
}

function getCategoryKey(i: number) {
    return i < 9 ? String(i + 1) : ''
}

function selectBuild(item: BuildItem) {
    // 再次点击同一建筑则取消选择
    if (selectedBuild?.value?.id === item.id) {
        setSelectedBuild?.(null)
    } else {
        setSelectedBuild?.(item)
        openCategory.value = null  // 收起菜单，方便点击画布放置
    }
}

const keyToIndex: Record<string, number> = {
    '1': 0, '2': 1, '3': 2, '4': 3, '5': 4,
    '6': 5, '7': 6, '8': 7, '9': 8,
}

function onKeyDown(e: KeyboardEvent) {
    const idx = keyToIndex[e.key]
    if (idx === undefined) return
    const cat = categories[idx]
    if (!cat) return
    e.preventDefault()
    toggleCategory(cat.id)
}

onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
    <div class="fixed left-3 bottom-3 z-[9999] flex flex-col-reverse items-start pointer-events-auto">
        <!-- 分类按钮行（左下角） -->
        <div class="flex flex-row gap-0.5 p-1.5 rounded-lg bg-gray-950/90 border border-gray-500/40 shadow-lg">
            <button
                v-for="(cat, i) in categories"
                :key="cat.id"
                type="button"
                class="flex flex-col items-center justify-center gap-0.5 w-12 h-12 p-1 rounded-md border text-xs cursor-pointer transition-colors"
                :class="openCategory === cat.id
                    ? 'bg-blue-500/35 border-blue-400/70 text-blue-300'
                    : 'bg-gray-800/90 border-gray-500/50 text-gray-400 hover:bg-gray-700/95 hover:border-gray-400/60 hover:text-gray-200'"
                :title="getCategoryKey(i) ? `${cat.name} (${getCategoryKey(i)})` : cat.name"
                @click="toggleCategory(cat.id)"
            >
                <span class="text-lg leading-none">{{ cat.icon }}</span>
                <span class="text-[10px] leading-none whitespace-nowrap">{{ cat.name }}</span>
            </button>
        </div>

        <!-- 当前分类的建筑子菜单 -->
        <Transition name="submenu">
            <div v-if="openCategory" class="flex flex-col w-72 max-h-80 mb-1.5 rounded-lg overflow-hidden bg-gray-950/95 border border-gray-500/40 shadow-lg">
                <div class="flex items-center justify-between px-3 py-2 bg-gray-700/80 text-sm text-gray-200">
                    <span>{{ currentCategory?.name }}</span>
                    <button type="button" class="w-6 h-6 p-0 bg-transparent border-none text-gray-400 text-lg leading-none cursor-pointer rounded hover:bg-gray-500/30 hover:text-white" @click="openCategory = null">×</button>
                </div>
                <div class="grid grid-cols-4 gap-1.5 p-2.5 overflow-y-auto">
                    <button
                        v-for="item in currentBuildings"
                        :key="item.id"
                        type="button"
                        class="flex flex-col items-center justify-center gap-1 p-2 rounded-md border text-[11px] cursor-pointer transition-colors"
                        :class="selectedBuild?.value?.id === item.id
                            ? 'bg-blue-500/40 border-blue-400 text-blue-200'
                            : 'bg-gray-700/60 border-gray-500/40 text-gray-400 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-300'"
                        @click="selectBuild(item)"
                    >
                        <div class="relative w-8 h-8 flex items-center justify-center">
                            <img
                                v-if="item.image"
                                :src="item.image"
                                :alt="item.name"
                                class="w-full h-full object-contain"
                                @error="(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden') }"
                            >
                            <span class="text-xl leading-none" :class="item.image ? 'hidden absolute' : ''">{{ item.icon }}</span>
                        </div>
                        <span class="leading-none text-center break-all">{{ item.name }}</span>
                    </button>
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
