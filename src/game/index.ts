import Phaser from 'phaser'
import MainScene from './MainScene'

export function createGame(parent: string | HTMLElement): Phaser.Game {
  const el = typeof parent === 'string' ? document.querySelector(parent) : parent
  const w = (el instanceof HTMLElement ? el.offsetWidth : 0) || 800
  const h = (el instanceof HTMLElement ? el.offsetHeight : 0) || 600

  return new Phaser.Game({
    type: Phaser.AUTO,
    width: Math.max(w, 400),
    height: Math.max(h, 300),
    parent,
    backgroundColor: '#1a1a2e',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 700 },
        debug: false,
      },
    },
    scene: [MainScene],
  })
}
