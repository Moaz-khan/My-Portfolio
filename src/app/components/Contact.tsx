import { motion } from "motion/react";
import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden grain-texture"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24 text-center max-w-4xl mx-auto"
        >
          <h2
            className="font-serif italic font-bold mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#FAF9F6',
              lineHeight: '1.1'
            }}
          >
            Ready to redefine{" "}
            <span style={{ color: '#D4AF37' }}>time</span>
            <br />
            and scale your{" "}
            <span style={{ color: '#D4AF37' }}>business</span>?
          </h2>
          <p
            className="text-lg lg:text-xl"
            style={{ color: '#6B6B6B', lineHeight: '1.7' }}
          >
            Discover how to{" "}
            <span className="italic" style={{ color: '#FAF9F6' }}>modernize</span>
            {" "}your{" "}
            <span className="font-semibold" style={{ color: '#FAF9F6' }}>digital presence</span>
            {" "}and{" "}
            <span className="font-semibold" style={{ color: '#FAF9F6' }}>automate</span>
            {" "}key{" "}
            <span className="font-semibold underline" style={{ color: '#FAF9F6' }}>processes</span>
            {" "}to free up{" "}
            <span className="italic" style={{ color: '#D4AF37' }}>time</span>
            {" "}and{" "}
            <span className="font-semibold" style={{ color: '#FAF9F6' }}>resources</span>.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-6 py-4 text-base rounded-2xl transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'rgba(250, 249, 246, 0.05)',
                  border: '1px solid rgba(250, 249, 246, 0.1)',
                  color: '#FAF9F6'
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-6 py-4 text-base rounded-2xl transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'rgba(250, 249, 246, 0.05)',
                  border: '1px solid rgba(250, 249, 246, 0.1)',
                  color: '#FAF9F6'
                }}
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Hi, I'd like to request a free consultation!"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-6 py-4 text-base rounded-2xl transition-all focus:outline-none focus:ring-2 resize-none"
              style={{
                backgroundColor: 'rgba(250, 249, 246, 0.05)',
                border: '1px solid rgba(250, 249, 246, 0.1)',
                color: '#FAF9F6'
              }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: '#D4AF37', color: '#0A0A0A' }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-5 font-bold text-base tracking-wider uppercase rounded-[50px] transition-all"
              style={{
                border: '2px solid #D4AF37',
                color: '#D4AF37',
                backgroundColor: 'transparent'
              }}
            >
              REQUEST A FREE CONSULTATION
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              border: '1px solid rgba(250, 249, 246, 0.2)',
              color: '#FAF9F6'
            }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              border: '1px solid rgba(250, 249, 246, 0.2)',
              color: '#FAF9F6'
            }}
          >
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Footer Links */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-4 text-sm">
            <a
              href="#privacy"
              className="hover:underline"
              style={{ color: '#6B6B6B' }}
            >
              Privacy Policy
            </a>
            <span style={{ color: '#6B6B6B' }}>|</span>
            <a
              href="#cookies"
              className="hover:underline"
              style={{ color: '#6B6B6B' }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
