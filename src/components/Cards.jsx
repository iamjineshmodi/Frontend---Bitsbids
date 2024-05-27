import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import'./Cards.css'
import'./Items.css'
import data from './data.json'
import PersonIcon from '@mui/icons-material/Person';
import { Button } from 'bootstrap';
import Click from '@mui/material/Button';
import ip from './Ip';

import Bidpage from './Bidpage';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Cards({query}) {
  
  const [searchedItems,setSearchedItems]=useState([])
     var realsearchedItems=[];
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const temp=data;
  const[search,setSearch]=useState();

  useEffect(() => {
    const getdata = async () => {
      const res = await fetch("http://localhost:8080/api/auctions");
      const getdata = await res.json();
      setData(getdata);
      console.log(getdata);

    };

    getdata();
  },[]);
  useEffect(()=>{
    setSearchedItems([])
  },[])
  // console.log(data.id)

  const handleClick =()=>{
    var target = data.id;


  

   }
   console.log(query)
   
   if(query!=null)
   {

    const find_prod_ind = (element) => element.item_name.includes(query)|| element.description.includes(query);
    while(temp.findIndex( find_prod_ind)!==-1){
    if(temp.findIndex( find_prod_ind)===-1)
    {
     
    }
    else{
        searchedItems.push(temp[temp.findIndex( find_prod_ind)])
        console.log(searchedItems)
        temp.splice([temp.findIndex( find_prod_ind)],1)
        console.log(" removed items")
        console.log(temp)
        realsearchedItems=searchedItems
        
    }
  }
  if(search===0){
    return(<Typography> No Such Product Found </Typography>)
  }
  else
  return (
    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {searchedItems.map((element) => (
    <Grid item xs={12} sm={4} md={4} key={element.id}>
     <Card id="Card" sx={{ maxWidth: 600 }}  onClick={()=>{navigate('/bidpage',{state:{id: element.id}})}}>
      <CardActionArea  id="CardActionArea" >
        <CardMedia
          component="img"

          image={element.item_image}
          alt="product_image"
          sx={{minHeight:"200px",minWidth:'200px',maxHeight:"300px",maxWidth:'300px',display:'flex',justifyContent:'center',margin:'auto'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {element.item_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {element.description}
          </Typography>
   
<Click sx={{backgroundColor:"green",color:'white',marginTop:'15px'}}onClick={()=>{navigate('/bidpage',{state:{id: element.id}})}} >BidNow!</Click>
        </CardContent>
      </CardActionArea>
    </Card>
      {/* <div className="item-card">
            <img
              src="https://m.media-amazon.com/images/I/71cr4D8Rm0L._AC_UL320_.jpg"
              className="item-img mb-2"
              alt=""
            />
            <div className="withimg">
              <div className="item-name">
                <h6>Electric Kettle</h6>
                <h6 style={{color:'#05E88A'}}>Seller's Name: EasyMonkey</h6>
              </div>
              <div className="item-price">Rs 478</div>
            </div>
            <hr />
            <div className="withoutimg mb-3">
              <div className="highest-bid">
                <div className="bid-title">HIGHEST BID</div>
                <div className="bid-price"> <img src="https://m.media-amazon.com/images/I/71cr4D8Rm0L._AC_UL320_.jpg"className="time-img" alt="" />Rs 514</div>
              </div>
              <div className="onppl">
                <div className="on-title">BIDDERS ONLINE</div>
                <div className="numppl"><PersonIcon fontSize="small"/> 34</div>
              </div>
              <div className="time-left">
                <div className="time-title">TIME LEFT</div>
                <div className="time"><img src="https://m.media-amazon.com/images/I/71cr4D8Rm0L._AC_UL320_.jpg"className="time-img" alt="" /> className="time-img" alt="" /> 2h 58m</div>
              </div>
            </div>
            <hr />
            <div className="buttons">
              <button className="item-btn">Bid Now</button>
              <button className="item-details mx-3">More Details</button>
            </div>
          </div> */}
    </Grid>
  ))}
</Grid>
  
  ); 

}
  else {
    return (
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {data.map((element) => (
      <Grid item xs={12} sm={4} md={4} key={element.id}>
       <Card id="Card" sx={{ maxWidth: 600 }}  onClick={()=>{navigate('/bidpage',{state:{id: element.id}})}}>
        <CardActionArea  id="CardActionArea" >
          <CardMedia
            component="img"
  
            image={element.item_image}
            alt="product_image"
            sx={{minHeight:"200px",minWidth:'200px',maxHeight:"300px",maxWidth:'300px',display:'flex',justifyContent:'center',margin:'auto'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {element.item_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
           {element.description}
            </Typography>
     
  <Click sx={{backgroundColor:"green",color:'white',marginTop:'15px'}}onClick={()=>{navigate('/bidpage',{state:{id: element.id}})}} >BidNow!</Click>
          </CardContent>
        </CardActionArea>
      </Card>
        {/* <div className="item-card">
              <img
                src="https://m.media-amazon.com/images/I/71cr4D8Rm0L._AC_UL320_.jpg"
                className="item-img mb-2"
                alt=""
              />
              <div className="withimg">
                <div className="item-name">
                  <h6>Electric Kettle</h6>
                  <h6 style={{color:'#05E88A'}}>Seller's Name: EasyMonkey</h6>
                </div>
                <div className="item-price">Rs 478</div>
              </div>
              <hr />
              <div className="withoutimg mb-3">
                <div className="highest-bid">
                  <div className="bid-title">HIGHEST BID</div>
                  <div className="bid-price"> <img src="https://m.media-amazon.com/images/I/71cr4D8Rm0L._AC_UL320_.jpg"className="time-img" alt="" />Rs 514</div>
                </div>
                <div className="onppl">
                  <div className="on-title">BIDDERS ONLINE</div>
                  <div className="numppl"><PersonIcon fontSize="small"/> 34</div>
                </div>
                <div className="time-left">
                  <div className="time-title">TIME LEFT</div>
                  <div className="time"><img src="https://m.media-amazon.com/images/I/71cr4D8Rm0L._AC_UL320_.jpg"className="time-img" alt="" /> className="time-img" alt="" /> 2h 58m</div>
                </div>
              </div>
              <hr />
              <div className="buttons">
                <button className="item-btn">Bid Now</button>
                <button className="item-details mx-3">More Details</button>
              </div>
            </div> */}
      </Grid>
    ))}
  </Grid>
    
    );
  }
}
