import React,{useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Footer from './Footer'
import Head from './Head'

function Profile() {
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogOut() {
      setError("")
  
      try {
        await logout()
        history.push("/")
      } catch {
        setError("Failed to log out")
      }
    }

   
    return (
        <>
        <Head/>
        <Card style={{margin:'auto', width:'70%', top:'0rem', boxShadow: '10px 5px 10px lightgray'}}>
            <Card.Body >
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
                <Link to="/updateprofile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
            </Card.Body>

        </Card>
        <div className="w-100 text-center mt-20" >
            <Button variant="link" onClick={handleLogOut}>Log Out</Button>
        </div>
        <Footer/>
            
        </>
    )
}

export default Profile
