<template>
  <ion-page>
    <ion-content :fullscreen="true" class="game-content">
      <div ref="gameContainer" class="game-container" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { IonContent, IonPage } from '@ionic/vue'
import type Phaser from 'phaser'
import { createGame } from '@/game'

const gameContainer = ref<HTMLElement | null>(null)
let game: Phaser.Game | null = null
let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  await nextTick()
  await new Promise((r) => requestAnimationFrame(r as FrameRequestCallback))
  if (!gameContainer.value) return
  const el = gameContainer.value
  game = createGame(el)
  // 容器尺寸变化时重设 Phaser 画布
  resizeObserver = new ResizeObserver(() => {
    if (game && el.offsetWidth > 0 && el.offsetHeight > 0) {
      game.scale.resize(el.offsetWidth, el.offsetHeight)
    }
  })
  resizeObserver.observe(el)
  // 首次点击聚焦 canvas
  const focusCanvas = () => {
    const canvas = el.querySelector('canvas')
    if (canvas) {
      canvas.setAttribute('tabindex', '0')
      ;(canvas as HTMLElement).focus()
    }
    el.removeEventListener('click', focusCanvas)
  }
  el.addEventListener('click', focusCanvas)
})

onUnmounted(() => {
  if (gameContainer.value && resizeObserver) {
    resizeObserver.unobserve(gameContainer.value)
    resizeObserver = null
  }
  if (game) {
    game.destroy(true)
    game = null
  }
})
</script>

<style scoped>
.game-content {
  --background: #0f0f1a;
  --overflow: hidden;
}

.game-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-container :deep(canvas) {
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}
</style>
