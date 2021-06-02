import React from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtnLink } from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Lorem Ipsum</HeroH1>
                    <HeroP>Sharing with you our family-approved recipes</HeroP>
                    <HeroBtnLink to='/subscrie'>Get Started</HeroBtnLink>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
