

function Card ({img,rating,review,title,price,id,openSpots,location }) {
    let badgeText ="Hello";
    // if (openSpots === 0) {
    //     badgeText = "SOLD OUT"
    // } else if (location === "Online") {
    //     badgeText = "ONLINE"
    // }
    
    return (
        <>
            <div className="card-container">
                <div className="card--badge">{badgeText}</div>
                <img src={img} alt="" className="card-image" />
                <div className="card-rating">
                    <img src="./images/star.png" alt="star"  className="star-image"/>
                    <p>{rating} <span className="review-num">({review}) · {location}</span></p>
                </div>
                <p>{title}</p>
                <p><span className="bold">From ${price}</span> / person</p>

            </div>
        
        </>
    )


}

export default Card