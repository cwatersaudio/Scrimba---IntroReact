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
                <ul>
                    <li ClassName="list-item"><span>Was first released in 2013</span></li>
                    <li ClassName="list-item"><span>Was originally created by Jordan Walke</span></li>
                    <li ClassName="list-item"><span>Has well over 100k stars on GitHub</span></li>
                    <li ClassName="list-item"><span>Is maintained by Facebook</span></li>
                    <li ClassName="list-item"><span>Powers thousands of enterprise apps, <br></br>including mobile apps</span></li>
                </ul>
            </div>
        </div>   
        </>
    )
}

export default MainPage