"use client"

import { useState } from "react"
import Image from "next/image"
import plusIcon from "../../public/icon-plus.svg"
import minusIcon from "../../public/icon-minus.svg"

interface Props {
  questions: {
    question: string
    answer: string
  }[]
}

const FAQ = ({ questions }: Props) => {
    
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [answerHeights, setAnswerHeights] = useState<number[]>(Array(questions.length).fill(0),)
    
    const toggleQuestion = (idx: number) => {
        setActiveIndex(activeIndex === idx ? null : idx)
        const newAnswerHeights = Array(questions.length).fill(0)
        if (activeIndex !== idx)
        newAnswerHeights[idx] = document.getElementById(
            `answer-${idx}`,
        )?.scrollHeight
        setAnswerHeights(newAnswerHeights)
    }

    return (
        <div className={`container rounded-xl bg-faqWhite py-6 md:py-6 px-6 md:px-12 text-faqDarkPurple`}>

        {/* Questions */}
        <div className="flex flex-col divide-y">
            {questions.map(({ question, answer }, idx) => ( <div key={idx} className="py-6">
                <div
                className="flex items-center justify-between hover:cursor-pointer"
                onClick={() => toggleQuestion(idx)}
                >
                {/* Title */}
                <h2 className="text-lg font-bold leading-6 text-faqDarkPurple hover:text-faqPurple">
                    {question}
                </h2>
                {/* Toggle Button */}
                <Image
                    src={activeIndex === idx ? minusIcon : plusIcon}
                    alt="toggle question"
                />
                </div>
            
                {/* Answer */}
                <div
                id={`answer-${idx}`}
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
                >
                <p className="pt-6 text-faqGrayishPurple">{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ;