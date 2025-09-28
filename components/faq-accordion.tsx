"use client";

import { useState } from "react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Question {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: Question[];
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {questions.map((faq, index) => (
        <MotionWrapper
          key={index}
          delay={index * 0.05}
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
          >
            <h4 className="text-lg font-semibold text-gray-800 pr-4">
              {faq.question}
            </h4>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
          </button>
          
          {openIndex === index && (
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          )}
        </MotionWrapper>
      ))}
    </div>
  );
}