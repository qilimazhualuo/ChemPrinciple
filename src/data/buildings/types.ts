export type BuildingLayer =
    | 'background'   // 背景板：无碰撞，渲染在最后面
    | 'tile'         // 实体方块：完整碰撞
    | 'liquid_pipe'  // 水管：无碰撞，管道覆盖层
    | 'gas_pipe'     // 气管：无碰撞，管道覆盖层
    | 'wire'         // 电线：无碰撞，电线覆盖层
    | 'automation'   // 自动化：无碰撞，自动化覆盖层
    | 'road'         // 道路：单向平台，可踩踏
    | 'building'     // 建筑物：碰撞实体

export interface BuildItem {
    id: string
    name: string
    icon: string
    image: string
    width: number
    height: number
    layer: BuildingLayer
}

export interface BuildCategory {
    id: string
    name: string
    icon: string
    buildings: BuildItem[]
}
