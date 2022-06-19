const deleteData = async (url)=>{
    let data = {}
    try{
        const res = await fetch(url, {method:'DELETE'})
        data = await res.json()
        
    }catch(error){
        console.log('error :::: ', error)
    }
    return data
}
export default deleteData;