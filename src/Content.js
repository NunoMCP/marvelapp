import React from "react"

function Content(props) {
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
    <div className="ui two column centered grid mt-5">
      <div className="eight wide column">
        <div className="ui main text container">
          <h1 className="ui header">{props.title}</h1>
          <p>{props.description}</p>
          <h2>Comic series:<br/>{props.series}</h2>
          <h3>Comic price: <br/>{props.price}</h3>
        </div>
      </div>
      <div className="four wide column centered">
        <img className="ui image huge" alt="No available cover" src={props.imagePath}/>
      </div>
    </div>
  </div>
  )
}

export default Content
