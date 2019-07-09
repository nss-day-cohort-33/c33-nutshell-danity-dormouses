import { getUserID, addNewUser} from "./api.js"
import {welcomePageContainer, createWelcomePage} from "./welcome.js"
import {createDashBoard} from "./dashboard.js"


function createRegisterPage() {
    welcomePageContainer.innerHTML = `

    <h1>Registration Form</h1>
    <input id="reg-user-name" type="text" placeholder="new user name">
    <input id="reg-email" type="text" placeholder="your email address">
    <button id="registration-button-submit">Register</button>
    <button id="return-to-welcomepage2">Return to Welcome Page</button>
    `


    document.getElementById("return-to-welcomepage2").addEventListener("click", () => {
        createWelcomePage()
    })

    function createNewUser(userName, userEmail, userId) {
        return {
            name: userName,
            email: userEmail,
        }

    }

    document.getElementById("registration-button-submit").addEventListener("click", () => {
        let registerName = document.getElementById("reg-user-name").value
        let registerEmail = document.getElementById("reg-email").value
        let newUserObject = createNewUser(registerName, registerEmail)
        let isThereAUser = false


        getUserID()
        .then( userData => {
            userData.forEach(user => {
                if (registerName === user.name || registerEmail === user.email) {
                    alert("Sorry that Name or Email is taken, please choose another!")
                    isThereAUser = true
                }

            })

            if (isThereAUser === false) {
                addNewUser(newUserObject)
                .then(user => sessionStorage.setItem("userID", user.id))
                createDashBoard()

            }


        })

    })
}



export {createRegisterPage}