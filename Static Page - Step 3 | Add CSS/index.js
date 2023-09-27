/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

// import React from "react"
// import ReactDOM from "react-dom"

const Logo = () => <img src="./react-logo.png" id="react-logo" />
const Header = () => {
    return (
    <div id="Header">
        <header>
            <nav className="nav">
                <Logo />
                <ul id="Navbar">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        <h1>What I'm Stoked For in Learning React</h1>
        </header>
    </div>
)
}
const FunFacts = () => {   
    return (
    <div id="Facts">
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

const Footer = () => {
    return (
    <div id="footer">
        <footer>© 2023 Chris Waters development. All rights reserved.
        </footer>
    </div>
    )
}

const reactPage = ( 
   <div>
        <div id="contentContainer">
            <Header />
            <FunFacts />
            
        </div>
        <Footer />
    </div>       
)


ReactDOM.render(reactPage, document.getElementById("root"))
