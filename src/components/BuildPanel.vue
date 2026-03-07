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
                :title="`${cat.name} (${i + 1})`"
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
                        class="flex flex-col items-center justify-center gap-1 p-2 rounded-md border text-[11px] cursor-pointer transition-colors bg-gray-700/60 border-gray-500/40 text-gray-400 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-300"
                        @click="selectBuild(item)"
                    >
                        <span class="text-xl leading-none">{{ item.icon }}</span>
                        <span class="leading-none text-center break-all">{{ item.name }}</span>
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

export interface BuildCategory {
    id: string
    name: string
    icon: string
    buildings: BuildItem[]
}

export interface BuildItem {
    id: string
    name: string
    icon: string
}

const categories: BuildCategory[] = [
    { id: 'base', name: '基础', icon: '◉', buildings: [{ id: 'tile', name: '砖块', icon: '▣' }, { id: 'ladder', name: '梯子', icon: '⫸' }, { id: 'door', name: '门', icon: '⊞' }] },
    { id: 'oxygen', name: '氧气', icon: '◎', buildings: [{ id: 'diffuser', name: '藻类制氧', icon: '◈' }, { id: 'electrolyzer', name: '电解器', icon: '◇' }] },
    { id: 'power', name: '电力', icon: '⚡', buildings: [{ id: 'wire', name: '电线', icon: '─' }, { id: 'battery', name: '电池', icon: '▣' }, { id: 'generator', name: '发电机', icon: '◉' }] },
    { id: 'food', name: '食物', icon: '☗', buildings: [{ id: 'planter', name: '种植盆', icon: '▤' }, { id: 'cooker', name: '烹饪站', icon: '⌂' }] },
    { id: 'pipe', name: '管道', icon: '⊟', buildings: [{ id: 'pipe', name: '管道', icon: '─' }, { id: 'pump', name: '液泵', icon: '◎' }] },
    { id: 'vent', name: '通风', icon: '⇄', buildings: [{ id: 'vent', name: '通风口', icon: '○' }, { id: 'filter', name: '过滤器', icon: '◇' }] },
    { id: 'auto', name: '自动化', icon: '⚙', buildings: [{ id: 'wire', name: '自动化线', icon: '─' }, { id: 'sensor', name: '传感器', icon: '◐' }] },
    { id: 'medical', name: '医疗', icon: '✚', buildings: [{ id: 'bed', name: '医疗床', icon: '▭' }, { id: 'apothecary', name: '药房', icon: '▣' }] },
    { id: 'furniture', name: '家具', icon: '▦', buildings: [{ id: 'bed', name: '床', icon: '▭' }, { id: 'table', name: '桌', icon: '▤' }, { id: 'light', name: '灯', icon: '○' }] },
    { id: 'decor', name: '装饰', icon: '✦', buildings: [{ id: 'painting', name: '画', icon: '▢' }, { id: 'plant', name: '植物', icon: '♣' }] },
]

const openCategory = ref<string | null>(null)

const currentCategory = computed(() => categories.find((c) => c.id === openCategory.value))
const currentBuildings = computed(() => currentCategory.value?.buildings ?? [])

function toggleCategory(id: string) {
    openCategory.value = openCategory.value === id ? null : id
}

function selectBuild(item: BuildItem) {
    console.log('Select build:', item)
    // TODO: 进入放置模式
}

const keyToIndex: Record<string, number> = {
    '1': 0, '2': 1, '3': 2, '4': 3, '5': 4,
    '6': 5, '7': 6, '8': 7, '9': 8, '0': 9,
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
