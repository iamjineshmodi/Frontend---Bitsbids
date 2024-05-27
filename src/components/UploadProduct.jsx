import { useState } from "react";
import Navbar from "./Navbar";
import "./UploadProduct.css";
import { Grid } from "@mui/material";
export default function UploadProduct() {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <Navbar></Navbar>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        className="upload-title my-5"
        style={{ color: "wheat" }}
      >
        <div className="design">
          <img
            src={require("D:/Web Development Udemy/bits-bids/src/components/images/upload1.png")}
            className="upload-img"
            alt=""
          />
          ----------------
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYnzLeUMQaN8JaBdmEd4LNBJIW3Y_1hNnbgA7dnptwDfxD9WY5"
            className="upload-img"
            alt=""
          />
          ----------------
          <img
            src={require("D:/Web Development Udemy/bits-bids/src/components/images/upload5.jpeg")}
            className="upload-img"
            alt=""
          />
        </div>
        <div
          className="title my-3"
          style={{ color: "white", fontSize: "larger", fontWeight: "700" }}
        >
          Enter Product Details
        </div>
      </Grid>
      <div className="product">
      <div className="product-details">
        <div className="image-upload">
         <img
            src={require("D:/Web Development Udemy/bits-bids/src/components/images/upload4.png")}
            className="upload-img"
            alt=""
          />
          <div
            className="drop"
            style={{ fontSize: "larger", fontWeight: "700" }}
          >
            Drop your images here.
          </div>
        </div>
        <div className="product-detail-card " style={{ width: "90%" }}>
          <div className="product-left">
            <div className="product-left-info">
            <div className="product-name my-4">
              <label htmlFor="" style={{ fontWeight: "700" }}>
                Product Name:
              </label>
              <input type="text" placeholder="Product Name" style={{borderRadius:'10px',borderStyle:'none',padding:'6px'}} required/>
            </div>
            <div className="product-brand my-4">
              <label htmlFor="" style={{ fontWeight: "700" }}>
                Product Brand:
              </label>
              <input type="text" placeholder="Product Brand" style={{borderRadius:'10px',borderStyle:'none',padding:'6px'}} required/>
            </div>
            <div className="product-description my-4">
              <label htmlFor="" style={{ fontWeight: "700" }}>
                Product Description:
              </label>
              <textarea
                type="text"
                value={text}
                onChange={handleOnChange}
                placeholder="Add Product Description"
                rows={6}
                style={{borderRadius:'10px',borderStyle:'none',padding:'6px',resize:'none',padding:'6px'}}
              required/>
            </div>
          </div>
          </div>
          <div className="product-right">
            <div className="product-right-info">
            <div className="product-price my-4" style={{justifyContent:'start',alignSelf:'flex-start'}}>
              <label htmlFor="" style={{ fontWeight: "700" }}>
                Product Price:
              </label>
              <input
                type="text"
                name=""
                placeholder="Minimum Bidding Price"
                style={{borderRadius:'10px',borderStyle:'none',padding:'6px'}}
              required/>
            </div>
            <div className="product-price my-4" justifySelf="flex-start">
              <label htmlFor="" style={{ fontWeight: "700" }}>
                Product Condition:
              </label>
              <input
                type="text"
                name=""
                placeholder="Product Condition"
                style={{borderRadius:'10px',borderStyle:'none',padding:'6px'}}
              />
            </div>
            <div className="product-used my-4" justifySelf="flex-start">
              <label htmlFor="" style={{ fontWeight: "700" }}>
                Used Duration:
              </label>
              <input
                type="text"
                name=""
                placeholder="Used Duration"
                style={{borderRadius:'10px',borderStyle:'none',padding:'6px'}}
              />
            </div>
            <div className="product-live-time my-4">
              <label htmlFor="" style={{ fontWeight: "700" }}>
                Bidding Time:
              </label>
              <input
                type="text"
                name=""
                placeholder="Bidding Time"
                style={{borderRadius:'10px',borderStyle:'none',padding:'6px'}}
              required/>
            </div>
          </div>
          </div>
            <div className="upload-btn">
            <input type="button" className="product-upload-btn mt-2" value='Upload Product'/>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
