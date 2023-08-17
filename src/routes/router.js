import { Home } from "../screens";
import Detail from "../screens/detail";
import DefaultLayout from "./utils/DefaultLayout";

export const LAYOUT_TYPE = {
    DEFAULT: 1
}

export const SCREEN_NAME = {
    HOME: 'Home',
    DETAIL: 'detail'
}

export const SCREEN_ID = {
    HOME: 'Home',
    DETAIL: 'detail'
}

export const HomeScreen = {
    name: SCREEN_NAME.HOME,
    screen_id: SCREEN_ID.HOME,
    component: Home,
    layout: DefaultLayout
}

export const DetailScreen = {
    name: SCREEN_NAME.DETAIL,
    screen_id: SCREEN_ID.DETAIL,
    component: Detail,
    layout: DefaultLayout
}

export const appRoute = [
    HomeScreen,
    DetailScreen,
]