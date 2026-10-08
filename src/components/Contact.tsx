"use client";

import { useState, type FormEvent } from "react";
import {
  contactInfo,
  contactSection,
} from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  Globe,
} from "lucide-react";

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /**
   * Mock submit handler.
   * Replace this with your preferred service:
   * - EmailJS
   * - Resend
   * - Formspree
   * - Your own backend API
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-main">
        <SectionHeader
          eyebrow={contactSection.eyebrow}
          heading={contactSection.heading}
          description={contactSection.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <AnimateOnScroll>
            <div>
              {/* Contact Details */}
              <div className="space-y-5 mb-10">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent-ink)",
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent-ink)",
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Phone
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent-ink)",
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                <a
                  href={contactInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent-ink)",
                    }}
                  >
                    <Globe size={20} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Portfolio
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      avinkumar.vercel.app
                    </p>
                  </div>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="btn btn-primary"
                >
                  <Mail size={16} />
                  Send Email
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
                <a
                  href="/resume/AvinkumarSubburamResume_20260710.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn btn-secondary"
                >
                  <ExternalLink size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — Contact Form */}
          <AnimateOnScroll delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="card"
              style={{ padding: "36px" }}
            >
              <h3
                className="text-lg font-semibold mb-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                Send a Message
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm rounded-xl outline-none transition-all"
                    style={{
                      backgroundColor: "var(--color-surface-secondary)",
                      border: "1.5px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-accent-ink)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(200, 255, 48, 0.35)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--color-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm rounded-xl outline-none transition-all"
                    style={{
                      backgroundColor: "var(--color-surface-secondary)",
                      border: "1.5px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-accent-ink)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(200, 255, 48, 0.35)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--color-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 text-sm rounded-xl outline-none transition-all resize-none"
                    style={{
                      backgroundColor: "var(--color-surface-secondary)",
                      border: "1.5px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-accent-ink)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(200, 255, 48, 0.35)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--color-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success state */}
                {submitted && (
                  <div
                    className="text-center py-3 px-4 text-sm font-medium rounded-xl"
                    style={{
                      backgroundColor: "var(--color-success-soft)",
                      color: "#16A34A",
                      border: "1px solid #BBF7D0",
                    }}
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
