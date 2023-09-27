This assignment was to build upon the previous exercise ('Static Page - Step 1') and do the following:

- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

The scrimba lesson doesn't use any custom components and just builds out the whole page in one unit like this:
`function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}`

I wanted to continue to practice using my own components and breaking the site down into individually rendered sections, so I created Logo, Header, Fun Facts, and Footer components and then put them into my page like this:
`const reactPage = ( 
   <div>
        <div id="contentContainer">
            <Logo />
            <Header />
            <FunFacts />
            
        </div>
        <Footer />
    </div>       
)`

This broke the rules slightly because I rendered the logo separately from the Header section.  But I did this because I wanted to arrange the sections using CSS grid.  I wanted to create a sidebar area where the logo would live and then have the content be more or less centered, all in one big column.  I wanted the footer to be separate from the grid so I put it in a div outside the container div for the rest of the site.