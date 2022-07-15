const unauthorFetch = async (url)  => {
    let data 
    try {
        const res = await fetch(url)
        data = await res.json()
    } catch (error) {
        console.log(error)
    }
    return data
};
export default unauthorFetch;