"use client";

import { useEffect, useRef } from "react";

const FEEDBACKS = [
  {
    name: "Sarah M.",
    location: "Edmonton, AB",
    text: "Oilers Services did an excellent job on our home renovation. Professional, on time, and the quality was outstanding. Highly recommend for any construction or renovation project.",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Calgary, AB",
    text: "We used them for landscaping and snow removal throughout the winter. Reliable and fair pricing. Will definitely use again.",
    rating: 5,
  },
  {
    name: "Linda & David T.",
    location: "Edmonton, AB",
    text: "From demolition to the final touches, the team was fantastic. They made our new home build stress-free. Invest in your future-they really deliver.",
    rating: 5,
  },
  {
    name: "Mike R.",
    location: "St. Albert, AB",
    text: "General contracting and soil grading for our commercial property was done perfectly. Professional crew and great communication.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Edmonton, AB",
    text: "Landscaping and gardening services transformed our yard. Very happy with the results. Thank you Oilers Services!",
    rating: 5,
  },
];

function FeedbackCard({
  name,
  location,
  text,
  rating,
}: {
  name: string;
  location: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="feedback-card">
      <div className="feedback-stars" aria-hidden>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="feedback-star">
            ★
          </span>
        ))}
      </div>
      <p className="feedback-text">&ldquo;{text}&rdquo;</p>
      <div className="feedback-meta">
        <span className="feedback-name">{name}</span>
        <span className="feedback-location">{location}</span>
      </div>
    </div>
  );
}

export default function FeedbackCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Mouse wheel se horizontal scroll allow karo
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="feedback-carousel-wrap"
      aria-label="Customer feedback"
    >
      <div className="feedback-carousel-track">
        {FEEDBACKS.map((item, index) => (
          <FeedbackCard
            key={`${item.name}-${index}`}
            name={item.name}
            location={item.location}
            text={item.text}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
