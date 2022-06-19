import React from 'react'
import { toast } from 'react-toastify'

const style ={
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

const Toastify = (statusCode, message)=>{
    if(statusCode == 200){
        toast.success(message , style)
    }
}
export default Toastify;