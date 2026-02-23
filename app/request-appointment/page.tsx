'use client';

import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import emailjs from '@emailjs/browser';
import { SERVICES } from '@/constants/services';
/*
export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book an appointment with Oilers Services Inc for new home builds, renovations, landscaping, demolition, grading, snow removal, and more.',
};
*/
export default function RequestAppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
  });

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('request-appointment-seen', 'true');
    }, 1000);
  }, []);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      newErrors.phone = 'Number is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is required';
    }
    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }
    if (!formData.budget.trim()) {
      newErrors.budget = 'Your budget is required';
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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          service: formData.service,
          budget: formData.budget,
          to_email: 'oilersservicesinc@gmail.com',
          subject: 'New Appointment Request - Oilers Services Inc',
        },
        publicKey
      );

      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="section section-alt"
      aria-labelledby="request-appointment-heading"
    >
      <div className="container">
        <h1 id="request-appointment-heading" className="section-title">
          Book an Appointment
        </h1>
        <p style={{ maxWidth: '640px', marginBottom: '2rem' }}>
          Fill in the details below to request an appointment for any of our
          services. We&apos;ll review your request and get back to you as soon
          as possible.
        </p>

        {isSubmitted ? (
          <div className="form-success">
            <h2>Thank you!</h2>
            <p>We&apos;ve received your appointment request.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
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
              <label htmlFor="phone">
                Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
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
              <label htmlFor="email">
                E-Mail <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={errors.email ? 'error' : ''}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="service">
                Select service <span className="required">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={errors.service ? 'error' : ''}
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
              <label htmlFor="budget">
                Your Budget <span className="required">*</span>
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className={errors.budget ? 'error' : ''}
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
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

