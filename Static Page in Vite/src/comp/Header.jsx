
//  const Logo = () => <img src="/src/assets/react-logo.png" id="react-logo" /> //original Logo

import reactLogo from '/src/assets/react-logo.png'

const Logo = () => {
    return (
    <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
    )
}

function Header() {
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
                <h1>I'm Stoked to learn React!</h1>
            </header>
        </div>
    )
}
 
export default Header


