import App from "./App";
import Orders from "./Pages/Orders/Orders";
import Home from "./Pages/Home/Home";
const routes = [
    {path:"/",element:<Home/>},
    {path:"/order",element:<Orders/>}
]

export default routes;