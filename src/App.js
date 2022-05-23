import './App.css';
import Onboarding from './pages/onboarding.js';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
<Routes>
<Route exact path='/' element={<Onboarding/>} />
{/* <Route exact path='/login' element={<Login/>} />
<Route exact path='/signup' element={<Signup/>} /> */}

</Routes>

</BrowserRouter>
    </>
  

  );
}

export default App;
