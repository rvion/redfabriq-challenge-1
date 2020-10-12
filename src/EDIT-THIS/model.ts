// Types must be plain old js objects
// You can only use arrays, strings, numbers, ... NO functions !

export type MODEL = {
    name: string
    pages: Page[]
    startPage: string
}

export type Page = { name: string; widgets: Widget[] }
export type Widget =
    | { type: "scene"; shapes: Shape[] }
    | { type: "title"; title: string }
    | { type: "button"; title: string; action: Action[] }

export type Action =
    | { type: "print"; what: any }
    | { type: "increment"; varName: string }
    | { type: "get"; varName: string }
    | { type: "set"; varName: string; value: number }

export type Shape =
    | {
          type: "rect"
          x0: number
          y0: number
          x1: number
          y1: number
          color?: Color
      }
    | { type: "circle"; x: number; y: number; radius: number; color?: Color }
export type Color = "green" | "red" | "blue"
