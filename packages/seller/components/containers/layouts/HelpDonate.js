import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import PropTypes from 'prop-types'
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { shadows } from "@mui/system";
const HelpDonate = ({onClick}) => {
    const width600px = useMediaQuery('(max-width:900px)')
    const img = '../../assets/donateBgPic.jpg'
    const useStyle = makeStyles(theme => ({
        container2: {
            padding: theme.spacing(4, 0),
        },
        container: {
            backgroundImage: `url(${img})`,
            backgroundSize:'100% 100%',
            height: '45vh',
            display: 'flex',
            flexDirection: 'column',

        },
        container1: {
            height: '45vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor:'rgba(0,0,0,0.1)',

        },
        title1:{
            marginLeft:'40px',
            marginTop:'8px'
             
        },
        view:{
            marginLeft: '30%',
            width: '50%',
            height: '7vh',
            backgroundColor: "#00bdd7",
            border: "1px solid #00bdd7",
            "&:hover": {
                cursor:"pointer",
                color:'white',
                boxShadow: "2px 2px",
                boxShadow: "1px 1px 2px grey"
              },
        },
        seeMore:{
            marginLeft: '30%',
            width: '50%',
            height: '7vh',
            border: "1px solid #00bdd7",
            "&:hover": {
                cursor:"pointer",
                color: "#00bdd7",
                boxShadow: "1px 1px 2px grey"
              },

        }
       
    }));
    const classes = useStyle()
    return (
        <div className={classes.container2}>
            <Grid spacing={0} container alignItems="stretch" >
                <Grid item xs={12} sm={6}>
                    
                    <div className={classes.container}>   
                    
                        </div>         
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.container1}>
                        <Typography variant="h5" component="h3" className={classes.title1}>
                            HELP US BY<span style={{ color: "#00bdd7" }}> DONATE</span>
                        </Typography>
                        <p style={{ marginTop: '0', marginBottom: '0', marginLeft:'40px' }}>Donate your book to our website ,
                         you can help alot of students in university.{" "}</p>
                         <p style={{width:'40px',height:'3px',backgroundColor:'#00bdd7', marginLeft:'40px'}}></p>
                         <p style={{marginLeft:'40px',fontWeight:"normal"}} >Books that you donated to our website , we donate them to other students in university that good at student.</p>
                         <div>
                    <Grid container>
                    <Grid item xs={6}>
                        <button onClick={onClick} className={classes.seeMore}>
                            SEE MORE
                        </button>
                    </Grid>
                    <Grid item xs={6}>
                    <button onClick={onClick} className={classes.view}>
                            VIEW DETAIL
                        </button>
                    </Grid>
                    </Grid>

                    </div>
               
                    </div>
                </Grid>

            </Grid>

        </div>
    );
}

export default HelpDonate;

