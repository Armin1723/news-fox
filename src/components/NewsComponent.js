import React from "react";

function NewsComponent(props) {

  return (
    <div className="card my-5 mx-5 news-card"> 
        <img src={props.imageUrl?props.imageUrl:"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} className="card-img-top" style={{height: "200px"}} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc?props.desc: 'Click on the button below to read more'}</p>
            <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
            <p className="card-text mt-2"><small>Last updated by <strong>{props.author}</strong> at : {props.publishedAt?Date(props.publishedAt):"Unknown"}</small></p>
         </div>
    </div>
  )
}

export default NewsComponent;
