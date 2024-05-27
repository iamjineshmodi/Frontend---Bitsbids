import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useNavigate,Link } from "react-router-dom";
import "./Login.css";

export default function LoginComponent() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password:"",
  });
  const { name, email,password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };
  return (
    
    
    <div className="Login">
      <div className="logpage">
      <div className="welcome">
      <h1 style={{color:'gold'}}>Welcome to BITS-Bids</h1>
      <h5 style={{color:'gold'}}>Buy.Sell.Bid</h5>
      </div>
      <div className="LoginForm">
        <h2 className="login_heading" style={{fontWeight:'lighter'}}>Login</h2>

        <div className="formBox">
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="my-3">
          <FormControl variant="outlined">
            <InputLabel htmlFor="input-with-icon-adornment" style={{color:'white'}}>
              Name:
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="name"
              type="text"
              value={name}
              onChange={(e)=>onInputChange(e)}
              style={{backgroundColor:'white',borderRadius:'10px',padding:'4px'}}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle style={{color:'black'}}/>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="my-3">
          <FormControl variant="outlined">
            <InputLabel htmlFor="input-with-icon-adornment" style={{color:'white'}}>
              Email ID:
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="email"
              type="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
              style={{backgroundColor:'white',borderRadius:'10px',padding:'4px'}}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle style={{color:'black'}}/>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="my-3">
          <FormControl variant="outlined">
            <InputLabel htmlFor="input-with-icon-adornment" style={{color:'white'}}>
              Password:
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="password"
              type="password"
              value={password}
              onChange={(e)=>onInputChange(e)}
              style={{backgroundColor:'white',borderRadius:'10px',padding:'4px'}}
              startAdornment={
                <InputAdornment position="start">
                  <KeyIcon style={{color:'black'}}/>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <Button
            variant="contained"
            color="success"
            type="submit"
          >
            Register
          </Button>
          <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
        </div>
          </form>
        </div>
        <div>
        
        </div>
      </div>
    </div>
    </div>
  );
}
// import {  useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";


// function Login() {
   
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();


//     async function login(event) {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:8085/api/v1/employee/login", {
//             email: email,
//             password: password,
//             }).then((res) => 
//             {
//              console.log(res.data);
             
//              if (res.data.message == "Email not exits") 
//              {
//                alert("Email not exits");
//              } 
//              else if(res.data.message == "Login Success")
//              { 
                
//                 navigate('/home');
//              } 
//               else 
//              { 
//                 alert("Incorrect Email and Password not match");
//              }
//           }, fail => {
//            console.error(fail); // Error!
//   });
//         }

 
//          catch (err) {
//           alert(err);
//         }
      
//       }

//     return (
//        <div>
//             <div class="container">
//             <div class="row">
//                 <h2>Login</h2>
//              <hr/>
//              </div>

//              <div class="row">
//              <div class="col-sm-6">
 
//             <form>
//         <div class="form-group">
//           <label>Email</label>
//           <input type="email"  class="form-control" id="email" placeholder="Enter Name"
          
//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
          
//           />

//         </div>

//         <div class="form-group">
//             <label>password</label>
//             <input type="password"  class="form-control" id="password" placeholder="Enter Fee"
            
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
            
//             />
//           </div>
//                   <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
//               </form>

//             </div>
//             </div>
//             </div>

//      </div>
//     );
//   }
  
//   export default Login;
