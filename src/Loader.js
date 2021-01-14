import React from "react"

function Loader(){
    return(
        <div ui className="ui container">
            <div className="ui active dimmer">
                <div className="ui text loader huge">
                    Loading
                </div>
            </div>
        </div>
    )
}

export default Loader