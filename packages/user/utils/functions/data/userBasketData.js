import { listDocuments } from "../fireStore";
import { getLink } from "../fireStorage";
import unauthorFetch from '../api/unauthorFetch'
import { getAndStoreData } from './getAndStoreData'
async function userBasketData(url) {
    let dataStore = []
    const res = await unauthorFetch(url)
    for (let i = 0; i < res.data.length; i++) {
        const data = await getAndStoreData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books/${res.data[i].bookId[0]}`)
        dataStore.push({checkoutId:res.data[i]._id , ...data[0]}) // store data to variable
    }
    return dataStore  ;
}
export {
    userBasketData,
}
