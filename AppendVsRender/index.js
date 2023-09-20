import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code. --> I'll bet I'll get a printout of the React object
4. See if you can explain what actually shows up in the browser
 */

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

// ^ already did this initially when trying to test my JSX; need to import ReactDOM

const mainPage = ( //again, wanted to try to do this using separate React components rather than just coding in the HTML
    <div>
        <Header />
        <Menu />
    </div>
)

function Header () {
    return (
        <div className ="centered" >
        <h1>Cozy Corner Coffee</h1>
        <em>Where friends meet and strangers become friends</em>
        </div>
    )
} 

function Menu () {
    return (
        <div className ="centered" >
        <ul id="menu">
            <li className="drink">Americano</li>
            <li className="price">3.00</li>
            <li className="drink">Latte</li>
            <li className="price">3.75</li>
            <li className="drink">Iced Coffee</li>
            <li className="price">3.00</li>
            <li className="drink">London Fog</li>
            <li className="price">2.75</li>
        </ul>
        </div>
    )
} 

// ReactDOM.render(mainPage, document.getElementById("root"))
document.getElementById("root").append(mainPage); //as suspected, this puts an object in the 'root' div