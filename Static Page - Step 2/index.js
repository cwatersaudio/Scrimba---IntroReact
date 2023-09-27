/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

// import React from "react"
// import ReactDOM from "react-dom"

const Logo = () => <img src="./react-logo.png" id="react-logo" />
const Header = () => {
    return (
    <div>
        <nav>
            <Logo />
            <h1>What I'm Stoked For in Learning React</h1>
        </nav>
    </div>
)
}
const FunFacts = () => {    //renamed this
    return (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

const reactPage = ( 
    <div>
        <Header />
        <FunFacts />

    </div>
)


ReactDOM.render(reactPage, document.getElementById("root"))
