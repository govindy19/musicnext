'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        

}




function FeaturedCourses() {
    const featureCourses =  courseData.courses.filter((course:Course) =>course.isFeatured)


  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-4xl font-bold text-white'>Featured Courses</h2>
                <p className='text-lg text-gray-400'>Explore our curated selection of courses designed to elevate your musical journey.</p>
            </div>

        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                {featureCourses.map((course: Course) => (
                    <div key ={course.id} className="flex justify-center">
                        <BackgroundGradient className='w-full max-w-sm h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>

                                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'>
                                    Learn More
                                </Link>
                            </div>
                            
                            </BackgroundGradient>





                    </div>


                   
                    
                 ) )
}

            </div>



        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"} className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'>
            View All Courses
            </Link>
        </div>
      
    </div>
  )
}

export default FeaturedCourses
