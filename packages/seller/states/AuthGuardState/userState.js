import { atom } from "recoil";

const userState= atom({
    key:"USERSTATE",
    default:null
})
const loadingState = atom({
    key:"LOADINGSTATE",
    default:false
})
const helpRunState = atom({
    key:"TESTSTATE",
    default:false
})
export {
    userState,
    loadingState,
    helpRunState,
}