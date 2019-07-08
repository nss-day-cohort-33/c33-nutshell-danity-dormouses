import {createRegisterPage} from "./registrationpage.js"
import {createLoginPage} from "./loginpage.js"


let welcomePageContainer = document.getElementById("welcome-page")


function createWelcomePage() {
    welcomePageContainer.innerHTML =`
    <div id="welcome-pagedynamic">
    <h1>Welcome Page</h1>
    <h2>Welcome to Nutshell, please Register or Login to continue to your Dashboard</h2>
    <button id="login-btn">Login</button>
    <button id="register-btn">Register</button>
    </div>
    `
    document.getElementById("login-btn").addEventListener("click", () => {
        createLoginPage()
    })

    document.getElementById("register-btn").addEventListener("click", () => {
        createRegisterPage()
    })


}





export {createWelcomePage, welcomePageContainer}