import Phaser from 'phaser'

const MOVE_SPEED = 200
const JUMP_VELOCITY = -420
const CLIMB_SPEED = 180

/**
 * 主游戏场景
 * 坐标系：x 水平，y 为高度（z），y 向下为正（Phaser 默认）
 */
export default class MainScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite
  private climbables!: Phaser.Physics.Arcade.StaticGroup
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

  update() {
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
