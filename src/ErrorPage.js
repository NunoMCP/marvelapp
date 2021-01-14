import React from "react"

function ErrorPage(props){
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
                        <h3>There has been an error fetching the comic's data, this is usually an issue with Marvel's API not having an associated image with the comic.</h3>
                        <h3>Using the randomize button will make another call to the server and fix the issue.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage