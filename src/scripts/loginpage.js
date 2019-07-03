import { createWelcomePage, welcomePageContainer } from "./welcome.js"
import { getUserID } from "./api.js";
import {createDashBoard} from "./dashboard.js"

function createLoginPage() {
    welcomePageContainer.innerHTML = `

       <h1>Login Form</h1>
       <input id="login-user-name" type="text" placeholder="user name">
       <input id="login-email" type="text" placeholder="email">
       <button id="login-btn-submit">Login</button>
       <button id="return-to-welcomepage1">Return to Welcome Page</button>
       `
       document.getElementById("return-to-welcomepage1").addEventListener("click",
        createWelcomePage
        )


        document.getElementById("login-btn-submit").addEventListener("click", () => {
            let loginName = document.getElementById("login-user-name").value
            let loginEmail = document.getElementById("login-email").value
            let letThemIn = false
            getUserID()
            .then ( realUser => {
                realUser.forEach(user => {
                    if (loginName === user.name && loginEmail === user.email) {
                        alert("you are in")
                        letThemIn = true
                        let name = loginName
                        let email = loginEmail
                        let id = `${user.id}`
                        sessionStorage.setItem("name", name)
                        sessionStorage.setItem("email", email)
                        sessionStorage.setItem("id", id)
                        createDashBoard()
                    }
                })
                    if (letThemIn === false) {
                    alert("not a valid user name or email address")
                    }
            })
        })
    }


    export { createLoginPage }
