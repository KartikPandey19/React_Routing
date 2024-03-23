import {BrowserRouter, Route, Routes,useNavigate} from 'react-router-dom';
import {Suspense, lazy} from 'react'
import './App.css'
const Dashboard  =  lazy(()=>import ('./components/Dashboard'));
const Landing  = lazy(()=>import('./components/Landing'));

function App() {
  
  return (
    <div>
    
    <BrowserRouter>
    <AppBar></AppBar>
    <Routes>
      <Route path='/Dashboard' element={<Suspense fallback={"...loading"}><Dashboard></Dashboard></Suspense>}></Route>
      <Route path='/' element={<Suspense fallback={"...loading"}><Landing></Landing></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  ) 
}
function AppBar(){
  const navigate = useNavigate();
  return <div>
<div style={{background:'black',color:"white"}}>
      top bar
    </div>
    <div>
      <button onClick={()=>{
        navigate("/Dashboard")
      }}>DashBoard</button>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>
    </div>
  </div>
}





export default App
