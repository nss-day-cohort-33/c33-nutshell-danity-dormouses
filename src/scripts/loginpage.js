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
                        letThemIn = true
                        sessionStorage.setItem("UserID", user.id)
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
