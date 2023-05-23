
import { Auth, Landing } from './components/Auth';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [ing, setIng] = useState(false);
 
  function handleChangeIng(x){
    setIng(x);
    console.log(ing);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth changeIng={handleChangeIng} />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/landing" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//<Route path="/home" element={<ProtectedRoute ing={ing}> <Home/></ProtectedRoute>} />