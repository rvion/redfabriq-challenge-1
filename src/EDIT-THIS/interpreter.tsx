import { observable } from "mobx"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { MODEL, Page, Widget, Shape } from "./model"
import { exhaust } from "./utils"

class InterpreterState {
    @observable memory: any = {}
    @observable currentPage: Page
    constructor(public app: MODEL) {
        const homePage = app.pages.find((p) => p.name === app.startPage)
        this.currentPage = homePage || app.pages[0]
    }
}

export const InterpreterUI = observer(function InterpreterUI_(p: {
    app: MODEL
}) {
    const app = p.app
    const state = React.useMemo(() => new InterpreterState(app), [app])

    return (
        <div className="preview-pane block grow col">
            <div className="header">{app.name}</div>
            <div className="row">
                <div className="menu">
                    {app.pages.map((p) => (
                        <div>
                            <a
                                href="#"
                                onClick={() => (state.currentPage = p)}
                                key={p.name}
                            >
                                {p.name}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="content">
                    <h1>{state.currentPage.name}</h1>
                    {state.currentPage.widgets.map((w, ix) => (
                        <WidgetUI key={ix} widget={w} />
                    ))}
                </div>
            </div>
        </div>
    )
})

export const WidgetUI = observer(function WidgetUI_(p: { widget: Widget }) {
    const w = p.widget
    if (w.type === "title") return <h2>{w.title}</h2>
    if (w.type === "button") return <button>{w.title}</button>
    if (w.type === "scene") return <SceneUI shapes={w.shapes} />
    return exhaust(w)
})

export const SceneUI = observer(function SceneUI_(p: { shapes: Shape[] }) {
    const maxY = Math.max(
        ...p.shapes.map((s) => {
            if (s.type === "circle") return s.y + s.radius
            if (s.type === "rect") return s.y1
            return exhaust(s)
        })
    )
    const maxX = Math.max(
        ...p.shapes.map((s) => {
            if (s.type === "circle") return s.x + s.radius
            if (s.type === "rect") return s.x1
            return exhaust(s)
        })
    )
    return (
        <div
            className="scene"
            style={{
                position: "relative",
                width: `${maxX}px`,
                height: `${maxY}px`,
            }}
        >
            {p.shapes.map((shape, ix) => (
                <ShapeUI key={ix} shape={shape} />
            ))}
        </div>
    )
})

export const ShapeUI = observer(function ShapeUI_(p: { shape: Shape }) {
    const s = p.shape
    const backgroundColor = s.color || "black"
    if (s.type === "circle") {
        return (
            <div
                style={{
                    position: "absolute",
                    borderRadius: "100%",
                    top: `${s.y - s.radius}px`,
                    left: `${s.x - s.radius}px`,
                    width: `${2 * s.radius}px`,
                    height: `${2 * s.radius}px`,
                    backgroundColor,
                }}
            ></div>
        )
    }
    if (s.type === "rect") {
        return (
            <div
                style={{
                    position: "absolute",
                    top: `${s.y0}px`,
                    left: `${s.x0}px`,
                    width: `${s.x1 - s.x0}px`,
                    height: `${s.y1 - s.y0}px`,
                    backgroundColor,
                }}
            ></div>
        )
    }
    return exhaust(s)
})
