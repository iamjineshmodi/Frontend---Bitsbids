import * as React from "react";
// import { useState } from "react";
// import { Button } from "@mui/material";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import KeyIcon from "@mui/icons-material/Key";
// import AttachFileIcon from '@mui/icons-material/AttachFile'
import { GoogleLogin,GoogleOAuthProvider } from "@react-oauth/google";
// import "./Login.css";

export default function LoginComponent() {
  <GoogleOAuthProvider clientId="951991015467-v8qhf5kjfvg1smv8sp006qcidrc5askg.apps.googleusercontent.com">
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
  </GoogleOAuthProvider>;
  
  // const [email, setEmail] = useState("in28minutes");
  // const [password, setPassword] = useState("");
  // const [showErrorMessage, setShowErrorMessage] = useState(false);
  // // const navigate = useNavigate();
  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }
  // function onSuccess(googleUser) {
  //   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  // }
  // function onFailure(error) {
  //   console.log(error);
  // }

  // const date = new Date();
  // function handleSubmit() {
  //   if (
  //     email.at(0) === "f" &&
  //     parseInt(email.substring(1, 5)) >= date.getFullYear() - 4 &&
  //     parseInt(email.substring(1, 5)) <= date.getFullYear()
  //   ) {
  //     setShowErrorMessage(false);
  //   } else {
  //     setShowErrorMessage(true);
  //   }
  // }
  // return (
    
    
  //   <div className="Login">
  //     <div className="logpage">
  //     <div className="welcome">
  //     <h1 style={{color:'gold'}}>Welcome to BITS-Bids</h1>
  //     <h5 style={{color:'gold'}}>Buy.Sell.Bid</h5>
  //     </div>
  //     <div className="LoginForm">
  //       <h2 className="login_heading" style={{fontWeight:'lighter'}}>Login</h2>
  //       {showErrorMessage && (
  //         <div className="errorMessage">
  //           Authentication Failed. Please check your credentials
  //         </div>
  //       )}
  //       <div className="formBox">
  //       <div className="my-3">
  //         <FormControl variant="outlined">
  //           <InputLabel htmlFor="input-with-icon-adornment" style={{color:'white'}}>
  //             Email ID:
  //           </InputLabel>
  //           <Input
  //             id="input-with-icon-adornment"
  //             name="email"
  //             type="email"
  //             style={{backgroundColor:'white',borderRadius:'10px',padding:'4px'}}
  //             startAdornment={
  //               <InputAdornment position="start">
  //                 <AccountCircle style={{color:'black'}}/>
  //               </InputAdornment>
  //             }
  //             onChange={handleEmailChange}
  //           />
  //         </FormControl>
  //       </div>
  //       <div className="mb-4">
  //         <FormControl variant="outlined">
  //           <InputLabel htmlFor="input-with-icon-adorment" style={{color:'white'}}>
  //             Password:
  //           </InputLabel>
  //           <Input
  //             type="password"
  //             name="password"
  //             value={password}
  //             style={{backgroundColor:'white',borderRadius:'10px',padding:'4px'}}
  //             onChange={handlePasswordChange}
  //             id="input-with-icon-adorment"
  //             startAdornment={
  //               <InputAdornment position="start">
  //                 <KeyIcon style={{color:'black'}}/>
  //               </InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </div>
  //       </div>
  //       <div>
  //         <Button
  //           variant="contained"
  //           color="success"
  //           type="button"
  //           name="login"
  //           onClick={handleSubmit}
  //         >
  //           Login
  //         </Button>
  //       </div>
  //       <div>
        
  //       </div>
  //         <div className="new-user mt-4">
  //         New to BITS-Bids?
  //         <Button variant="outlined" color="warning" type="button" name="register" className="mt-2">Create your BITS-Bids Account</Button>          
  //         </div>
  //     </div>
  //   </div>
  //   </div>
  // );
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
