export interface BuildItem {
    id: string
    name: string
    icon: string
    image: string
    width: number
    height: number
}

export interface BuildCategory {
    id: string
    name: string
    icon: string
    buildings: BuildItem[]
}
