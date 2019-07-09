import { getUserID, addNewUser} from "./api.js"
import {welcomePageContainer, createWelcomePage} from "./welcome.js"
import {createDashBoard} from "./dashboard.js"


function createRegisterPage() {
    welcomePageContainer.innerHTML = `

    <h1 class="registration-header">Registration Form</h1>
    <div><input id="reg-user-name" type="text" placeholder="new user name"></div>
    <div><input id="reg-email" type="text" placeholder="your email address"></div>
    <div><input id="reg-password" type="text" placeholder="type password here"></div>
    <div><input id="reg-password-verify" type="text" placeholder="re-type password here"></div>
    <button id="registration-button-submit">Register</button>
    <button id="return-to-welcomepage2">Return to Welcome Page</button>
    `

    document.getElementById("return-to-welcomepage2").addEventListener("click", () => {
        createWelcomePage()
    })

    function createNewUser(userName, userEmail, passwordinput) {
        return {
            name: userName,
            email: userEmail,
            password: passwordinput
        }
    }

    document.getElementById("registration-button-submit").addEventListener("click", () => {
        let registerName = document.getElementById("reg-user-name").value
        let registerEmail = document.getElementById("reg-email").value
        let registerPassword = document.getElementById("reg-password").value
        let registerPasswordVerify = document.getElementById("reg-password-verify").value
        let newUserObject = createNewUser(registerName, registerEmail, registerPassword)
        let isThereAUser = false


         getUserID()
        .then( userData => {
            userData.forEach(user => {
                if (registerName === user.name || registerEmail === user.email) {
                    document.getElementById("reg-user-name").value = ""
                    document.getElementById("reg-email").value = ""
                    alert("Sorry that Name or Email is taken, please choose another!")
                    isThereAUser = true
                }


            })

            if (registerPassword !== registerPasswordVerify) {
                document.getElementById("reg-password").value = ""
                document.getElementById("reg-password-verify").value = ""
                alert("Sorry, your passwords do not match!")
                isThereAUser = true
            }

            if (isThereAUser === false) {
                addNewUser(newUserObject)
                .then(user => sessionStorage.setItem("userId", user.id))
                alert("Thank you for Registering, please Login to go to your Dashboard")
                createWelcomePage()

            }


        })

    })
}



export {createRegisterPage}