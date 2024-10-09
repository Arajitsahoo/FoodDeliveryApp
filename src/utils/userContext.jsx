import { createContext } from "react";

const userContext = createContext({
    loggedinUser : "default value",
})
export default userContext;