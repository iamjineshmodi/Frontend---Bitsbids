import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LoginComponent from './components/Login';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import MoreDetails from './components/MoreDetails';
import UploadProduct from './components/UploadProduct';
import Register from './components/Register';
import Chat from './components/Chat';
function App() {
  
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>

    <BrowserRouter>
    <Routes>
      {/* <Route path="/home" element= { <Home/>} /> */}
      {/* <Route path="/register" element= { <Register/>} /> */}
      <Route path="/" element= { <LoginComponent/>} />
      {/* <Route path='/chat' element={<Chat/>}></Route> */}
      {/* <Route path='/more-details' element={<MoreDetails/>}></Route> */}
      {/* <Route path='/upload-product' element={<UploadProduct/>}></Route> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
