// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"


    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const ServList = () => {  //Wanted to try to use a custom React element for the unordered list instead of hard coding it 
    return (
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>  
    )
}


const navBar = ( //using the custom element didn't initially work until I changed the case of the variable name
    <nav>
        <h1>Hey this is Chris!</h1>
        <ServList />
    </nav>
    
)


ReactDOM.render (navBar, document.getElementById("root"))
