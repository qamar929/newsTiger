import React, { Component } from 'react'

export default class NewsItem extends Component {

   
  render() {

    let {title , description , imgUrl , newsUrl} = this.props
    return (
      <div> 
        <div className="card" Style="width: 18rem;">
  <img src={!imgUrl?"https://www.reuters.com/resizer/S_ccI1OIzflY-jIpngoUcI_9rqI=/1920x1005/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TW6VYCJIGRKMPKQZHYNVZAF4IM.jpg": imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} rel='_blank' className="btn btn-outline-info">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
