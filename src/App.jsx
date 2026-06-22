import Hero from './Pages/Hero'
import Features from './Pages/Features'
import LeftAsideBar from './Components/LeftAsideBar'
import RightAsideBar from './Components/RightAsideBar'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'
import Specification from './Pages/Specification'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className='flex min-h-svh w-full flex-col relative'>
      <Navbar />
      {/* <LeftAsideBar /> */}
      {/* <RightAsideBar /> */}

      <Hero />
      <Product />
      <Features />
      <Specification />
      <Contact />
    </div>
  )
}

export default App
