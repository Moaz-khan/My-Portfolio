import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      number: "01",
      question: "How long until my project goes live?",
      answer: "We understand that speed is a competitive advantage. For a standard website or automation, our average delivery time is 4 weeks. For complex custom systems, we establish a clear roadmap from day one: you'll see progress through iterative steps, ensuring transparency without the wait."
    },
    {
      number: "02",
      question: "I'm not a tech expert, will I be able to manage the site?",
      answer: "Absolutely. We design our solutions with user-friendliness in mind. You'll receive comprehensive training and documentation, plus ongoing support to ensure you're comfortable managing your digital presence."
    },
    {
      number: "03",
      question: "Are the costs fixed or will there be surprises?",
      answer: "We provide transparent, fixed-price quotes upfront. No hidden fees, no surprises. Any additional features or changes are discussed and approved before implementation."
    },
    {
      number: "04",
      question: "Do you provide support after the project is delivered?",
      answer: "Yes, we offer comprehensive post-launch support packages. From technical maintenance to feature updates, we're here to ensure your solution continues to perform optimally."
    },
    {
      number: "05",
      question: "My company is small—is automation really worth it?",
      answer: "Automation isn't just for large enterprises. Small businesses often see the biggest ROI from automation, as it frees up valuable time and resources to focus on growth and customer relationships."
    },
    {
      number: "06",
      question: "Is Data Certification and Smart Contract tech complicated to use?",
      answer: "Not at all. We handle the technical complexity behind the scenes. You get a simple, intuitive interface while benefiting from cutting-edge blockchain technology for security and verification."
    }
  ];

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24 text-center"
        >
          <p
            className="text-sm font-bold tracking-wider uppercase mb-6"
            style={{ color: '#6B6B6B' }}
          >
            ❓ QUESTIONS? WE HAVE ANSWERS
          </p>
          <h2
            className="font-serif italic font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#FAF9F6',
              lineHeight: '1.1'
            }}
          >
            Everything you{" "}
            <span style={{ color: '#D4AF37' }}>
              need to know
            </span>.
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden"
              style={{
                backgroundColor: openIndex === index ? '#1A1A1A' : 'transparent',
                border: '1px solid rgba(250, 249, 246, 0.1)',
                borderRadius: '1.5rem',
                transition: 'background-color 0.3s'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-start justify-between gap-6 text-left hover:bg-[rgba(250,249,246,0.02)] transition-colors"
              >
                <div className="flex items-start gap-6 flex-1">
                  <span
                    className="font-serif italic font-bold text-2xl flex-shrink-0"
                    style={{ color: '#D4AF37' }}
                  >
                    {faq.number}
                  </span>
                  <span
                    className="font-serif italic font-bold text-xl lg:text-2xl"
                    style={{ color: '#FAF9F6', lineHeight: '1.4' }}
                  >
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" style={{ color: '#FAF9F6' }} />
                  ) : (
                    <Plus className="w-6 h-6" style={{ color: '#FAF9F6' }} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 pl-24">
                      <p
                        className="text-base lg:text-lg"
                        style={{ color: '#6B6B6B', lineHeight: '1.7' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
