import React from 'react'
import './App.css'


export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    let passwordMatch = false;

    const [userInfo,updateUserinfo] = React.useState({
      email:"",
      password:"",
      confirmPassword:"",
      okayToEmail: false,
    })
    
    function handleSubmit(event) {
        event.preventDefault()
        validatePassword(userInfo.password,userInfo.confirmPassword)
        userInfo.okayToEmail === true && passwordMatch && console.log("Signed up!") 
        passwordMatch && console.log("Form submitted!") 

    }

    function validatePassword (pass1,pass2) {

      if (pass1 === pass2) {
        console.log("Passwords match!") 
        passwordMatch = true
       } else {
        console.log ("Passwords don't match!")
        passwordMatch = false
       }
        
    }

    function handleChange (event) {
      const {name,value,type,checked} = event.target

      updateUserinfo(prevInfo => {
        return {
        ...prevInfo,
        [name]: type==="checkbox" ? checked : value
        }
      })
    }
    
    console.log(userInfo)
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    value={userInfo.email}
                    name="email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    value= {userInfo.password}
                    onChange={handleChange}
                    name="password"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    value= {userInfo.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        onChange={handleChange}
                        type="checkbox"
                        checked={userInfo.okayToEmail}
                        name="okayToEmail"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                    name="submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
