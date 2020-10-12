import { MODEL } from "./model"

export const app1: MODEL = {
    name: "App 1",
    startPage: "drawing",
    pages: [
        { name: "test", widgets: [{ type: "title", title: "empty page" }] },
        {
            name: "drawing",
            widgets: [
                { type: "title", title: "this is a drawing" },
                {
                    type: "scene",
                    shapes: [
                        { type: "circle", x: 100, y: 200, radius: 50 },
                        { type: "rect", x0: 110, y0: 60, x1: 140, y1: 90 },
                        {
                            type: "circle",
                            x: 300,
                            y: 150,
                            radius: 50,
                            color: "red",
                        },
                    ],
                },
            ],
        },
    ],
}
