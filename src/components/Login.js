import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/postlist");
    } catch {
      setError("Failed to signin");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {/* {currentUser.email}  */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              sytle={{ background: "#4A47A3" }}
            >
              Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
        <Link to="/passwordreset"> Forgot Password?</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Dont have an account? <Link to="/signup">Sign Up</Link>
      </div>
        </Card.Body>
      </Card>
      
    </>
  );
}
