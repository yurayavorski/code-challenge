export enum ItemColors {
    Red = 'red',
    Blue = 'blue',
    Green = 'green',
    Yellow = ' yellow',
    White = 'white'
}

export interface ItemPosition {
    x: number
    y: number
}

export interface ItemState {
    isRendered: boolean
    position?: ItemPosition
    color: ItemColors
}
