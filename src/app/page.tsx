import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import MusicSchoolTestimonialCards from '@/components/TestimonialCards'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import UpComingWebinar from '@/components/UpComingWebinar'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    
      <main className='min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]'>
      
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs/>
        <MusicSchoolTestimonialCards/>
        <UpComingWebinar/>
        <Instructors/>
        
      </main>
  
  )
}

export default page
