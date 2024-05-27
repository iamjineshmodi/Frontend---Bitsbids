import Navbar from './Navbar';
import './MoreDetails.css';
export default function MoreDetails(){
    return(
    <>
    <Navbar></Navbar>
    <div className="more-details">
        <div className="item-card-2">
            <div className="item-desc">
            <div className="heading">
            <h1>ELECTRIC KETTLE</h1>
            </div>
                <h4>$471</h4>
                <p> COMFEE' Stainless Steel Cordless Electric Kettle. 1500W</p>
            </div>
            <div className="item-img">
            <img src="https://m.media-amazon.com/images/I/61yL5Y7JVaS._SX522_.jpg" alt="" />
            </div>
            <div className="item-condition">
                <ul>
                    <li>Brand : </li>
                    <li>Condtion : </li>
                    <li>Used Duration : </li>
                    <li>Time Remaining : </li>
                </ul>
            </div>
            <div className="bidding-button">
                <button>Bid Now</button>
            </div>
        </div>
    </div>
    </>
)
}