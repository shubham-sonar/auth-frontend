import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './Components/Footer';
import SignUp from './Components/SignUp';
import { PrivateComponent } from './Components/PrivateComponent';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1> E-Commerce Dashboard </h1>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1> Products Page </h1>}></Route>
          <Route path="/add" element={<h1> Add Page </h1>}></Route>
          <Route path="/update" element={<h1> Update  Page </h1>}></Route>
          <Route path="/logout" element={<h1> Logout Page </h1>}></Route>
          <Route path="/profile" element={<h1> Profile Page </h1>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
