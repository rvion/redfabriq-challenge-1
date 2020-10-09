import * as React from "react"
import { observer } from "mobx-react-lite"

export const App = observer(() => {
    return (
        <div className="col grow">
            <div className="page-header block">HEADER</div>
            <div className="page-body grow row">
                <div className="page-app1 block grow basis0"></div>
                <div className="page-app2 block grow basis0"></div>
            </div>
        </div>
    )
})
