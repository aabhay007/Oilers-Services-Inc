"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { SERVICES } from "@/constants/services";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("request-appointment-seen");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("contact-popup-seen", "true");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail is required";
    }
    if (!formData.service.trim()) {
      newErrors.service = "Please select a service";
    }
    if (!formData.budget.trim()) {
      newErrors.budget = "Your budget is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          service: formData.service,
          budget: formData.budget,
          to_email: "oilersservicesinc@gmail.com",
          subject: "New Appointment Request - Oilers Services Inc",
        },
        publicKey,
      );

      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="popup-overlay" onClick={handleClose} />
      <div className="popup-modal" role="dialog" aria-labelledby="popup-title">
        <button
          className="popup-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button>
        {isSubmitted ? (
          <div className="popup-success">
            <h2 id="popup-title">Thank You!</h2>
            <p>We&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2 id="popup-title">Book an Appointment</h2>
            <p className="popup-subtitle">
              Share your details and preferred service, and we&apos;ll contact
              you shortly.
            </p>
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label htmlFor="popup-name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="popup-phone">
                  Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="popup-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="popup-email">
                  E-Mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="popup-service">
                  Select service <span className="required">*</span>
                </label>
                <select
                  id="popup-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={errors.service ? "error" : ""}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="error-message">{errors.service}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="popup-budget">
                  Your Budget <span className="required">*</span>
                </label>
                <input
                  type="number"
                  id="popup-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  min={0}
                  required
                  className={errors.budget ? "error" : ""}
                />
                {errors.budget && (
                  <span className="error-message">{errors.budget}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
