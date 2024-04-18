import React from 'react'
import Navbar from './components/navbar/Navbar'
import HomePicture from './components/homepicture/HomePicture'
import Package from './components/package/Package';
import Title from './components/title/Title';
import Contact from './components/page/Contact';
import Footer from './components/footer/Footer';
import Works from './components/work/Works';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePicture/>
      <div className='cusContainer'>
        <Title subTitle='our packages' title='What We Offer'/>
        <Package/>
        <Title subTitle='our works' title='A highlight of one of our latest work.'/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
      
      
      
    </div>
  )
}

export default App
