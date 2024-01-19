import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

  constructor()
    {
        super();
        this.state = {
            page: 1,
           articles:[],
           loading: false
        }
    }

    async componentDidMount()
    {
let url  = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=086d1e1f5e054040aab7645f4b79a8c1";
this.setState({loading:true});
let data = await fetch(url);
let parsedData = await data.json()
console.log("parsed data");
console.log(parsedData);
this.setState({articles : parsedData.articles});
this.setState({loading:false});

    }

    handleNextPage  = async () => {

        let url  = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=086d1e1f5e054040aab7645f4b79a8c1&page=${this.state.page+1}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page+1,
            articles : parsedData.articles

        })
        this.setState({loading:false});
      
    }

    handlePrevPage  = async () => {

      
        let url  = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=086d1e1f5e054040aab7645f4b79a8c1&page=${this.state.page-1}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page-1,
            articles : parsedData.articles          

        })   
        this.setState({loading:false});
    }
  render() {
    return (
      <div className='container my-3'>
      <h2 align='center' >NewsTiger - Top Headlines</h2>
     {this.state.loading && <Spinner/>} 
      <div className='row'>
      {this.state.articles.map((element)=>{
       
     
        return     <div className='col md-4'>

           <NewsItem key={element.url}  title = {element.title?element.title:""} description={element.description?element.description:""}
            imgUrl={element.urlToImage} newsUrl ={element.url} />

</div>


        
      })}

      <div className='container d-flex justify-content-evenly'>
        
      <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevPage} className="btn btn-outline-dark">&larr; Previous</button>
      <button type="button" className="btn btn-outline-dark" onClick={this.handleNextPage}>Next &rarr;</button>
      </div>
      </div>

      </div>
    )
  }
}
