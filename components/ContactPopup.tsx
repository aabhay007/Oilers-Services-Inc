'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirements: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('contact-popup-seen');
     // if (!hasSeenPopup) {
        setIsOpen(true);
   //   }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('contact-popup-seen', 'true');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Your requirements are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // Get these from https://www.emailjs.com/
      // Replace with your EmailJS service ID, template ID, and public key
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
console.log(serviceId, templateId, publicKey);
      // If EmailJS is not configured, use mailto fallback
    /*  if (
        serviceId === 'YOUR_SERVICE_ID' ||
        templateId === 'YOUR_TEMPLATE_ID' ||
        publicKey === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error('EmailJS not configured');
      }
        */

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          message: formData.requirements,
          to_email: 'oilersservicesinc@gmail.com',
          subject: 'New Contact Form Submission - Oilers Services Inc',
        },
        publicKey
      );

      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      // Fallback: use mailto if EmailJS fails or is not configured
    //  const mailtoLink = `mailto:oilersservicesinc@gmail.com?subject=Contact Form Submission - Oilers Services Inc&body=Name: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0ARequirements: ${encodeURIComponent(formData.requirements)}`;
     // window.location.href = mailtoLink;
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
            <h2 id="popup-title">Get a Free Quote</h2>
            <p className="popup-subtitle">
              Tell us about your project and we&apos;ll contact you shortly.
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
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="popup-phone">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="popup-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="popup-requirements">
                  Your Requirements <span className="required">*</span>
                </label>
                <textarea
                  id="popup-requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  required
                  className={errors.requirements ? 'error' : ''}
                />
                {errors.requirements && (
                  <span className="error-message">{errors.requirements}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
