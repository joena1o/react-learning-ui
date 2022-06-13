import React from 'react';
import "./Style/components.css";
import "./Style/Layouts.css";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import LandingPage from './Routes/LandingPage';
import LoginRoute from './Routes/LoginRoute';
import Dashboard from './Routes/DashboardRoute';





function App(){
 
  return(
    <div className='app'> 

         
    <BrowserRouter>
    
        <Routes>

          <Route exact path='/' element={<LandingPage />} />

          <Route path='/login' element={<LoginRoute />} />

          <Route path='/dashboard/*' element={<Dashboard />} />
          

        </Routes>
      
    </BrowserRouter>

    
       
    

    </div>
  );

}



//States


export default App;
