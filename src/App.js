import React from "react"
import './App.css';
import Content from "./Content"
import marvel from "./api/marvel"
import Loader from "./Loader"
import ErrorPage from "./ErrorPage"
import EntryPage from "./EntryPage"

class App extends React.Component{
constructor(props){
  super(props)

  this.state = {
    imagePath: null,
    imageType: null,
    imageFile: null,
    comicTitle: null,
    comicDescription: null,
    comicSeries: null,
    comicPrice: null,
    spinner: false,
    noImage: false,
    firstLoad: true,
  }
}


  apiCall = async term => {
    this.setState({spinner: true})
    const response = await marvel.get("public/comics?orderBy=issueNumber&limit=1&offset="+term)
    if(!response.data.data.results[0].images[0]){
      this.setState({noImage: true})
    } else {
    this.setState({
      comicTitle: response.data.data.results[0].title,
      imagePath: response.data.data.results[0].images[0].path,
      imageFile: "." + response.data.data.results[0].images[0].extension,
      imageType: "/detail",
      noImage: false,
      comicDescription: response.data.data.results[0].description,
      comicSeries: response.data.data.results[0].series.name,
      comicPrice: response.data.data.results[0].prices[0].price,
      firstLoad: false,
    })
  }
    if(this.state.comicDescription === null){
        this.setState({comicDescription: "No available comic description."})
      }
    this.setState({spinner: false})
  }

  render(){
    if(this.state.spinner === true){
      return(
        <div>
          <Loader handlerClick={() => this.apiCall(Math.floor(Math.random()*25720))}/>
        </div>
      )
    }else if(this.state.firstLoad === true){
      return(
        <div>
          <EntryPage handlerClick={() => this.apiCall(Math.floor(Math.random()*25720))}/>
        </div>
      )
    }
    else if(this.state.noImage === true){
      return(
        <div>
          <ErrorPage handlerClick={() => this.apiCall(Math.floor(Math.random()*25720))}/>
        </div>
      )
    }else{
      return(
        <div>
          <Content
          title={this.state.comicTitle}
          imagePath={this.state.imagePath+this.state.imageType+this.state.imageFile}
          description={this.state.comicDescription}
          series={this.state.comicSeries}
          price={this.state.comicPrice + "$"}
          handlerClick={() => this.apiCall(Math.floor(Math.random()*25720))}
          />
        </div>
      )
    }
  }
}


//marvel comics api tem 25721
export default App;