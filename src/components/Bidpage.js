import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbar1 from './Navbar1';
import  Box  from '@mui/material/Box';
import io from "socket.io-client";
import element from './data.json'
import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import ip from './Ip';
const socket = io.connect(`http://localhost:3001`);
export default function Bidpage() {
  
  const location = useLocation();
  const data = location.state;
  const [bid, setBid] = useState(0);
  const [flag, setFlag] = useState(true);
  const id= data.id
  const[lastbidder,setLastbidder]=useState();
  // console.log(id)

  socket.emit("join_room", data.id)
// console.log(data.randomname)
  const sendBid = (bid) => {
    socket.emit("send_bid", { bid, id});
  };

    socket.on("new_bid", (data,randomname) => {
    
setBid(bid+50)
setLastbidder(randomname)
 });

var [date,setDate] = useState(new Date());
    
useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});
const [ba, setBa] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await fetch(`http://localhost:8080/api/bids`);
      const getdata = await res.json();
      setBa(getdata);
      console.log(getdata);
    };

    getdata();
  },[bid]);
  let k=0;
  let m = -1;
  for(let i=0;i<ba.length;i++){
    if(id===ba[i].auction_id){
      k=1;
      m=i;
      break;
    }else{
      k=0;
    }
  }
  const[auc,setAuc]=useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await fetch(`http://localhost:8080/api/auctions`);
      const getdata = await res.json();
      setAuc(getdata);
      console.log(getdata);
    };
    getdata();
  },[]);
  let prod_image
  let prod_name;
  let prod_desc;
  for(let i=0;i<auc.length;i++){
    if(auc[i].id===id){
       prod_image=auc[i].item_image
       prod_name=auc[i].item_name
       prod_desc=auc[i].description
    }
  }
  // let prod_id=auc[m].id
  if(k===0){
    const addBid=()=>{
      let options={
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            auction_id:data.id,
            bid:bid+50,
            username:data.randomname
          }
          ),
        }
        fetch(`http://localhost:8080/api/bids`,options)
        .then((response)=>(response.json()))
        .then((json)=>console.log(json))
      }
      console.log(data.randomname)
      return (<>
        <Navbar1></Navbar1>
        <div id="message"></div>
        <Card id="Card" sx={{ width:'100%',height:'100vh'}}  >
        <CardActionArea  id="CardActionArea" sx={{display:'flex',flexDirection:'column'}} >
          <CardMedia
            component="img"
            
            // image={}
            alt="product_image"
            sx={{minHeight:"200px",minWidth:'200px',maxWidth:'300px',maxHeight:"400px",justifyContent:'center',margin:'auto'}}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {/* {auc[m].item_name} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {/* {auc[m].description} */}
            </Typography>
            <Box sx={{display:'flex'}}>
     <Box sx={{width:'150px',height:'150px',backgroundColor:'#d9d9d9',marginTop:'10px'}}>
     <Box sx={{width:'150px',height:'30px',backgroundColor:'green'}}><h4 style={{color:'white', textAlign:'center', marginTop:'2px'}}>Live Price</h4></Box>
     <h1 id="price" style={{marginTop:'30px', textAlign:'center'}}> {bid}</h1></Box>
     <Box sx={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
     <Button id="btnRefresh" variant="contained" sx={{color:'white',marginTop:'10px',marginBottom:'50px',width:'150px',height:'50px',marginLeft:'100px'}} onClick={()=>{socket.emit("new_bid",id,data.randomname); setFlag(!flag);addBid()}}>Increase bid by $50</Button>

     <div style={{display:'flex',width:'90%'}}>
      
            <div style={{marginLeft:'10px',color:"red"}}>
            <p>End Time :  12:00 pm</p>
            <p>End Date : 3/12/2023 </p>
            </div>
            <div style={{marginLeft:'10px',color:"green"}}>
            <p> Time Remaining :{+12-parseInt(date.toLocaleTimeString().slice(0,2))} hrs :{60-parseInt(date.toLocaleTimeString().slice(3,5))} min :{60-parseInt(date.toLocaleTimeString().slice(6,8))} secs</p>
            <p> Days Remaining : {3-parseInt(date.toLocaleDateString().slice(0,1))} </p>
            </div>
        </div>
     </Box> 
     </Box>
   
    </CardContent>
        </CardActionArea>
      </Card>
      </>);
  
}else{
  const modifyBid=()=>{
    let options={
     method: "PUT",
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(
           {
             bid:ba[m].bid+50   
          }
         ),
       }
       fetch(`http://localhost:8080/api/bids/${id}`,options)
       .then((response)=>(response.json()))
       .then((json)=>console.log(json))
      }
      
      return (<>
          <Navbar1></Navbar1>
          {/* <Box sx={{width:'150px',height:'30px'}}><h4 style={{color:'black', textAlign:'center', marginTop:'100px'}}>{lastbidder}</h4></Box> */}
      
          <div id="message" style={{color:"green",display:"none"}}> <Alert severity="success">{data.randomname} just Bidded !</Alert></div>
          {/* */}
          <Card id="Card" sx={{ width:'100%',  height:'100vh'}}  >
          <CardActionArea  id="CardActionArea" sx={{display:'flex',flexDirection:'column'}} >
            <CardMedia
              component="img"
    
              image={prod_image}
              alt="product_image"
              sx={{minHeight:"200px",minWidth:'200px',maxWidth:'300px',justifyContent:'center',margin:'auto'}}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {prod_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {prod_desc}
              </Typography>
              <Box sx={{display:'flex'}}>
       <Box sx={{width:'150px',height:'150px',backgroundColor:'#d9d9d9',marginTop:'10px'}}>
       <Box sx={{width:'150px',height:'30px',backgroundColor:'green'}}><h4 style={{color:'white', textAlign:'center', marginTop:'2px'}}>Live Price</h4></Box>
       <h1 id="price" style={{marginTop:'30px', textAlign:'center'}}> {ba[m].bid}</h1></Box>
 <Box sx={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
       <Button id="btnRefresh" variant="contained" sx={{color:'white',marginTop:'10px',marginBottom:'50px',width:'150px',height:'50px',marginLeft:'100px'}} onClick={()=>{socket.emit("new_bid",id,data.randomname); setFlag(!flag);modifyBid();  window.location.reload();}}>Increase bid by $50</Button>
  
       <div style={{display:'flex',width:'90%'}}>
        
              <div style={{marginLeft:'10px',color:"red"}}>
              <p>End Time :  12:00 pm</p>
              <p>End Date : 3/12/2023 </p>
              </div>
              <div style={{marginLeft:'10px',color:"green"}}>
              <p> Time Remaining :{+12-parseInt(date.toLocaleTimeString().slice(0,2))} hrs :{60-parseInt(date.toLocaleTimeString().slice(3,5))} min :{60-parseInt(date.toLocaleTimeString().slice(6,8))} secs</p>
              <p> Days Remaining : {3-parseInt(date.toLocaleDateString().slice(0,1))} </p>
              </div>
          </div>
       </Box> 
       </Box>
     
      </CardContent>
          </CardActionArea>
        </Card>
        </>);
    
}
 
  
}

