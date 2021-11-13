import {CHAT_ROUTE, LOGIN_ROUTE, NEWS_ROUTE} from "./untils/const";
import Chat from "./components/Chat";
import Login from "./components/Login";
import News from "./components/pages/News";

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
        exact: false
    },
    {
        path: NEWS_ROUTE,
        Component: News,
        exact: true
    },
]