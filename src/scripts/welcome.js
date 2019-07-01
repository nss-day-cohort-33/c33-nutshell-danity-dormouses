import { create } from "domain";

let welcomePageContainer = document.getElementById("welcome-page")


function createWelcomePage() {
    return `
    <div id="welcome-pagedynamic">
    <h1>Welcome Page</h1>
    <h2>Welcome to Nutshell, please Register or Login to continue to your Dashboard</h2>
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
   <input type="text" placeholder="user name">
   <input type="text" placeholder="email">
   <button id="login-btn-submit">Login</button>
   <button id="return-to-welcomepage">Return to Welcome Page</button>
   </form>
   `
}

function createRegisterPage() {
    welcomePageContainer.innerHTML = `
    <form id="registration-form">
    <h1>Registration Form</h1>
    <input type="text" placeholder="new user name">
    <input type="text" placeholder="your email address">
    <button id="registration-button-submit">Register</button>
    <button id="return-to-welcomepage">Return to Welcome Page</button>
    </form>
    `
}

let returnToWelcomePage = document.getElementById("return-to-welcomepage").addEventListener("click", () =>  {
    createWelcomePage()
})



export {createWelcomePage}