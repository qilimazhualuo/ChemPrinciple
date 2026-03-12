<script setup lang="ts">
import { IonButton, IonContent, IonPage } from '@ionic/vue'
import { onMounted, onUnmounted, ref } from 'vue'

const particles = ref<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([])

function generateParticles() {
    particles.value = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
    }))
}

const titleVisible = ref(false)
const menuVisible = ref(false)

onMounted(() => {
    generateParticles()
    setTimeout(() => (titleVisible.value = true), 200)
    setTimeout(() => (menuVisible.value = true), 700)
})

const menuItems = [
    { label: '开始游戏', link: '/game', primary: true },
    { label: '加载存档', link: '', primary: false },
    { label: '设置', link: '', primary: false },
    { label: '关于', link: '', primary: false },
]

let resizeTimer: ReturnType<typeof setTimeout> | null = null
function onResize() {
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = setTimeout(generateParticles, 300)
}
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    if (resizeTimer) clearTimeout(resizeTimer)
})
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true" class="home-page">
            <div class="relative w-full h-full flex flex-col items-center justify-center overflow-hidden select-none">
                <!-- 背景层 -->
                <div class="absolute inset-0 z-0">
                    <div class="grid-overlay absolute inset-0"></div>
                    <div class="gradient-orb orb-1 absolute rounded-full blur-[80px] opacity-40 w-[400px] h-[400px] -top-[10%] -right-[5%]"></div>
                    <div class="gradient-orb orb-2 absolute rounded-full blur-[80px] opacity-40 w-[300px] h-[300px] -bottom-[5%] -left-[5%]"></div>
                    <div class="gradient-orb orb-3 absolute rounded-full blur-[80px] opacity-40 w-[250px] h-[250px] top-[40%] left-1/2"></div>
                </div>

                <!-- 粒子 -->
                <div class="absolute inset-0 z-[1] pointer-events-none">
                    <div
                        v-for="p in particles"
                        :key="p.id"
                        class="particle absolute rounded-full bg-blue-300/50"
                        :style="{
                            left: p.x + '%',
                            top: p.y + '%',
                            width: p.size + 'px',
                            height: p.size + 'px',
                            animationDuration: p.duration + 's',
                            animationDelay: p.delay + 's',
                        }"
                    ></div>
                </div>

                <!-- 主内容 -->
                <div class="relative z-10 flex flex-col items-center gap-12 p-8">
                    <!-- 标题区 -->
                    <div
                        class="text-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        :class="titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'"
                    >
                        <div class="inline-block text-[0.65rem] font-bold tracking-[0.35em] text-blue-300/70 border border-blue-300/20 px-4 py-1 rounded-full mb-4 bg-blue-500/[0.08]">
                            SIMULATION
                        </div>
                        <h1 class="game-title text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-[#f0f6ff] tracking-[0.12em] leading-tight m-0">
                            建造模拟
                        </h1>
                        <div class="flex items-center justify-center gap-3 my-4">
                            <span class="block w-12 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></span>
                            <span class="text-blue-300/50 text-[0.5rem]">◆</span>
                            <span class="block w-12 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></span>
                        </div>
                        <p class="text-base text-slate-400/80 tracking-[0.15em] m-0 font-light">打造你的完美基地</p>
                    </div>

                    <!-- 菜单区 -->
                    <nav class="flex flex-col gap-2 w-[280px]">
                        <template v-for="(item, idx) in menuItems" :key="idx">
                            <ion-button
                                v-if="item.link"
                                :router-link="item.link"
                                expand="block"
                                fill="clear"
                                class="menu-btn transition-all duration-500 ease-out"
                                :class="menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                                :style="{ transitionDelay: idx * 80 + 'ms' }"
                            >
                                <span
                                    class="group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-base tracking-[0.05em] transition-all duration-[250ms] relative overflow-hidden border"
                                    :class="item.primary
                                        ? 'font-semibold border-indigo-500/35 bg-gradient-to-br from-blue-500/20 to-indigo-500/15 text-indigo-200 hover:from-blue-500/30 hover:to-indigo-500/25 hover:border-indigo-400/50 hover:text-indigo-100 hover:shadow-[0_0_24px_rgba(99,102,241,0.15)]'
                                        : 'font-medium border-slate-400/[0.12] bg-white/[0.03] text-slate-300/85 hover:bg-white/[0.07] hover:border-slate-400/25 hover:text-[#f0f6ff] hover:translate-x-1'"
                                >
                                    <span class="relative z-[1]">{{ item.label }}</span>
                                    <span v-if="item.primary" class="text-lg transition-transform duration-[250ms] group-hover:translate-x-1">→</span>
                                </span>
                            </ion-button>
                            <ion-button
                                v-else
                                expand="block"
                                fill="clear"
                                class="menu-btn transition-all duration-500 ease-out"
                                :class="menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                                :style="{ transitionDelay: idx * 80 + 'ms' }"
                            >
                                <span class="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-base font-medium tracking-[0.05em] transition-all duration-[250ms] relative overflow-hidden border border-slate-400/[0.12] bg-white/[0.03] text-slate-300/85 hover:bg-white/[0.07] hover:border-slate-400/25 hover:text-[#f0f6ff] hover:translate-x-1">
                                    <span class="relative z-[1]">{{ item.label }}</span>
                                </span>
                            </ion-button>
                        </template>
                    </nav>
                </div>

                <!-- 底部 -->
                <div
                    class="absolute bottom-6 z-10 transition-opacity duration-[800ms] delay-500"
                    :class="menuVisible ? 'opacity-100' : 'opacity-0'"
                >
                    <span class="text-[0.7rem] text-slate-500/60 tracking-[0.1em]">v0.0.1 · Early Access</span>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.home-page {
    --background: #0a0e1a;
}

.grid-overlay {
    background-image:
        linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
}

.gradient-orb {
    animation: orbFloat 12s ease-in-out infinite;
}

.orb-1 {
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%);
}

.orb-2 {
    background: radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%);
    animation-delay: -4s;
}

.orb-3 {
    background: radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%);
    animation-delay: -8s;
}

@keyframes orbFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -30px) scale(1.05); }
    66% { transform: translate(-15px, 20px) scale(0.95); }
}

.particle {
    animation: particleDrift linear infinite;
    will-change: transform, opacity;
}

@keyframes particleDrift {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
    }
    10% { opacity: 0.8; }
    90% { opacity: 0.8; }
    100% {
        transform: translateY(-120px) translateX(30px);
        opacity: 0;
    }
}

.game-title {
    text-shadow:
        0 0 40px rgba(59, 130, 246, 0.3),
        0 0 80px rgba(59, 130, 246, 0.15);
}

.menu-btn {
    --background: transparent;
    --background-hover: transparent;
    --background-activated: transparent;
    --background-focused: transparent;
    --border-radius: 12px;
    --padding-start: 0;
    --padding-end: 0;
    --box-shadow: none;
    height: auto;
    margin: 0;
}
</style>
