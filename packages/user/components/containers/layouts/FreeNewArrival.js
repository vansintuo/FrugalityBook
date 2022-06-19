import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import CardFree from "../../presentations/cards/CardFree";
const FreeNewArrival = ({ data }) => {
    const [dataBook, setDataBook] = React.useState([])
    return (
        <div style={{ backgroundColor: "rgba(242, 242, 240,0.2)" }}>
            <Grid container>
                <Grid item xs={12}>
                    <div id="under5">
                        <div style={{ textAlign: "center" }}>
                            <Typography
                                variant="h5"
                                style={{
                                    display: "inline-block",
                                    marginRight: "4px",
                                    color: "#00bdd7",
                                }}
                            >
                                Donated
                            </Typography>
                            <Typography
                                style={{ display: "inline-block", marginLeft: "4px" }}
                                variant="h5"
                            >
                                Book
                            </Typography>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant="subtitle1">
                                Books from our donators, happy to choose your need textBooks here
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <CardFree />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <CardFree />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <CardFree />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default FreeNewArrival;