import React from "react";
import { ReactDOM } from "react";
import'./Card.css';

function Card(props){
    return(
     <>
    <div className="cards">
    <div className="card">
    <img src={props.imgsrc}alt="mypic" className="card__img" />
    <div className="card__info">
    <span className ="card__category">{props.sname}</span>
    <h3 className="class__title"> {props.title}</h3>
    <a class="btn" href ={props.link} target="_blank">
    <button class="btn">View more</button>
    </a>
    </div>
    </div>
    </div>
    </>
    );
}
export default Card;
