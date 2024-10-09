// import viteLogo from "/vite.svg";
import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantMenuPage";
import {Outlet, createBrowserRouter} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";

const About = lazy(() => import("./components/About"));


function App() {

  const [loggedUser, setLoggedUser] = useState("Arajit Sahoo")
  useEffect(()=>{
    const data = {
      name: "AJS"
    }
    setLoggedUser(data.name);
  },[]);

  return (
    <>
    <userContext.Provider value={{loggedinUser: loggedUser, setLoggedUser}}>
      <Header />
      <Outlet />
      </userContext.Provider>
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
      },
      {
        path:"/ContactUs",
        element: <ContactUs />,
      },
      {
        path:"/Restaurants/:resId",
        element: <RestaurantInfo />,
      }
    ],

    errorElement: <Error />
  },
  
])



export default App;
