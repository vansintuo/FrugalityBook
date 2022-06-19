import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Button, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, fontSize } from "@mui/system";
const useStyles = makeStyles({
  NotfoundNumber: {
    fontSize: "60px",
    textAlign: "center",
  },

  Icon: {
    textAlign: "center",
  },
  Title: {
    textAlign: "center",
    fontSize: "40px",
  },
  Decs: {
    textAlign: "center",
    fontSize: "25px",
  },
  buttonUI: {
    textAlign: "center",
  },
});
const ErrorPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.Page}>
      <Box p={{ xs: 2, sm: 3, md: 5 }} className={classes.Page1}>
        <Box p={10}>
          <Typography className={classes.Icon}>
            {" "}
            <img
              width={120}
              height={120}
              src="/assets/icons/media/error-404.png"
              alt="instagram"
            />
          </Typography>

          {/* <Typography  className={classes.Icon} ><ErrorOutlineIcon style={{fontSize: "150px",}}/></Typography> */}
          <Box>
            <Typography className={classes.NotfoundNumber}>404</Typography>
          </Box>
          <Box pt={2}>
            <Typography className={classes.Title}>Data not Found</Typography>
            <Typography className={classes.Decs}>
              The data you are looking doesn't still exist in our system .
            </Typography>
          </Box>
          <Box pt={4}>
            <Link>
              <a href="/">
                <Typography className={classes.buttonUI}>
                  <Button variant="contained" size="large">
                    GO HOME
                  </Button>
                </Typography>
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ErrorPage;
