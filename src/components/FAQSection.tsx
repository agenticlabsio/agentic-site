'use client';
import { SplitText, FadeInText } from './TextAnimations';
import Accordion from './Accordion';

export default function FAQSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent to-gray-50/50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          <SplitText
            text="Frequently Asked Questions"
            className="inline-block"
            delay={0}
          />
        </h2>

        <FadeInText delay={0.2} duration={0.6} direction="up">
          <p className="text-lg text-gray-600 text-center mb-12">
            Got questions? We've got answers.
          </p>
        </FadeInText>

        <Accordion
          items={[
            {
              question: "What is Agentic Labs?",
              answer: "Agentic Labs specializes in providing customized AI solutions that help businesses drive efficiency, agility, and measurable results. We help enterprises and startups optimize operations, reduce complexity, and stay ahead of market disruptions with AI-driven innovations."
            },
            {
              question: "How can AI help my business?",
              answer: "AI can drive significant improvements in efficiency, streamline operations, and enhance decision-making. At Agentic Labs, we offer AI solutions tailored to your business needs, from automation and decision intelligence to predictive insights, helping you scale faster and smarter."
            },
            {
              question: "Why should I trust Agentic Labs with my AI needs?",
              answer: "With over a decade of AI expertise, we have delivered more than 50 solutions to enterprises and startups. Our industry-specific approach ensures that our solutions are not only relevant but also highly impactful. Our focus on measurable outcomes and continuous support ensures that your business can fully leverage the power of AI."
            },
            {
              question: "What type of businesses can benefit from Agentic Labs' AI solutions?",
              answer: "Our AI solutions are suitable for businesses of all sizes, ranging from small startups to large enterprises. We tailor our services to meet the specific needs of your industry and company, ensuring that we address your unique business challenges."
            }
          ]}
        />
      </div>
    </section>
  );
}
