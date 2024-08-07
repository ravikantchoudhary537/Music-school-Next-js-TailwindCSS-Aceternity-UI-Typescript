"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";



const content = [
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description:
          'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/courses/edm.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description:
          'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/courses/jazz.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description:
          'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/courses/guitar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
        title: 'Live Feedback & Engagement',
        description:
          'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
      
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/courses/piano.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
  ];

const WhyChooseus = () => {
  return (
    <div> <StickyScroll content={content} /></div>
  )
}

export default WhyChooseus