import Login from "../views/guest/Login";
import type {TRoutes} from "../models/Route/Route";


const guestRoutes: TRoutes = [
    {
        path: "/",
        name: "Login",
        icon: "pe-7s-graph",
        component: Login,
        layout: ""
    },
];

export default guestRoutes;
