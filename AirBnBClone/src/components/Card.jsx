

function Card (props) {
    
    const {coverImg,description,title,price,id,openSpots,location} = props.item;
    let badgeText ="";
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <>
            <div className="card-container">
                <div className="card--badge">{badgeText}</div>
                <img src={coverImg} alt="" className="card-image" />
                <div className="card-rating">
                    <img src="./images/star.png" alt="star"  className="star-image"/>
                </div>
                <p className="bold">{title}</p>
                <p>{description}</p>
                <p><span className="bold">From ${price}</span> / person</p>

            </div>
        
        </>
    )


}

export default Card