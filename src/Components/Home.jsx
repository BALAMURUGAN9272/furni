import React from 'react'
import Appbar from './Appbar';
import Products from './Products';
import Banner from './Banner';
import Choose from './Choose'
import Popoular from './Popoular'
import Testimonial from './Testimonial'
import Film from './Film'
import Blog from './Blog'
import Sparrow from './Sparrow'
import Furni from './Furni';
function Home() {
  return (
    <div>
       <Appbar/>
       <Banner/>
       <Products/>
       <Choose/>
       <Popoular/>
       <Testimonial/>
       <Film/>
       <Blog/>
       <Sparrow/>
       <Furni/>
    </div>
  )
}

export default Home;
