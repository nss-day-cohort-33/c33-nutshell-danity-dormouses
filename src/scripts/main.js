
import {createWelcomePage,} from "./welcome.js"
import { createDashBoard } from "./dashboard.js";




// createWelcomePage()

if (sessionStorage.getItem("userId") === null) {
    createWelcomePage()
  }

  else {
    createDashBoard()
  }


