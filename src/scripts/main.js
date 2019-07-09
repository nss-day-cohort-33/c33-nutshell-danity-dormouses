
<<<<<<< HEAD
import {createWelcomePage,} from "./welcome.js"
import { createDashBoard } from "./dashboard.js";
=======
import {createWelcomePage} from "./welcome.js"
import {createDashBoard} from "./dashboard.js"
import {createChatBoard} from "./chats.js"
>>>>>>> master




<<<<<<< HEAD
// createWelcomePage()

if (sessionStorage.getItem("userId") === null) {
    createWelcomePage()
  }

  else {
    createDashBoard()
  }
=======
if (sessionStorage.getItem("userId") === null) {
    createWelcomePage()
}
>>>>>>> master

else {
    createDashBoard()
}

