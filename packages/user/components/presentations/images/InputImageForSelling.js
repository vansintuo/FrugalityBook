import { Button, ButtonBase, TextField } from "@mui/material";
import Image from "@mui/icons-material/Image";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import React, { useState, useRef,useEffect } from "react";
const InputImageForSelling = ({ name ,defaultImageURL=null,}) => {
  const fileRef = useRef();
  const [imgUrl, setImgUrl] = useState(null);
  const [fileImage,setFileImage ] = useState(null)
  const handleUploadImage = (event) => {
    event.preventDefault();
    const file= event.target.files;
    setFileImage(file[0])
    setImgUrl(fileImage);
  };
  useEffect(()=>{
    setImgUrl(fileImage)
  },[fileImage])
  const handleOnClick = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };
  return (
    <div style={{marginTop:'15px'}}>
      {imgUrl!==null?
        <div>
          <img src={URL.createObjectURL(imgUrl)} width={200} height="fitObject"></img>
          <br />
          <button
            onClick={() => setImgUrl(null)}
            style={{ color: "red", border: "none", fontSize:'15px',fontFamily:'sans-serif'}}
          >
            Delete
          </button>
        </div>
        :
        <ButtonBase onClick={handleOnClick} style={{paddingLeft:'15px',paddingRight:'15px',marginTop:'15px'}}>
          <div>
        
              :<div>
                 {
                   defaultImageURL==null?
                   <AddAPhotoIcon
                   style={{ fontSize: 100, color: "rgba(0,0,0,0.2)" }}
                 ></AddAPhotoIcon>
                 :
                  <img src={defaultImageURL} width={200} height="fitObject" alt={'book'}></img>
                 }
            <p style={{color:'#00bdd7'}}>UPLOAD PICTURES</p>
              </div>
          
          </div>
          </ButtonBase>
        }
     <input
     style={{ display: "none" }}
     type="file"
     ref={fileRef}
     accept="image/*"
     name={name}
     onChange={handleUploadImage}
    //  multiple
   ></input>
    </div>
  );
};

export default InputImageForSelling;
