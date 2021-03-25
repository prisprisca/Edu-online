import React from 'react'
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';
// import { Avatar } from '@material-ui/core';
//  import {Avatar } from "react-bootstrap";

function Head() {
    // const history=useHistory()
    // function logout(){
    //     history.push('/')
    // }
    return (
        <div
        
        style={{ background: "#0f0b8b", height: "50px",width:'100%', marginTop: "0", display:'flex', position: 'sticky',
        top: '0',
        zIndex: '100' }}
      >
        <Link
          to="/postlist"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <p
            style={{
              marginLeft:'1rem',
              padding: "0.4rem",
              fontFamily: "Times New Roman",
              fontSize: "1.5rem",
            }}
          >
            Edu-Online
          </p>
        </Link>
        <div style={{marginLeft:'auto'}}>
        <ul style={{listStyle:'none', display:'flex'}}>
        <li>
        <Link style={{color:'white'}} to='/postlist'>
            <p style={{textAlign:'center', padding:'1rem'}}> Posts</p>
       
        </Link>
        </li>
        <li >
        <Link  style={{color:'white'}} to='/tutorial'>
        <p  style={{textAlign:'center', padding:'1rem'}}>Add </p>
        </Link>
        </li>
        
        <Link to='/profile'>
        <Avatar size="30" round={true} style={{ margin:'0.5rem'}}/>
        </Link>    
       
           
        
        </ul>
        
        </div>
        {/* <Nav>
            <NavDropdown title='UserName' style={{color:'white', padding:'0.5rem'}}>
                <NavDropdown.Item onClick={logout}>Profile</NavDropdown.Item>

            </NavDropdown>
        </Nav> */}
       
        
      </div>
    )
}

export default Head
