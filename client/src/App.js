
import './App.css';
import Navbar from "./component/header/navbar";
import MainComp from './component/home/MainComp';
import Newnav from './component/newNav/Newnav';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Newnav/>
     <MainComp/>
    </div>
  );
}

export default App;
