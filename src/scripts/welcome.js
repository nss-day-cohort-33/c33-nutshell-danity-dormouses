

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



function createLoginPage() {
welcomePageContainer.innerHTML = `

   <h1>Login Form</h1>
   <input type="text" placeholder="user name">
   <input type="text" placeholder="email">
   <button id="login-btn-submit">Login</button>
   <button id="return-to-welcomepage1">Return to Welcome Page</button>
   `
   document.getElementById("return-to-welcomepage1").addEventListener("click",
    createWelcomePage
    )
}





function createRegisterPage() {
    welcomePageContainer.innerHTML = `

    <h1>Registration Form</h1>
    <input id="reg-user-name" type="text" placeholder="new user name">
    <input id="reg-email" type="text" placeholder="your email address">
    <button id="registration-button-submit">Register</button>
    <button id="return-to-welcomepage2">Return to Welcome Page</button>
    `
    document.getElementById("return-to-welcomepage2").addEventListener("click", () => {
        console.log("you clicked the register button")
        createWelcomePage()
    })

    document.getElementById("registration-button-submit").addEventListener("click", () => {
        console.log("you clicked the register button")
    })
}





export {createWelcomePage, createLoginPage, createRegisterPage}