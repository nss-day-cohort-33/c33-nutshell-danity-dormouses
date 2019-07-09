
import {createWelcomePage} from "./welcome.js"
import {createDashBoard} from "./dashboard.js"
import {createChatBoard} from "./chats.js"


if (sessionStorage.getItem("userId") === null) {
    createWelcomePage()
  }

  else {
    createDashBoard()
  }


