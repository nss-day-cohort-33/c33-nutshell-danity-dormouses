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
    createLoginPage()
})


let registerButton = document.getElementById("register-btn").addEventListener("click", () => {
    createRegisterPage()
})

function createLoginPage() {
welcomePageContainer.innerHTML = `
   <form id="login-form">
   <h1>Login Form</h1>
   <input type="text" required placeholder="user name">
   <input type="text" required placeholder="email">
   <button id="login-btn-submit">Login</button>
   </form>
   `
}

function createRegisterPage() {
    welcomePageContainer.innerHTML = `
    <form id="registration-form">
    <h1>Registration Form</h1>
    <input type="text" required placeholder="new user name">
    <input type="text" required placeholder="your email address">
    <button id="registration-button-submit">Register</button>
    </form>
    `
}