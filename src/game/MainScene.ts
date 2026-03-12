import Phaser from 'phaser'

const MOVE_SPEED = 200
const JUMP_VELOCITY = -520
const CLIMB_SPEED = 180
const TILE_SIZE = 32

interface BuildItem {
    id: string
    name: string
    icon: string
    image: string
    width: number
    height: number
}

/**
  * 主游戏场景
  * 坐标系：x 水平，y 为高度（z），y 向下为正（Phaser 默认）
  */
export default class MainScene extends Phaser.Scene {
    private player!: Phaser.Physics.Arcade.Sprite
    private climbables!: Phaser.Physics.Arcade.StaticGroup
    private placedBuildings!: Phaser.GameObjects.Group
    private placementItem: BuildItem | null = null
    private previewRect: Phaser.GameObjects.Rectangle | null = null
    private previewImage: Phaser.GameObjects.Image | null = null
    private keys!: {
        W: Phaser.Input.Keyboard.Key
        A: Phaser.Input.Keyboard.Key
        S: Phaser.Input.Keyboard.Key
        D: Phaser.Input.Keyboard.Key
    }

    constructor() {
        super({ key: 'MainScene' })
    }

    create() {
        const { width, height } = this.cameras.main

        // 背景：深色洞穴风格
        this.add
            .rectangle(0, 0, width * 2, height * 2, 0x1a1a2e)
            .setOrigin(0)

        // 地面（带物理的静态体）
        const groundY = height - 80
        const ground = this.add.rectangle(width / 2, groundY + 20, width * 2, 80, 0x2d3748)
        ground.setOrigin(0.5, 0.5)
        this.physics.add.existing(ground, true)

        // 地面线（视觉）
        this.add
            .line(0, groundY, 0, groundY, width, groundY, 0x4a5568)
            .setLineWidth(4)
            .setDepth(1)

        // 主角纹理（纯色矩形）
        const g = this.add.graphics()
        g.fillStyle(0x63b3ed)
        g.fillRect(0, 0, 32, 48)
        g.generateTexture('player', 32, 48)
        g.destroy()

        // 主角：物理精灵
        this.player = this.physics.add.sprite(width / 2, groundY - 24, 'player')
        this.player.setOrigin(0.5, 1)
        this.physics.add.collider(this.player, ground)

        // 可攀爬物体（梯子，可碰撞，overlap 检测是否在攀爬区）
        this.climbables = this.physics.add.staticGroup()
        const ladder = this.add.rectangle(width * 0.2, groundY - 120, 24, 200, 0x4a5568)
        ladder.setOrigin(0.5, 1)
        this.climbables.add(ladder)
        this.physics.add.collider(this.player, this.climbables)

        // 已放置建筑
        this.placedBuildings = this.add.group()

        // 放置模式：监听 Vue 传来的选中建筑
        this.events.on('enterPlacement', (item: BuildItem | null) => {
            this.placementItem = item
            if (this.previewRect) {
                this.previewRect.destroy()
                this.previewRect = null
            }
            if (this.previewImage) {
                this.previewImage.destroy()
                this.previewImage = null
            }
            if (item) {
                const w = item.width * TILE_SIZE
                const h = item.height * TILE_SIZE
                this.previewRect = this.add.rectangle(0, 0, w, h, 0x3182ce, 0.3)
                    .setDepth(10)
                    .setVisible(false)

                if (item.image) {
                    this.loadBuildingTexture(item, () => {
                        if (this.placementItem?.id !== item.id) return
                        this.previewImage = this.add.image(0, 0, `building_${item.id}`)
                            .setDisplaySize(w, h)
                            .setAlpha(0.6)
                            .setDepth(11)
                            .setVisible(false)
                    })
                }
            }
        })

        // 点击放置
        this.input.on('pointerdown', (ptr: Phaser.Input.Pointer) => {
            if (!this.placementItem) return
            const wx = ptr.worldX
            const wy = ptr.worldY
            const tw = this.placementItem.width
            const th = this.placementItem.height
            const gx = Math.floor(wx / TILE_SIZE) * TILE_SIZE + (tw * TILE_SIZE) / 2
            const gy = Math.floor(wy / TILE_SIZE) * TILE_SIZE + (th * TILE_SIZE) / 2
            this.placeBuilding(gx, gy, this.placementItem)
            this.placementItem = null
            this.events.emit('exitPlacement')
            if (this.previewRect) this.previewRect.setVisible(false)
            if (this.previewImage) this.previewImage.setVisible(false)
        })

        // ESC 取消放置
        const esc = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        esc?.on?.('down', () => {
            if (this.placementItem) {
                this.placementItem = null
                this.events.emit('exitPlacement')
                if (this.previewRect) this.previewRect.setVisible(false)
                if (this.previewImage) this.previewImage.setVisible(false)
            }
        })

        // WASD + 空格（keyboard 在触摸/iframe 等环境可能不可用）
        const kb = this.input.keyboard
        const noopKey = { isDown: false } as Phaser.Input.Keyboard.Key
        this.keys = {
            W: kb?.addKey(Phaser.Input.Keyboard.KeyCodes.W) ?? noopKey,
            A: kb?.addKey(Phaser.Input.Keyboard.KeyCodes.A) ?? noopKey,
            S: kb?.addKey(Phaser.Input.Keyboard.KeyCodes.S) ?? noopKey,
            D: kb?.addKey(Phaser.Input.Keyboard.KeyCodes.D) ?? noopKey,
        }
        const space = kb?.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        space?.on?.('down', () => {
            const body = this.player.body as Phaser.Physics.Arcade.Body
            if (body.blocked.down || body.touching.down) {
                this.player.setVelocityY(JUMP_VELOCITY)
            }
        })

        // 简单文字标识
        this.add
            .text(width / 2, 40, 'Game Scene', {
                fontSize: '24px',
                color: '#a0aec0',
            })
            .setOrigin(0.5)
            .setDepth(1)
    }

