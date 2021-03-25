import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {FormControlLabel, Radio, RadioGroup,  FormControl, FormLabel} from '@material-ui/core'

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/postlist")

    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  const [values, setValue] = React.useState();
  const handleChang = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Card style={{marginTop:'1rem'}}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group>
            <FormControl component="fieldset" style={{ marginTop: "5px" }}>
            <FormLabel component="legend">Sign Up as</FormLabel>
            <RadioGroup
              row
              aria-label="specification"
              name="specify"
              value={values}
              onChange={handleChang}
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="facilitator"
                control={<Radio />}
                label="Facilitator"
              />
            </RadioGroup>
          </FormControl>

            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Sign up
            </Button>
           
          </Form>
          <div className="w-100 text-center mt-2">
        Already have an account? <Link to='/login'>Login</Link>
      </div>
        </Card.Body>
      </Card>
     
    </>
  );
}
