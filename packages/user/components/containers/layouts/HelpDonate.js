import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import PropTypes from 'prop-types'
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
const HelpDonate = () => {
    const width600px = useMediaQuery('(max-width:900px)')
    const img = '../../assets/donateBgPic.jpg'
    const useStyle = makeStyles(theme => ({
        root: {
            padding: theme.spacing(4, 4),
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
            marginLeft:'40px'
        },
       
    }));
    const classes = useStyle()
    return (
        <Container component="section" maxWidth="xl" className={classes.root}>
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
                         <p style={{marginLeft:'40px'}} >Books that you donated to our website , we donate them to other students in university that good at student.</p>
                         <div>
                    <Grid container>
                    <Grid item xs={6}>
                        <button
                            style={{
                                marginLeft: '30%',
                                width: '50%',
                                height: '7vh',
                                border: "1px solid #00bdd7",
                            }}
                        >
                            SEE MORE
                        </button>
                    </Grid>
                    <Grid item xs={6}>
                    <button
                            style={{
                                marginLeft: '30%',
                                width: '50%',
                                height: '7vh',
                                backgroundColor: "#00bdd7",
                                border: "1px solid #00bdd7",
                            }}
                        >
                            VIEW DETAIL
                        </button>
                    </Grid>
                    </Grid>

                    </div>
               
                    </div>
                </Grid>

            </Grid>
        </Container>


    );
}

export default HelpDonate;

