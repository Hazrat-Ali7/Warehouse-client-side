import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='container mt-5 about'>
        <div className='about-info'>
        <h1 className=''>About Us</h1>
        <p className='mt-2'>Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and animals in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; in fact, humans and many animals have become dependent on fruits as a source of food.[1] Consequently, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.</p>
        <button className='btn-special2 mt-2'>Learn More</button>
        </div>
        <div>
            <img src='https://cdn.pixabay.com/photo/2014/05/18/02/35/apples-346772_960_720.jpg' alt="" />
        </div>
    </div>
  )
}

export default About