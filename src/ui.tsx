import * as React from "react"
import { observer } from "mobx-react-lite"
import { MODEL } from "./YOU-CAN-ONLY-EDIT-THIS/model"
import { app1 } from "./YOU-CAN-ONLY-EDIT-THIS/app1"
import { app2 } from "./YOU-CAN-ONLY-EDIT-THIS/app2"
import { InterpreterUI } from "./YOU-CAN-ONLY-EDIT-THIS/interpreter"

export const App = observer(() => {
    return (
        <div className="col grow">
            <div className="page-header block">RedFabriQ ❤ Hackaton</div>
            <div className="page-body grow row">
                <PreviewUI
                    app={app1}
                    instructions="this must be an application to manage a Library. It must have basic crud facilities to add/delete/list Books and Authors"
                />
                <PreviewUI
                    instructions="this must be a coffee machin interface"
                    app={app2}
                />
            </div>
        </div>
    )
})

export const PreviewUI = observer(function PreviewUI_(p: {
    instructions: string
    app: MODEL
}) {
    return (
        <div className="page-app2 block grow basis0 col">
            <div className="block">
                <b>CURRENT APP SPECIFICATION:</b> (model):
                <pre>{JSON.stringify(p.app)}</pre>
            </div>
            <div className="block grow">
                <b>TARGET APP DESCRIPTION: </b>
                {p.instructions}
            </div>
            <div className="grow block">
                <div>
                    <b>CURRENT APP:</b>
                </div>
                <InterpreterUI app={p.app} />
            </div>
        </div>
    )
})
