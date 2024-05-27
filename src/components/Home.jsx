import Navbar from './Navbar';
// import Carousel from './Carousel';
import Items from './Items';
import './Home.css'
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    {/* <Carousel></Carousel> */}
    <div>
     <h1>Home</h1>
    </div>
    <Items></Items>
    </>
  );
}

