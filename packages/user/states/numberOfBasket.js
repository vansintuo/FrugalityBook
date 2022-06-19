import { atom } from "recoil";
const numberOfBasket= atom({
    key:'NUMBEROFBASKET',
    default:0,
})
export {
    numberOfBasket,
}