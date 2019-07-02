import { getUserID, addNewUser } from "./api.js"



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
        createWelcomePage()
    })

    function createNewUser(userName, userEmail) {
        return {
            name: userName,
            email: userEmail
        }

    }

    document.getElementById("registration-button-submit").addEventListener("click", () => {
        let registerName= document.getElementById("reg-user-name").value
        let registerEmail = document.getElementById("reg-email").value
        let newUserObject = createNewUser(registerName, registerEmail)
        let isThereAUser = false
       console.log(newUserObject)
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

            }
        })


    })
}



// else {
//     addNewUser(newUserObject)
// }



export {createWelcomePage, createLoginPage, createRegisterPage}