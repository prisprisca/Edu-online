import React from "react";
import "../style/Contact.css";
import { TextField, Button } from "@material-ui/core";

function Contact() {
  return (
    <div
      className="contact"
      style={{
        paddingBottom: '50px',
        minHeight: "100%",
        background: "white",
        margin: "1rem",
        padding: "1rem",
        boxShadow: "10px 5px 10px lightgray",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>
          Do you have any inquiries or questions?
          <br /> Please fill out the form to contact us. Thank you!!
        </p>
      </div>
      <div className="input_form">
        <form style={{ margin: "2rem" }}>
          <TextField label="Full Name" fullWidth autocomplete="none" />
          <TextField label="Email" fullWidth autocomplete="none" />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={5}
            autocomplete="none"
          />
          <Button
            type="submit"
            style={{
              background: "#0f0b8b",
              color: "white",
              width: "25%",
              marginTop: "0.5rem",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
