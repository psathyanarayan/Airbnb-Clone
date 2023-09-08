import React from "react"
import "/src/styles/Card.css"
export default function Card(props) {
    let badgeText = ""
    if(props.item.openSpots === 0) badgeText = "SOLD OUT"
    else if(props.item.location == "Online") badgeText = "ONLINE"
    console.log(props.item.openSpots)
    return(
        <div className="card-container">
            <div className="card-img">
                <img className="img" src={`public/images/${props.item.coverImg}`} alt="" srcset="" />
                {badgeText != "" && <div className="tag"><p>{badgeText}</p></div>}
            </div>
            <div className="card-body">
                <div className="card-rating">
                    <img src="public/images/star.png" alt="" srcset="" />
                    <p className="rating">{props.item.stats.rating.toFixed(1)}</p>
                    <p className="data">({props.item.stats.reviewCount}).{props.item.location}</p>
                </div>
                <p className="card-data">{props.item.title}</p>
                <div className="card-cost">
                    <p className="card-cost-bold">From ${props.item.price} /</p>
                    <p className="person">person</p>
                </div>
                
            </div>
        </div>
    )
}