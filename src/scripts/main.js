
import {createWelcomePage,} from "./welcome.js"
import {createChatBoard} from "./chats.js"
import { createDashBoard } from "./dashboard.js";



if (sessionStorage.getItem("userId") === null) {
    createWelcomePage()
}

else {
    createDashBoard()
}

