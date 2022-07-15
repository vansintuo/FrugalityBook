import { atom } from "recoil";

const openSUState = atom({
    key:'OPENSU',
    default:false,
})
const openSIState = atom({
    key:'OPENSI',
    default:false,
})
export {
    openSIState,
    openSUState,
}