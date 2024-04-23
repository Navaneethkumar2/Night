import React from 'react'
import './Home.css'
import bgc from './images/Moon.png'
import gif from './images/ani.gif'
import glas from './images/glass.png'
import abo from './images/about.jpg'

export const Home = () => {
  return (
    <div>
        <div className='home'>
        
          <div className='bg'>
            
           <img src={ bgc}/>
            {/* <h1> Higher Education<br></br> Advisors</h1> */}
            <h2> Excellent Education Advisory Services For You</h2>
              <h3>A global educational foundation firm you can trust</h3>

              <div className='wrapper'>
                <span> H</span>
                <span> i</span>
                <span> g</span>
                <span> h</span>
                <span> e</span>
                <span> r</span>

                <span> E</span>
                <span> d</span>
                <span> u</span>
                <span> c</span>
                <span> a</span>
                <span> t</span>
                <span> i</span>
                <span> o</span>
                <span> n</span><br></br>

                <span> A</span>
                <span> d</span>
                <span> i</span>
                <span> v</span>
                <span> o</span>
                <span> r</span>
                <span> s</span>
                
                

              </div>
           
          </div>
          <div className='svg'>
            {/* <div className='imcolor'>vdhqb</div> */}
            <img src={gif}/>
          </div>
        </div>

        {/* part2 */}

        <div className='part2'>
          <div className='about'>
              <img src={ glas}/>
            <h1> Get To Know Us</h1>
            <h2> Work <span>Together With</span> Amaravati Foundation</h2>
            <p> Amaravati Foundation is established on word of mouth based on services or<br></br> activities done in past decade
            we are into industry since 2009, 100% client ,<br></br>satisfaction is our main 
            agenda, we are spreading our wings across the world..</p>
          </div>
          <div className='rimg'>
            <img src={ abo}/>
          </div>

        </div>

        {/* part3 */}


        <div className='part3'>
          <div className='a'>
            
          </div>
          

        </div>
    </div>
  )
}
export default Home;
