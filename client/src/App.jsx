import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header.jsx';

export default function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn/>} />
    </Routes>
    </BrowserRouter>
  )
}