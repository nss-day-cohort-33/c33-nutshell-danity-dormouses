import { create } from "domain";

let welcomePageContainer = document.getElementById("welcome-page")


function createWelcomePage() {
    return `
    <div id="welcome-pagedynamic">
    <h1>Welcome Page</h1>
    <button id="login-btn">Login</button>
    <button id="register-btn">Register</button>
    </div>
    `
}


welcomePageContainer.innerHTML = createWelcomePage()

let loginButton = document.getElementById("login-btn").addEventListener("click", () => {
    console.log("you clicked login")
})


let registerButton = document.getElementById("register-btn").addEventListener("click", () => {
    console.log("you clicked register")
})