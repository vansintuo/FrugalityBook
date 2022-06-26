
import * as React from "react";
import { Divider, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { categories } from "../../../utils/constant/categories";

export default function DropDown() {
    const [icon, setIcon] = React.useState(false)
    const useStyles = makeStyles((theme) => ({
        content: {
            display: 'none',
            position: 'absolute',
            minWidth: '200px',
            height: 'auto',
            boxShadow: "0px 1px 0px 0px grey",
            paddingBottom:'5px',
            borderRadius:'5px',
            "& table": {
                width: '100%',
                backgroundColor: '#00bdd7',
                "& tr": {
                    "& td": {
                        color: 'white',
                        padding: '5px',
                        fontSize: '17px',
                        "&:hover": {
                            "& a": {
                                color: 'red',
                            }
                        }
                    }
                }
            }
        },
        hover: {
            position: 'relative',
            display: 'inline-block',
            "&:hover": {
                cursor: "pointer",
                "& $content": {
                    position: 'absolute',
                    zIndex: '1',
                    display: 'block',
                    // animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
                },
            }
        },
        // "@keyframes myEffect": {
        //     "0%": {
        //         opacity: 0,
        //         transform: "translateY(-20%)"
        //     },
        //     "100%": {
        //         opacity: 1,
        //         transform: "translateY(0)"
        //     }
        // },
    }));
    const classes = useStyles();
    return (
        <div className={classes.hover} onMouseOver={() => setIcon(true)} onMouseOut={() => setIcon(false)}>

            <div >
                <Typography
                    component={Stack}
                    direction="row"
                    alignItems="center"
                    color="#00bdd7"
                    variant="h6"
                    fontSize='18px'
                >
                    Categories
                    {icon ? <ArrowDropDownIcon fontSize="inherit" sx={{ marginRight: 1 }} /> : <ArrowDropUpIcon fontSize="inherit" sx={{ marginRight: 1 }} />}
                </Typography>
            </div>
            <div className={classes.content}>
                <table>
                    {categories.map((item, index) => {
                        return <tr key={index}>
                            <td>
                                <Link href={`/bookCategories/${item.name}`}>{item.name}</Link>
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    );
}

