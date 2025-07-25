import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';
import Profile from './pages/Profile';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
    
    <Routes>
      {/* Private routes: Need login */}
      <Route path='/' element={<PrivateRoute><Movie/></PrivateRoute>}/>
      <Route path='/movie/:id' element={<PrivateRoute><MovieDetail/></PrivateRoute>}/>    
      <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>

      {/* Public routes: login register */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/regis' element={<Register/>}/>
    </Routes>
    </>

  )
}

export default App
