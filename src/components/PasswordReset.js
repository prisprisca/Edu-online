import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { auth } from "../Firebase";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <>
      <div
        className="nav-header"
        style={{ background: "#4A47A3", height: "50px", marginTop: "0" }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <p
            style={{
              textAlign: "center",
              padding: "0.2rem",
              fontFamily: "Times New Roman",
              fontSize: "2rem",
            }}
          >
            EDU Community
          </p>
        </Link>
      </div>
      <div style={{ width: "100%", margin: "auto" }}>
        <h1
          style={{
            fontFamily: "times",
            fontSize: "1.5rem",
            textAlign: "center",
            margin: "1.5rem",
          }}
        >
          Reset your Password
        </h1>
        <div>
          <form
            action=""
            style={{
              maxWidth: "450px",
              margin: "auto",
              background: "white",
              height: "40vh",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              lineHeight: "2rem",
            }}
          >
            {emailHasBeenSent && (
              <div style={{ color: "blue" }}>
                An email has been sent to you!
              </div>
            )}
            {error !== null && <Alert severity="error">{error}</Alert>}
            <label style={{ marginLeft: "1rem" }}>Email:</label>
            <input
              style={{ lineHeight: "2rem", margin: "1rem" }}
              type="email"
              name="userEmail"
              id="userEmail"
              value={email}
              placeholder="Input your email"
              onChange={onChangeHandler}
            />
            <button
              style={{
                color: "white",
                padding: "0.2rem",
                margin: "1rem",
                background: "blue",
                border: "none",
              }}
              onClick={(event) => {
                sendResetEmail(event);
              }}
            >
              Send me a reset link
            </button>
          </form>
          <Link to="/login">
            
            <p style={{ textAlign: "center", margin: "1.4rem" }}>
              Back to sign in page
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default PasswordReset;
