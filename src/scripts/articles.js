import {getUserId} from "./api"

let welcomePageContainer = document.getElementById("welcome-page")




function createArticlesSection(user) {
    welcomePageContainer.innerHTML =
    `
    <h2>Articles</h2>

    `
    let dataKeyUserName = sessionStorage.getItem("name")
    let dataKeyEmail = sessionStorage.getItem("email")
    console.log(dataKeyUserName)
    console.log(dataKeyEmail)
}


let dataID = []

// getUserId()
// .then(userData =>{
//         userData.forEach(user => {
//                 if (user.name === dataKeyUserName && user.email === dataKeyEmail) {
//                         dataID.push(user.id)
//                     }
//                 })
//             })


export {createArticlesSection}