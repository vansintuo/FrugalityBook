import React, { useRef } from "react";
import { CardContent, makeStyles } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
// import emailjs from "emailjs-com";
export default function Contact() {
  const [loading, setLoading] = React.useState(false);
  console.log(`URL: ::::${process.env.NEXT_PUBLIC_BASE_URL}`);
  function handleSendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    setLoading(true);
    emailjs
      .sendForm(
        "service_l7zatv4",
        "template_nezysil",
        e.target,
        "user_1945YXagJIJRBe0lVvr4L"
      )
      .then((res) => {
        console.log("Messags is send!");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <Card
        style={{
          maxWidth: 400,
          margin: "auto",
          padding: "20px 5px",
          backgroundColor: "#ddd",
        }}
      >
        <CardContent>
          <Typography variant="h5" color="#00bdd7">
            Contact Us
          </Typography>
          <Typography variant="body1">
            Full up this the form our team get back to you within 24 hours.We
            happy to hepls you and don&apos;t be shy drop your problem here.
          </Typography>
          <form onSubmit={handleSendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  name="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  name="number"
                  type="number"
                  label="Phone"
                  placeholder="Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  name="messages"
                  label="Messges"
                  multiline
                  rows="5"
                  placeholder="Type your Message"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <Button
                  style={{ backgroundColor: "#00bdd7" }}
                  type="submit"
                  variant="contained"
                  fullWidth
                  disableRipple={loading}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Grid></Grid>
    </div>
  );
}
