// Notes:
// - Only render 1 instance (I already did this for you)
// - The star icon and photo (katie-zaferes.png) are in the images 
//   folder for your use
// - Make sure to include:
//     - image
//     - star icon (star.png), rating, and review count
//     - title
//     - cost/person
// - The main purpose of this challenge is to show you where our limitations
//   currently are, so don't worry about the fact that you're hard-coding all
//   this data into the component.
// */


function Card ({img,rating,review,country,title,price}) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <>
            <div className="card-container">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={img} alt="photo of kate zaferes by the pool" className="card-image" />
                <div className="card-rating">
                    <img src="./images/star.png" alt="star"  className="star-image"/>
                    <p>{rating} <span className="review-num">({review}) · {country}</span></p>
                </div>
                <p>{title}</p>
                <p><span className="bold">From ${price}</span> / person</p>

            </div>
        
        </>
    )


}

export default Card