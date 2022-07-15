import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyle = makeStyles({
    img:{
        width:'250px',
        height:'250px',
        objectFit:'cover',
        marginTop:'15px',
        borderTopRightRadius:'10px',
        borderBottomLeftRadius:'10px',
    }
})
const CardWithoutContent = ({src,href=""}) => {
    const classes = useStyle()
    return ( 
        <div>
          <Link href={href}><a>  <img className={classes.img} 
          src={src} ></img></a></Link>
        </div>
     );
}
 
export default CardWithoutContent;