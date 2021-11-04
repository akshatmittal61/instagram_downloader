import React from 'react'
import download from '../images/download.svg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-image">
                <img className="hero-image__img" src={download} alt="Download logo" />
            </div>
        </section>
    )
}

export default Hero
