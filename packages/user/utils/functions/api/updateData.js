const updateData = async(url, body)=>{
    let data = {}
    try{
        const res = await fetch(url,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json ; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
        // we can convert to json file unless res is returned as json file ( key and value are string)
        data = await res.json()
    }catch(error){
        console.log(error)
    }
    return data ; 
}
export default updateData