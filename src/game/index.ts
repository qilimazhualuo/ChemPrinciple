import Phaser from 'phaser'
import MainScene from './MainScene'

export function createGame(parent: string | HTMLElement): Phaser.Game {
    const el = typeof parent === 'string' ? document.querySelector(parent) : parent
    if (!el || !(el instanceof HTMLElement)) {
        throw new Error('Phaser parent element is invalid')
    }
    const w = el.offsetWidth || 800
    const h = el.offsetHeight || 600

    return new Phaser.Game({
        type: Phaser.AUTO,
        width: Math.max(w, 400),
        height: Math.max(h, 300),
        parent: el,
        backgroundColor: '#1a1a2e',
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { x: 0, y: 950 },
                debug: false,
            },
        },
        scene: [MainScene],
    })
}
