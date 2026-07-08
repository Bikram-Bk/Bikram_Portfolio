import { PROFILE_INFO } from "../data";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Please introduce yourself.";
    if (!formData.email.trim()) {
      tempErrors.email = "An email is required to respond.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please provide a valid email format.";
    }
    if (!formData.subject.trim())
      tempErrors.subject = "Please supply a message topic.";
    if (!formData.message.trim())
      tempErrors.message = "Please type out your core message.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically as user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      from_email: formData.email,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        const detail = err?.text || err?.message || JSON.stringify(err);
        console.error("EmailJS Error:", err);
        setSubmitError(
          `Failed to send: ${detail}. Please try again or contact directly via email.`,
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Opens Gmail app on mobile, Gmail web compose on desktop
  const handleDirectEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mailto:${PROFILE_INFO.email}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE_INFO.email}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-14 bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-345 px-6 sm:px-8 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-widest text-[#e75b37] dark:text-[#f06e4d] uppercase"
          >
            Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white"
          >
            Start A Conversation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400"
          >
            Looking to expand your team, commission an interactive project, or
            simply discuss modern frontend engineering? Drop a line below.
          </motion.p>
        </div>

        {/* Contact panel grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start max-w-4xl mx-auto">
          {/* Contact details / channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 lg:col-span-5"
          >
            <h3 className="text-sm font-bold text-gray-950 dark:text-white uppercase tracking-wider">
              Contact Information
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Feel free to reach out via direct channels or social links. I
              generally reply within 12-24 hours.
            </p>

            {/* Visual rows */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center space-x-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e75b37]/10 text-[#e75b37] dark:bg-[#e75b37]/20 dark:text-[#f06e4d]">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${PROFILE_INFO.email}`}
                    onClick={handleDirectEmail}
                    className="text-xs font-semibold text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white underline decoration-neutral-950/20 hover:decoration-neutral-950 dark:decoration-white/20 dark:hover:decoration-white"
                  >
                    {PROFILE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e75b37]/10 text-[#e75b37] dark:bg-[#e75b37]/20 dark:text-[#f06e4d]">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Location
                  </p>
                  <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    {PROFILE_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social rows */}
            <div className="pt-5 border-t border-neutral-900/5 dark:border-white/5">
              <h4 className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5">
                Professional Networks
              </h4>
              <div className="flex space-x-2.5">
                <motion.a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center space-x-2 rounded-full border border-neutral-900/10 bg-white/40 px-3.5 py-1.5 text-xs font-bold tracking-wider text-neutral-600 hover:bg-neutral-950 hover:text-white dark:border-white/5 dark:bg-neutral-900/40 dark:text-neutral-400 dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-200"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center space-x-2 rounded-full border border-neutral-900/10 bg-white/40 px-3.5 py-1.5 text-xs font-bold tracking-wider text-neutral-600 hover:bg-neutral-950 hover:text-white dark:border-white/5 dark:bg-neutral-900/40 dark:text-neutral-400 dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-200"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Form wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:col-span-7"
          >
            <div className="rounded-2xl border border-neutral-900/10 bg-white/60 p-5 shadow-xs dark:border-white/5 dark:bg-neutral-900/65 sm:p-6">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Name input */}
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full rounded-lg border px-3 py-2 text-xs bg-white text-gray-950 focus:outline-none focus:ring-1 transition-all dark:bg-neutral-950 dark:text-white ${errors.name
                            ? "border-red-400 focus:border-red-500 focus:ring-red-400/25"
                            : "border-neutral-900/10 focus:border-neutral-950 focus:ring-neutral-950/15 dark:border-white/10 dark:focus:border-white"
                            }`}
                          placeholder="e.g. Alex"
                        />
                        {errors.name && (
                          <span className="mt-1 flex items-center text-[10px] text-red-500">
                            <AlertCircle className="mr-1 h-3 w-3 shrink-0" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full rounded-lg border px-3 py-2 text-xs bg-white text-gray-950 focus:outline-none focus:ring-1 transition-all dark:bg-neutral-950 dark:text-white ${errors.email
                            ? "border-red-400 focus:border-red-500 focus:ring-red-400/25"
                            : "border-neutral-900/10 focus:border-neutral-950 focus:ring-neutral-950/15 dark:border-white/10 dark:focus:border-white"
                            }`}
                          placeholder="e.g. you@domain.com"
                        />
                        {errors.email && (
                          <span className="mt-1 flex items-center text-[10px] text-red-500">
                            <AlertCircle className="mr-1 h-3 w-3 shrink-0" />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1.5">
                        Topic / Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3 py-2 text-xs bg-white text-gray-950 focus:outline-none focus:ring-1 transition-all dark:bg-neutral-950 dark:text-white ${errors.subject
                          ? "border-red-400 focus:border-red-500 focus:ring-red-400/25"
                          : "border-neutral-900/10 focus:border-neutral-950 focus:ring-neutral-950/15 dark:border-white/10 dark:focus:border-white"
                          }`}
                        placeholder="e.g. Hiring / Project request"
                      />
                      {errors.subject && (
                        <span className="mt-1 flex items-center text-[10px] text-red-500">
                          <AlertCircle className="mr-1 h-3 w-3 shrink-0" />
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message body */}
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1.5">
                        Message Content
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full rounded-lg border px-3 py-2 text-xs bg-white text-gray-950 focus:outline-none focus:ring-1 transition-all dark:bg-neutral-950 dark:text-white resize-none ${errors.message
                          ? "border-red-400 focus:border-red-500 focus:ring-red-400/25"
                          : "border-neutral-900/10 focus:border-neutral-950 focus:ring-neutral-950/15 dark:border-white/10 dark:focus:border-white"
                          }`}
                        placeholder="Write down details here..."
                      />
                      {errors.message && (
                        <span className="mt-1 flex items-center text-[10px] text-red-500">
                          <AlertCircle className="mr-1 h-3 w-3 shrink-0" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {submitError && (
                      <div className="mt-2 flex items-center text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg p-2.5">
                        <AlertCircle className="mr-2 h-4 w-4 shrink-0 text-red-500" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Submit CTA */}
                    <div className="pt-1">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex w-full h-10 items-center justify-center space-x-2 rounded-full bg-[#e75b37] text-[10px] font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#d04a27] disabled:opacity-70 cursor-pointer transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          <>
                            <Send className="h-3.5 w-3.5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  /* Success State Animation */
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e75b37]/10 text-[#e75b37]"
                    >
                      <CheckCircle2 className="h-6 w-6" />
                    </motion.div>

                    <h3 className="mt-5 text-sm font-bold text-gray-950 dark:text-white">
                      Message Dispatched!
                    </h3>
                    <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                      Thank you for reaching out. Your message has been sent
                      successfully. I will get back to you soon!
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 rounded-full border border-neutral-900/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500 hover:bg-neutral-950 hover:text-white dark:border-white/5 dark:text-neutral-400 dark:hover:bg-white dark:hover:text-neutral-950 cursor-pointer transition-all duration-200"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
