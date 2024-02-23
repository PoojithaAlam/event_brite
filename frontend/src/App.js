import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import EventScreen from './screens/EventScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <>
        <Router>
          <Header/>
          <main>
            <Container>
              <Routes>
                <Route path="/" exact element={<HomeScreen />} />
                <Route path="/event/:id" element={<EventScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/cart/:id" element={<CartScreen />} />
                <Route path='/login' element = { <LoginScreen/> } />
                <Route path='/shipping' element = { <ShippingScreen/> } />
                <Route path='/payment' element = { <PaymentScreen/> } />
                <Route path='/register' element={<RegisterScreen />} />
               <Route path='/profile' element={<ProfileScreen />} />
              </Routes>
            </Container>
          </main>
          <Footer/>
        </Router>
    </>
  );
}
export default App;