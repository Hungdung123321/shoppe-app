import { Home } from "../screens";
import Detail from "../screens/detail";
import ProductDetail from "../screens/productdetail";
import DefaultLayout from "./utils/DefaultLayout";

export const LAYOUT_TYPE = {
    DEFAULT: 1
}

export const SCREEN_NAME = {
    HOME: 'Home',
    DETAIL: 'detail',
    PRODUCT_DETAIL: 'product_detail'
}

export const SCREEN_ID = {
    HOME: 'Home',
    DETAIL: 'detail',
    PRODUCT_DETAIL: 'product_detail'
}

export const HomeScreen = {
    name: SCREEN_NAME.HOME,
    screen_id: SCREEN_ID.HOME,
    component: Home,
    layout: DefaultLayout,
    isSearchBar: true
}

export const DetailScreen = {
    name: SCREEN_NAME.DETAIL,
    screen_id: SCREEN_ID.DETAIL,
    component: Detail,
    layout: DefaultLayout,
    isSearchBar: true
}

export const ProductDetailScreen = {
    name: SCREEN_NAME.PRODUCT_DETAIL,
    screen_id: SCREEN_ID.PRODUCT_DETAIL,
    component: ProductDetail,
    layout: DefaultLayout,
    isSearchBar: false
}

export const appRoute = [
    HomeScreen,
    DetailScreen,
    ProductDetailScreen,
]