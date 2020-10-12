import * as React from "react"
import { observer } from "mobx-react-lite"
import { app1 } from "./EDIT-THIS/app1"
import { app2 } from "./EDIT-THIS/app2"
import { InterpreterUI } from "./EDIT-THIS/interpreter"
const emoji = {
    page: <span role="img">📝</span>,
    heart: <span role="img">❤</span>,
}
export const App = observer(() => {
    return (
        <div className="col grow">
            <div className="page-header">RedFabriQ {emoji.heart} Hackaton</div>
            <div className="row">
                <div className="grow basis0">
                    <span className="instructions">
                        High Level Goal: create a low-code plateform.
                    </span>{" "}
                    <ul>
                        <li>
                            You must define two applications via simple JSON
                            object. (in{" "}
                            <span className="code">{emoji.page} app1.ts</span>{" "}
                            et{" "}
                            <span className="code">{emoji.page} app2.ts</span> )
                        </li>
                        <li>
                            You must write an interpreter in{" "}
                            <span className="code">
                                {emoji.page} interpreter.ts
                            </span>{" "}
                            that consume those JSON objects and render the
                            specified application as intented.
                        </li>
                        <li>
                            Both JSON objects must be valid instances of the
                            same Typescript type in{" "}
                            <span className="code">{emoji.page} model.ts</span>{" "}
                            json:{" "}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="page-body grow col">
                <div className="row">
                    <div className="block grow basis0">
                        <span className="instructions">App 1</span> Application
                        to manage a Library. It must have basic crud facilities
                        to add/delete/list Books and Authors. current app1 json:
                        <pre>{JSON.stringify(app1)}</pre>
                    </div>
                    <div className="block grow basis0">
                        <span className="instructions">App 2: </span>{" "}
                        Application to manage a Library. It must have basic crud
                        facilities to add/delete/list Books and Authors. Current
                        app2 json:
                        <pre>{JSON.stringify(app2)}</pre>
                    </div>
                </div>
                <div>
                    <span className="instructions">Interpreter Output:</span>
                </div>
                <div className="row">
                    <div className="grow basis0">
                        <InterpreterUI app={app1} />
                    </div>
                    <div className="grow basis0">
                        <InterpreterUI app={app2} />
                    </div>
                </div>
            </div>
        </div>
    )
})
