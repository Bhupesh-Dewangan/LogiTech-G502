import Hero from './Pages/Hero'
import Features from './Pages/Features'
import LeftAsideBar from './Components/LeftAsideBar'
import RightAsideBar from './Components/RightAsideBar'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'
import Specification from './Pages/Specification'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Loader from './Components/Loader'
import { useState, useEffect } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className=''>
        <Loader />
      </div>
    )
  }

  return (
    <div className='flex min-h-svh w-full flex-col relative'>
      <Navbar />
      <LeftAsideBar />
      <RightAsideBar />

      <Hero />
      <Product />
      <Features />
      <Specification />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
