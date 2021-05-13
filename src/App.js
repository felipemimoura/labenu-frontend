import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Index'
import Login from './Components/Login/Index'
import Router from './Router/Index';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
