import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-df319-default-rtdb.europe-west1.firebasedatabase.app/"
}


function inputField () {
    const app = initializeApp(appSettings)
    const database = getDatabase(app)
    const shoppingListInDB = ref(database, "shoppingList")

    const inputFieldEl = document.getElementById("input-field")
    const addButtonEl = document.getElementById("add-button")
    const shoppingListEl = document.getElementById("shopping-list")
    
    function buttonAction() {
        let inputValue = inputFieldEl.value
        
        push(shoppingListInDB, inputValue)
        
        clearInputFieldEl()
    
        appendItemToShoppingListEl(inputValue)
    }
    
    function clearInputFieldEl() {
        inputFieldEl.value = ""
    }
    
    function appendItemToShoppingListEl(itemValue) {
        shoppingListEl.innerHTML += `<li>${itemValue}</li>`
    }

    onValue(shoppingListInDB, function(snapshot) {
        let itemsArray = Object.values(snapshot.val())
        
        // Challenge: Write a for loop to iterate on itemsArray and console log each item
    })

    return (
        
        
        <>
            <input type="text" id="input-field" placeholder="Bread"></input>
            <button id="add-button" onClick={buttonAction}>Add to cart</button>
            <ul id="shopping-list"></ul>
        </>

    )
}

