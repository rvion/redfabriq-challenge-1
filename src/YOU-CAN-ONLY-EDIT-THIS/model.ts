// OOPS! THis is a model to specify basic geometric illustration
// YOUR TASK: REPLACE it by a model that is
// BOTH able to specify:
//   - CRUD apps AND
//   - cofee-machien interface

type Shape =
    | { type: "rect"; x0: number; y0: number; x1: number; y1: number }
    | { type: "circle"; x: number; y: number; radius: number }

export type MODEL = {
    scene: Shape[]
}
