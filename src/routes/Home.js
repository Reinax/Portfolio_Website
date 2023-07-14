import React from 'react'
import './Global.css';
import selfie from '../content/Picture1.jpg'

function Home() {
  return (
    <div className='Container'>
        <div className='main'>
            <h1>Software Developer</h1>
            <p>Hi, my name is Bradley Winson. I'm a skilled and ambitious software developer with a strong grasp of different programming languages and technologies. I've gained my extensive expertise through both my professional work and academic studies. 
              I'm always looking for opportunities to improve my skills and knowledge even more.</p>
        </div>
        <div className='SecondMain'>
          <img className='CircleImage' src={selfie} alt='Bradley Winson' />
        </div>
    </div>
  )
}

export default Home
