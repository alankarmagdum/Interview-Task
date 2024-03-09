
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Login/>
     {/* <BrowserRouter>
      <Routes>
        <Route path='/home'> element={<Home/>}</Route>
      </Routes>
     </BrowserRouter> */}
   
    </div>
  );
}

export default App;
