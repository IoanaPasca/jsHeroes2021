import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/login/login.page';
import { Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from './main/main';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Route path={'/'} component={MainPage} />
    </BrowserRouter>
    </div>
  );
}

export default App;