    private loadBuildingTexture(item: BuildItem, onComplete?: () => void) {
        const key = `building_${item.id}`
        if (this.textures.exists(key)) {
            onComplete?.()
            return
        }
        if (!item.image) {
            onComplete?.()
            return
        }
        this.load.image(key, item.image)
        if (onComplete) {
            this.load.once('complete', onComplete)
        }
        this.load.start()
    }

    private placeBuilding(worldX: number, worldY: number, item: BuildItem) {
        const w = item.width * TILE_SIZE
        const h = item.height * TILE_SIZE
        const textureKey = `building_${item.id}`

        if (this.textures.exists(textureKey)) {
            const img = this.add.image(worldX, worldY, textureKey)
                .setDisplaySize(w, h)
            this.placedBuildings.add(img)
        } else {
            const rect = this.add.rectangle(worldX, worldY, w, h, 0x4a5568)
            rect.setStrokeStyle(2, 0x63b3ed)
            const label = this.add.text(worldX, worldY, item.icon, {
                fontSize: Math.min(18, Math.floor(TILE_SIZE * 0.8)),
                color: '#e2e8f0',
            }).setOrigin(0.5)
            this.placedBuildings.add(rect)
            this.placedBuildings.add(label)
        }
    }

    update() {
        // 放置预览跟随鼠标
        if (this.previewRect && this.placementItem) {
            const wx = this.input.activePointer.worldX
            const wy = this.input.activePointer.worldY
            const tw = this.placementItem.width
            const th = this.placementItem.height
            const gx = Math.floor(wx / TILE_SIZE) * TILE_SIZE + (tw * TILE_SIZE) / 2
            const gy = Math.floor(wy / TILE_SIZE) * TILE_SIZE + (th * TILE_SIZE) / 2
            this.previewRect.setPosition(gx, gy).setVisible(true)
            if (this.previewImage) {
                this.previewImage.setPosition(gx, gy).setVisible(true)
            }
        }

        if (!this.keys || !this.player?.body) return
        const body = this.player.body as Phaser.Physics.Arcade.Body

        const onClimbable = this.physics.overlap(this.player, this.climbables)

        if (onClimbable) {
            body.setAllowGravity(false)
            body.setVelocityX(0)
            if (this.keys.A?.isDown) body.setVelocityX(-MOVE_SPEED)
            if (this.keys.D?.isDown) body.setVelocityX(MOVE_SPEED)
            if (this.keys.W?.isDown) body.setVelocityY(-CLIMB_SPEED)
            else if (this.keys.S?.isDown) body.setVelocityY(CLIMB_SPEED)
            else body.setVelocityY(0)
        } else {
            body.setAllowGravity(true)
            body.setVelocityX(0)
            if (this.keys.A?.isDown) body.setVelocityX(-MOVE_SPEED)
            if (this.keys.D?.isDown) body.setVelocityX(MOVE_SPEED)
        }
    }
}
