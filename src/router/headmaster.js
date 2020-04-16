import type {TRoutes} from "../models/Route/Route";
import Dashboard from "../views/headmaster/dashboard";


const headmasterRoutes: TRoutes = [
    {
        path: "/",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: ""
    },
];

export default headmasterRoutes;
