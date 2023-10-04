// export default function MainPage () {
//     return (
//         <>
//             <div id="facts-container">
//                 <div id="facts-content">
//                     <h1>Fun facts about React</h1>

//                 </div>
            
//             </div>
        
//         </>


//     )

// }

// MY PRIOR CODE

const MainPage = () => {   
    return (
        <>
        <div id="facts-container">
            <div id="facts-content">
                <h1>Fun facts about React</h1>
                 <div id="fact-list">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="10" height="161" viewBox="0 0 10 161" fill="none">
                        <circle cx="4.80333" cy="4.80333" r="4.80333" fill="#61DAFB"/>
                        <circle cx="4.80333" cy="43.8033" r="4.80333" fill="#61DAFB"/>
                        <circle cx="4.80333" cy="80.8033" r="4.80333" fill="#61DAFB"/>
                        <circle cx="4.80333" cy="117.803" r="4.80333" fill="#61DAFB"/>
                        <circle cx="4.80333" cy="155.803" r="4.80333" fill="#61DAFB"/>
                    </svg> */}
                    <ul>
                        <li ClassName="list-item"><span>Was first released in 2013</span></li>
                        <li ClassName="list-item"><span>Was originally created by Jordan Walke</span></li>
                        <li ClassName="list-item"><span>Has well over 100k stars on GitHub</span></li>
                        <li ClassName="list-item"><span>Is maintained by Facebook</span></li>
                        <li ClassName="list-item"><span>Powers thousands of enterprise apps, <br></br>including mobile apps</span></li>
                    </ul>
                    
                </div>    
            </div>
        </div>   
        </>
    )
}

export default MainPage