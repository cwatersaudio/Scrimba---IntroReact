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


function Card () {
    return (
        <>
            <div className="card-container">
                <img src="./src/assets/katie-zaferes.png" alt="photo of kate zaferes by the pool" className="card-image" />
                <div className="card-rating">
                    <img src="./src/assets/star.png" alt="star"  className="star-image"/>
                    <p>5.0<span className="review-num">(6)·USA</span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>

            </div>
        
        </>
    )


}

export default Card