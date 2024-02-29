
 const Logo = () => <img src="./react-logo.png" id="react-logo" />

 export default function Header() {
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



