import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { BusinessOwner } from './components/BusinessOwner/BusinessOwner';
import { HomePage } from './components/HomePage/HomePage';
import { Searcher } from './components/Searcher/Searcher';
import { PrivateRouteUser } from './components/PrivateRoutes/PrivateRouteUser';
import { PrivateRouteOwner} from './components/PrivateRoutes/PrivateRouteOwner';



function App() {


  // ================================= 


  return (
    <div className="App">
      <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    > 
     <Routes>
              <Route path='/*' element={
              <HomePage />
              }></Route>
              <Route element={<PrivateRouteUser />} >
                <Route path='/user/*' element={
                  <Searcher /> 
                }></Route>
                </Route>
                <Route element={<PrivateRouteOwner />} >
                <Route path='/businessowner/*' element={
                  <BusinessOwner />
                }></Route>
              </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
