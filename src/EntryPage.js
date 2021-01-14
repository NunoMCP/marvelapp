import React from "react"

function EntryPage(props){
    return(
        <div>
            <div className="ui inverted menu fixed">
                <div className="ui container">
                    <p className="header item">Marvel API</p>
                </div>
                <div className="right menu">
                    <div className="item">
                        <button className="ui button right inverted" onClick={props.handlerClick}>Randomize</button>
                    </div>
                </div>
            </div>
            <div className="ui hidden divider custommargins"/>
            <div className="ui main text container">
                <div className="ui column">
                    <div className="ui segment">
                        <h3>Please click the randomize button to get a random Marvel comic.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage