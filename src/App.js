import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/Propscomponent';
//import Statecomponent from './components/classcomponents/statecomponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Experience from './components/functionalcomponents/Experience';
import About from './components/functionalcomponents/About';
import Login from './components/functionalcomponents/Login';
import Home from './components/functionalcomponents/Home';
import Footer from './components/functionalcomponents/Footer';
import Signup from './components/functionalcomponents/Signup';
import Reference from './components/functionalcomponents/Reference';
import Callback from './components/functionalcomponents/Callback';
//import Memo from './components/functionalcomponents/Memo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/experience" element={<Experience />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/Signup" element={<Signup />} ></Route>
        <Route path="/useref" element={<Reference />} ></Route>
        <Route path="/usecallBack" element={<Callback />} ></Route>
        {/*<Route path="/useMemo" element={<Memo />} ></Route>*/}
      </Routes>
      </BrowserRouter>
      
      {/*<PropsComponent name="Hello everyone" course="ECE"></PropsComponent>*/}
      <header className="App-header">
       {/*<Statecomponent/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
        <Footer />
      
    </div>
  );
}

export default App;
