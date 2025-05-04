import Shopping from "./Shopping"
import Home from "./Home"
import App from "../App";
import Cart from "./Cart";
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {index:true, element:<Home/>},
            {path:"shopping", element: <Shopping/>},
            {path:"cart",element:<Cart/>},
            

        ]
    },
    
]);


export default routes