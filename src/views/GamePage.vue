<template>
  <ion-page>
    <ion-content :fullscreen="true" class="game-content">
      <div ref="gameContainer" class="absolute inset-0 w-full h-full min-h-screen flex items-center justify-center">
        <div ref="phaserMount" class="w-full h-full flex items-center justify-center game-canvas-wrapper" />
      </div>
      <BuildPanel />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { IonContent, IonPage } from '@ionic/vue'
import type Phaser from 'phaser'
import BuildPanel from '@/components/BuildPanel.vue'
import { createGame } from '@/game'

const gameContainer = ref<HTMLElement | null>(null)
const phaserMount = ref<HTMLElement | null>(null)
let game: Phaser.Game | null = null
let resizeObserver: ResizeObserver | null = null
let mounted = false
let observedEl: HTMLElement | null = null

onMounted(async () => {
  await nextTick()
  await new Promise((r) => requestAnimationFrame(r as FrameRequestCallback))
  const container = gameContainer.value
  const mount = phaserMount.value
  if (!container || !mount) return
  mounted = true
  observedEl = mount
  game = createGame(mount)
  // 容器尺寸变化时重设 Phaser 画布
  resizeObserver = new ResizeObserver(() => {
    if (!mounted || !game || !observedEl) return
    const w = observedEl.offsetWidth
    const h = observedEl.offsetHeight
    if (w > 0 && h > 0) {
      try {
        game.scale.resize(w, h)
      } catch {
        // 忽略 destroy 后的 resize
      }
    }
  })
  resizeObserver.observe(observedEl)
  // 首次点击聚焦 canvas
  const focusCanvas = () => {
    const canvas = observedEl?.querySelector('canvas')
    if (canvas) {
      canvas.setAttribute('tabindex', '0')
      ;(canvas as HTMLElement).focus()
    }
    container.removeEventListener('click', focusCanvas)
  }
  container.addEventListener('click', focusCanvas)
})

onUnmounted(() => {
  mounted = false
  if (observedEl && resizeObserver) {
    resizeObserver.unobserve(observedEl)
    observedEl = null
    resizeObserver = null
  }
  if (game) {
    try {
      game.destroy(true)
    } catch {
      // 忽略 destroy 异常
    }
    game = null
  }
})
</script>

<style scoped>
.game-content {
  --background: #0f0f1a;
  --overflow: hidden;
}
.game-canvas-wrapper :deep(canvas) {
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}
</style>
