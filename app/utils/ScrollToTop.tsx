'use client'

import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { classNames } from '@/app/utils/ClassNames'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    const toggleVisibility = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    
    const scrollToTop = () => {
        const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
        
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', toggleVisibility)

        // Remove the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
      
    return (
        <div className="fixed bottom-8 right-8 z-10">
            <button
                type="button"
                onClick={scrollToTop}
                        className={classNames(isVisible ? 'opacity-100' : 'opacity-0', 'bg-blue-500 hover:bg-blue-700 inline-flex items-center rounded-full p-3 text-white transition focus:outline-none',)}
            >
                <FaRegArrowAltCircleUp className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}