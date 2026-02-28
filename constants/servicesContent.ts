export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
  numberedList?: string[];
};

export type ServiceContent = {
  title: string;
  subtitle: string;
  intro: string;
  sections: ContentSection[];
  cta: string;
};

export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  'new-home-build': {
    title: 'New Home Build Services in Alberta',
    subtitle: 'Building Homes, Trust & Lifelong Comfort with Oilers Services Inc',
    intro:
      "A home is not just walls and a roof — it's where your dreams begin, your family grows, and memories are created. At Oilers Services Inc, we understand the emotional value behind building a new home. That's why we don't just construct houses — we build spaces you can trust, feel proud of, and call home for a lifetime.",
    sections: [
      {
        paragraphs: [
          "We specialize in custom new home builds across Alberta, delivering structurally strong, modern, and energy-efficient homes with care, honesty, and precision. From the very first conversation to the final handover, our team stands beside you at every step, ensuring peace of mind and confidence throughout the journey.",
        ],
      },
      {
        heading: 'A Construction Partner Who Truly Understands You',
        paragraphs: [
          "Building a new home can feel overwhelming — decisions, budgets, timelines, and expectations. Many homeowners fear delays, poor quality, or lack of communication. At Oilers Services Inc, we eliminate those worries by focusing on clear communication, transparency, and genuine care.",
          'We listen first. We plan carefully. And we build with purpose.',
          'Our goal is simple: to make your home-building experience smooth, stress-free, and deeply satisfying.',
        ],
      },
      {
        heading: 'Custom New Home Construction Designed for Your Life',
        paragraphs: [
          "Every family is different — and your home should reflect that. Our new home build services in Alberta are fully customized to match your lifestyle, preferences, and long-term goals.",
        ],
        bullets: [
          'Custom home planning & design coordination',
          'Strong foundations and structural construction',
          'High-quality framing and roofing',
          'Interior finishing with attention to detail',
          'Energy-efficient building solutions',
          'Final inspection and smooth handover',
        ],
        paragraphsAfter: [
          'We take pride in building homes that are not only beautiful today but reliable for years to come.',
        ],
      },
      {
        heading: "Built Strong, Built Smart, Built to Last",
        paragraphs: [
          "Alberta's climate demands strength, insulation, and durability — and we build with that reality in mind. Every home we construct is designed to withstand harsh weather while maintaining comfort and efficiency inside.",
        ],
        bullets: [
          'Solid structural integrity',
          'Weather-resistant materials',
          'Energy-efficient layouts',
          'Modern, functional designs',
          'Long-lasting finishes',
        ],
        paragraphsAfter: [
          "When you walk into a home built by us, you'll feel the difference — strength you can trust and comfort you can feel.",
        ],
      },
      {
        heading: 'Complete Project Management for Total Peace of Mind',
        paragraphs: [
          'One of the biggest emotional stresses in home construction is coordination. Multiple contractors, missed deadlines, and unexpected costs can drain both time and energy.',
          'With Oilers Services Inc, you don\'t have to manage anything alone.',
        ],
        bullets: [
          'Site assessment and preparation',
          'Scheduling and daily supervision',
          'Budget control and cost clarity',
          'Quality checks at every stage',
          'Safety compliance and inspections',
        ],
        paragraphsAfter: ['You focus on your dream — we take care of the process.'],
      },
      {
        heading: 'Residential & Commercial Expertise You Can Rely On',
        paragraphs: [
          'Our experience spans both residential and commercial construction, giving us a strong foundation in professional planning, execution, and accountability. This dual expertise allows us to deliver higher standards, even on residential projects.',
        ],
        bullets: ['Homeowners', 'Property investors', 'Developers', 'Business owners'],
        paragraphsAfter: [
          'No matter the project size, we approach every build with the same commitment — doing it right the first time.',
        ],
      },
      {
        heading: 'Serving Families & Communities Across Alberta',
        paragraphs: [
          'We are proud to serve commercial and residential clients all over Alberta, with our head office located in Edmonton. Our reach includes:',
        ],
        bullets: ['Edmonton', 'Calgary', 'St. Albert', 'Red Deer', 'Surrounding Alberta regions'],
        paragraphsAfter: ['Wherever you plan to build, our team is ready to bring your vision to life.'],
      },
      {
        heading: 'Why Homeowners Trust Oilers Services Inc',
        paragraphs: [
          "Trust isn't claimed — it's earned. Homeowners choose us because we build more than homes; we build long-term relationships.",
        ],
        bullets: [
          'Honest communication',
          'Skilled and experienced professionals',
          'Custom solutions, not shortcuts',
          'Respect for your time and investment',
          'Commitment to quality and safety',
        ],
        paragraphsAfter: ['We treat every project as if it were our own home being built.'],
      },
      {
        heading: 'Our Promise: Quality, Care & Commitment',
        paragraphs: [
          'At Oilers Services Inc, we believe that quality construction starts with genuine care. From day one, we commit to listening, guiding, and delivering with integrity.',
          'Your trust matters to us — and we work hard every day to protect it.',
        ],
      },
      {
        heading: "Start Your New Home Journey with Confidence",
        paragraphs: [
          "Your future deserves a strong foundation. With Oilers Services Inc, you gain more than a contractor — you gain a trusted partner who genuinely cares about your home and your happiness.",
        ],
      },
    ],
    cta: "Contact us today and take the first step toward building a home you'll love for life.",
  },
  renovations: {
    title: 'Renovation Services in Alberta',
    subtitle: 'Transforming Spaces, Restoring Comfort & Renewing Trust with Oilers Services Inc',
    intro:
      "Your space tells a story — of growth, memories, hard work, and everyday life. Over time, homes and commercial properties need renewal, not just for appearance, but for comfort, safety, and functionality. At Oilers Services Inc, we believe renovations are not just about change — they are about creating a space that feels right again.",
    sections: [
      {
        paragraphs: [
          'We provide professional renovation services across Alberta, helping homeowners and businesses upgrade their interiors, enhance exteriors, and make structural improvements with confidence. Whether it\'s a small remodel or a complete transformation, we approach every renovation with care, honesty, and attention to detail.',
        ],
      },
      {
        heading: 'Renovations That Feel Thoughtful, Not Stressful',
        paragraphs: [
          "Renovating a property can feel overwhelming — unexpected costs, unclear timelines, and fear of poor workmanship often hold people back. At Oilers Services Inc, we remove that stress by offering clear communication, transparent planning, and reliable execution.",
          'We take time to understand your needs, your vision, and your budget before starting any work. Our team ensures that every decision supports long-term value, comfort, and peace of mind.',
        ],
      },
      {
        heading: 'Complete Interior Renovation Services',
        paragraphs: [
          'Your interiors should reflect your lifestyle and support your daily routine. Our interior renovation services in Alberta are designed to improve functionality while enhancing beauty and comfort.',
        ],
        bullets: [
          'Kitchen renovations',
          'Bathroom upgrades',
          'Flooring and finishing',
          'Wall remodeling and layout changes',
          'Lighting and space optimization',
        ],
        paragraphsAfter: [
          'We focus on smart designs, quality materials, and clean workmanship — so your space feels refreshed, modern, and welcoming.',
        ],
      },
      {
        heading: 'Exterior Renovations That Protect & Impress',
        paragraphs: [
          "The exterior of your property is the first impression — and your first line of protection against Alberta's climate. Our exterior renovation services strengthen your property while enhancing curb appeal.",
        ],
        bullets: [
          'Exterior upgrades and repairs',
          'Structural improvements',
          'Weather-resistant finishes',
          'Entryway and façade enhancements',
        ],
        paragraphsAfter: [
          'We build with durability in mind, ensuring your property stays strong, safe, and visually appealing for years to come.',
        ],
      },
      {
        heading: 'Structural Changes & Remodeling Done Right',
        paragraphs: [
          'Structural renovation requires experience, planning, and responsibility. At Oilers Services Inc, we handle structural changes and remodeling projects with precision and safety as top priorities.',
        ],
        bullets: [
          'Structural integrity',
          'Safety compliance',
          'Long-term reliability',
          'Seamless integration with existing spaces',
        ],
        paragraphsAfter: ['You can trust us to upgrade your space without compromising its foundation.'],
      },
      {
        heading: 'Residential & Commercial Renovation Expertise',
        paragraphs: [
          'We proudly serve both residential and commercial renovation clients across Alberta. Our experience in commercial projects allows us to bring professional planning and execution standards to every renovation.',
        ],
        bullets: ['Homeowners', 'Property investors', 'Retail and office spaces', 'Rental property owners'],
        paragraphsAfter: [
          'No matter the property type, we treat every renovation with respect and commitment.',
        ],
      },
      {
        heading: 'Why Renovate with Oilers Services Inc?',
        paragraphs: [
          "Renovation is about trust — trusting someone with your space, your time, and your investment. That's why clients across Alberta choose Oilers Services Inc.",
        ],
        bullets: [
          'Honest guidance and transparent pricing',
          'Skilled renovation professionals',
          'High-quality materials',
          'Clean, organized work sites',
          'Respect for your time and property',
        ],
        paragraphsAfter: ["We don't rush projects. We do them right."],
      },
      {
        heading: 'Serving Renovation Projects Across Alberta',
        paragraphs: [
          'With our head office in Edmonton, we provide renovation services all over Alberta, including:',
        ],
        bullets: ['Edmonton', 'Calgary', 'St. Albert', 'Red Deer', 'Surrounding regions'],
        paragraphsAfter: ['Wherever your property is located, our renovation team is ready to help.'],
      },
      {
        heading: 'Our Commitment: Care, Quality & Clear Communication',
        paragraphs: [
          'At Oilers Services Inc, we believe renovations should improve not just buildings, but lives. That\'s why we focus on careful planning, quality execution, and clear communication at every step.',
          'We keep you informed, involved, and confident — from the first discussion to the final walkthrough.',
        ],
      },
      {
        heading: 'Renew Your Space with Confidence',
        paragraphs: [
          "A well-done renovation can change how you live, work, and feel every day. With Oilers Services Inc, you gain a renovation partner who respects your space and delivers results you can trust.",
        ],
      },
    ],
    cta: "Contact us today and let's transform your space into something you'll love again.",
  },
  'general-contracting': {
    title: 'General Contracting Services in Alberta',
    subtitle: 'Reliable Project Management & Stress-Free Construction with Oilers Services Inc',
    intro:
      "Construction projects can quickly become overwhelming when timelines slip, communication breaks down, or responsibilities are unclear. At Oilers Services Inc, our general contracting services in Alberta are designed to bring structure, clarity, and confidence to your project — so you can move forward without stress or uncertainty.",
    sections: [
      {
        paragraphs: [
          "We don't just manage construction; we protect your investment, your time, and your peace of mind. From planning to execution, our team ensures every detail is handled with care, precision, and accountability.",
        ],
      },
      {
        heading: 'A General Contractor You Can Truly Rely On',
        paragraphs: [
          'Choosing a general contractor means trusting someone to coordinate people, materials, schedules, and budgets — all at the same time. At Oilers Services Inc, we take that responsibility seriously.',
          'We act as a single point of contact for your entire project, ensuring clear communication and smooth coordination between all trades involved. Our approach minimizes delays, avoids confusion, and keeps your project moving forward with confidence.',
        ],
      },
      {
        heading: 'Complete Project Management from Start to Finish',
        paragraphs: [
          'Our general contracting services cover every stage of construction, whether residential or commercial.',
        ],
        bullets: [
          'Detailed project planning',
          'Construction scheduling and supervision',
          'Trade and labor coordination',
          'Material sourcing and quality control',
          'Timeline and budget management',
          'Safety compliance and inspections',
        ],
        paragraphsAfter: [
          'We believe strong management is the foundation of successful construction — and we build on that foundation every day.',
        ],
      },
      {
        heading: 'Labor Coordination That Keeps Projects Moving',
        paragraphs: [
          'One of the biggest challenges in construction is managing multiple teams at the same time. Poor coordination leads to delays, rework, and rising costs.',
          'At Oilers Services Inc, we carefully coordinate skilled labor and subcontractors to ensure:',
        ],
        bullets: [
          'Right people at the right time',
          'Smooth workflow between trades',
          'Reduced downtime and delays',
          'Consistent quality across all phases',
        ],
        paragraphsAfter: ['Our organized approach allows your project to progress efficiently and smoothly.'],
      },
      {
        heading: 'Quality Material Sourcing You Can Trust',
        paragraphs: [
          'Materials define the strength, durability, and longevity of a project. That\'s why we take material sourcing seriously.',
          "We work with reliable suppliers to source high-quality materials that meet industry standards and suit Alberta's climate. Our team ensures that every material used aligns with your budget, design goals, and long-term performance expectations.",
          'No shortcuts. No compromises. Just dependable quality.',
        ],
      },
      {
        heading: 'Seamless Execution with Attention to Detail',
        paragraphs: [
          'Execution is where planning becomes reality. Our team oversees every stage of construction to ensure the work is done right the first time.',
        ],
        bullets: [
          'Accurate execution of plans',
          'Continuous quality checks',
          'Clean and organized job sites',
          'Respect for your property and surroundings',
        ],
        paragraphsAfter: [
          'The result is a construction process that feels controlled, professional, and reassuring.',
        ],
      },
      {
        heading: 'Residential & Commercial General Contracting',
        paragraphs: [
          'We provide general contracting services for both residential and commercial projects across Alberta. Our experience across different project types allows us to adapt our approach while maintaining high standards.',
        ],
        bullets: ['Homeowners', 'Property developers', 'Business owners', 'Investors'],
        paragraphsAfter: [
          "Whether it's a home renovation, new build, or commercial upgrade, we manage each project with equal dedication.",
        ],
      },
      {
        heading: 'Serving Construction Projects All Over Alberta',
        paragraphs: [
          'Based in Edmonton, Oilers Services Inc proudly serves clients all over Alberta, including:',
        ],
        bullets: ['Edmonton', 'Calgary', 'St. Albert', 'Red Deer', 'Surrounding regions'],
        paragraphsAfter: [
          'No matter where your project is located, our team is prepared to deliver reliable general contracting solutions.',
        ],
      },
      {
        heading: 'Why Choose Oilers Services Inc as Your General Contractor?',
        paragraphs: [
          'Construction success depends on trust, planning, and execution. Here\'s why clients choose us:',
        ],
        bullets: [
          'Clear communication throughout the project',
          'Experienced construction professionals',
          'Organized project management',
          'Reliable timelines and accountability',
          'Commitment to quality and safety',
        ],
        paragraphsAfter: ['We treat every project as a responsibility — not just a contract.'],
      },
      {
        heading: 'Our Promise: Transparency, Control & Confidence',
        paragraphs: [
          'At Oilers Services Inc, we believe that a well-managed project creates confidence at every stage. That\'s why we keep you informed, involved, and assured from start to finish.',
          'Your goals become our responsibility — and we work every day to deliver results you can trust.',
        ],
      },
      {
        heading: 'Build with Confidence, Build with Control',
        paragraphs: [
          'When your project is managed by professionals who care, construction becomes smoother, safer, and more predictable. With Oilers Services Inc, you gain a general contractor who values trust, precision, and your peace of mind.',
        ],
      },
    ],
    cta: "Contact us today and let's move your project forward — the right way.",
  },
  landscaping: {
    title: 'Landscaping Services in Alberta',
    subtitle: 'Transforming Outdoor Spaces with Care & Craftsmanship at Oilers Services Inc',
    intro:
      "Your outdoor space is more than just land — it's where mornings begin, families gather, customers form first impressions, and properties gain real value. A well-designed landscape brings peace, beauty, and pride. At Oilers Services Inc, we specialize in professional landscaping services across Alberta, helping homeowners and businesses transform ordinary outdoor areas into functional, welcoming, and visually stunning spaces.",
    sections: [
      {
        paragraphs: ["We don't just shape land — we shape experiences."],
      },
      {
        heading: 'Landscaping That Reflects Your Vision',
        paragraphs: [
          'Every property is different. Some clients want a peaceful backyard retreat. Others need a clean, professional commercial exterior. Our landscaping solutions are fully customized to match your goals, your budget, and Alberta\'s unique climate conditions.',
        ],
        bullets: ['Beautiful', 'Durable', 'Functional', 'Easy to maintain'],
        paragraphsAfter: [
          'From initial design to final installation, we handle every detail with precision and pride.',
        ],
      },
      {
        heading: 'Complete Landscaping Services in Alberta',
        paragraphs: [
          'Our landscaping services are designed for both residential and commercial properties. Whether you are starting from scratch or upgrading an existing space, we provide complete solutions under one roof.',
        ],
        bullets: [
          'Landscape Design & Planning — We carefully plan layouts that maximize space, flow, and visual appeal. Every design is created with long-term functionality and climate suitability in mind.',
          'Installation & Development — Our team installs high-quality materials and greenery with attention to detail, ensuring lasting results and clean finishes.',
          'Leveling & Soil Preparation — Proper leveling and soil grading are essential for stability and drainage. We prepare the land carefully to prevent future issues and ensure long-term durability.',
          'Maintenance Services — We provide ongoing maintenance to keep your landscape healthy, clean, and visually impressive throughout the seasons.',
        ],
      },
      {
        heading: "Built for Alberta's Climate",
        paragraphs: [
          'Landscaping in Alberta requires experience and understanding of seasonal changes. Harsh winters, heavy snowfall, and temperature variations demand thoughtful planning.',
        ],
        bullets: [
          'Withstand seasonal changes',
          'Maintain strong drainage systems',
          'Support long-term plant health',
          'Remain functional year-round',
        ],
        paragraphsAfter: ['Our knowledge of local conditions ensures your investment is protected.'],
      },
      {
        heading: 'Residential Landscaping – Creating Comfort at Home',
        paragraphs: [
          'Your home should feel complete inside and out. A thoughtfully landscaped yard increases property value and enhances everyday living.',
        ],
        bullets: [
          'Relaxing backyard retreats',
          'Functional outdoor living spaces',
          'Clean and modern front entrances',
          'Organized garden layouts',
        ],
        paragraphsAfter: ['Our goal is simple — to create outdoor spaces where memories are made.'],
      },
      {
        heading: 'Commercial Landscaping – Making Strong First Impressions',
        paragraphs: [
          'For businesses, exterior appearance matters. A clean, well-maintained landscape builds trust and professionalism before customers even walk inside.',
        ],
        bullets: ['Office buildings', 'Retail spaces', 'Rental properties', 'Commercial complexes'],
        paragraphsAfter: [
          'We ensure your property looks polished, professional, and welcoming year-round.',
        ],
      },
      {
        heading: 'Why Choose Oilers Services Inc for Landscaping?',
        paragraphs: [
          "Landscaping is not just physical labor — it requires vision, planning, and responsibility. Clients across Alberta trust us because we deliver more than promises.",
        ],
        bullets: [
          'Experienced landscaping professionals',
          'Custom designs tailored to your needs',
          'Quality materials and workmanship',
          'Clean, organized project execution',
          'Transparent communication',
        ],
        paragraphsAfter: [
          'We approach every project with care, treating your property as if it were our own.',
        ],
      },
      {
        heading: 'A Process Designed for Peace of Mind',
        paragraphs: [
          'We understand that property upgrades can feel stressful. That\'s why our landscaping process is built around clarity and reliability.',
        ],
        numberedList: [
          'Consultation & site evaluation',
          'Clear planning and cost transparency',
          'Professional installation',
          'Final walkthrough and satisfaction check',
        ],
        paragraphsAfter: ['You stay informed and confident at every stage.'],
      },
      {
        heading: 'Serving Landscaping Projects All Over Alberta',
        paragraphs: [
          'With our head office in Edmonton, Oilers Services Inc proudly serves clients across Alberta, including:',
        ],
        bullets: ['Edmonton', 'Calgary', 'St. Albert', 'Red Deer', 'Surrounding regions'],
        paragraphsAfter: [
          'No matter where your property is located, we bring professionalism and commitment to every outdoor transformation.',
        ],
      },
      {
        heading: 'Our Commitment: Beauty, Strength & Long-Term Value',
        paragraphs: [
          'At Oilers Services Inc, we believe great landscaping should look beautiful today and remain strong tomorrow. That\'s why we focus on quality soil preparation, proper leveling, and careful installation — the foundation of long-lasting results.',
          'Your outdoor space deserves thoughtful planning, skilled execution, and genuine care.',
        ],
      },
      {
        heading: "Let's Create an Outdoor Space You'll Be Proud Of",
        paragraphs: [
          'A professionally designed landscape increases value, enhances comfort, and builds pride in ownership. With Oilers Services Inc, you gain a landscaping partner who combines creativity, strength, and reliability.',
        ],
      },
    ],
    cta: "Contact us today and let's transform your outdoor space into something truly special.",
  },
  gardening: {
    title: 'Gardening Services in Alberta',
    subtitle: 'Nurturing Green Spaces with Care & Commitment at Oilers Services Inc',
    intro:
      "A well-maintained garden brings calm, beauty, and life to any property. It's where fresh mornings begin, where families relax, and where visitors feel instantly welcomed. At Oilers Services Inc, we believe gardening is not just maintenance — it's care, consistency, and attention to nature's needs.",
    sections: [
      {
        paragraphs: [
          'We provide professional gardening services across Alberta, offering routine and seasonal care that keeps your property green, healthy, and visually appealing all year round. Whether it\'s a residential garden or a commercial landscape, our team treats every space with respect and dedication.',
        ],
      },
      {
        heading: 'Gardening That Cares for More Than Just Plants',
        paragraphs: [
          'Gardens require more than occasional attention. Without proper care, plants weaken, lawns lose their freshness, and outdoor spaces slowly lose their charm. Our gardening services are designed to ensure your green areas stay vibrant, balanced, and healthy.',
          'At Oilers Services Inc, we understand that your garden reflects your property. That\'s why we focus on careful planning, regular upkeep, and thoughtful seasonal adjustments — so your outdoor space always looks its best.',
        ],
      },
      {
        heading: 'Routine Gardening Services for Consistent Beauty',
        paragraphs: [
          'Consistency is the secret to a healthy garden. Our routine gardening services are ideal for homeowners and businesses who want their outdoor spaces to remain neat, green, and welcoming without worry.',
        ],
        bullets: [
          'Lawn care and trimming',
          'Plant care and monitoring',
          'Weed control',
          'Soil health maintenance',
          'General garden cleaning',
        ],
        paragraphsAfter: [
          'Our team follows scheduled visits to ensure your garden receives the attention it needs — no guesswork, no neglect.',
        ],
      },
      {
        heading: 'Seasonal Gardening for Year-Round Health',
        paragraphs: [
          "Alberta's seasons demand specialized care. From spring growth to winter preparation, we provide seasonal gardening services that protect and strengthen your landscape throughout the year.",
        ],
        bullets: [
          'Spring garden preparation',
          'Summer maintenance and care',
          'Fall cleanup and plant protection',
          'Winter readiness planning',
        ],
        paragraphsAfter: [
          'By adapting to seasonal changes, we help your garden recover, grow, and thrive year after year.',
        ],
      },
      {
        heading: 'Residential Gardening – Creating Peace at Home',
        paragraphs: [
          'Your home garden should feel calm, refreshing, and inviting. Our residential gardening services are designed to help homeowners enjoy beautiful outdoor spaces without the burden of constant upkeep.',
        ],
        bullets: [
          'Clean, organized garden layouts',
          'Healthy lawns and plants',
          'Relaxing outdoor environments',
          'Enhanced property appearance',
        ],
        paragraphsAfter: ['Our goal is simple — to give you a garden you can enjoy, not worry about.'],
      },
      {
        heading: 'Commercial Gardening – Clean, Professional & Inviting',
        paragraphs: [
          'For commercial properties, outdoor appearance plays a powerful role in first impressions. A clean, well-maintained garden reflects professionalism and care.',
        ],
        bullets: ['Office buildings', 'Retail properties', 'Rental complexes', 'Commercial landscapes'],
        paragraphsAfter: [
          'Our team ensures your property always looks polished, green, and welcoming for customers and visitors.',
        ],
      },
      {
        heading: 'Why Choose Oilers Services Inc for Gardening?',
        paragraphs: [
          'Gardening requires patience, consistency, and genuine care — and that\'s exactly what we deliver.',
        ],
        bullets: [
          'Skilled and reliable gardening professionals',
          'Customized routine and seasonal plans',
          'Respect for your property',
          'Clean and organized service approach',
          'Clear communication and dependable schedules',
        ],
        paragraphsAfter: ["We don't rush. We nurture."],
      },
      {
        heading: 'Gardening Built Around Trust & Long-Term Care',
        paragraphs: [
          'At Oilers Services Inc, we believe great gardening is built on long-term relationships. That\'s why we take time to understand your property\'s needs and adjust our services as your garden grows.',
          "You'll always know what's being done, when it's being done, and why — giving you confidence and peace of mind.",
        ],
      },
      {
        heading: 'Serving Gardening Projects All Over Alberta',
        paragraphs: [
          'With our head office in Edmonton, we proudly provide gardening services all over Alberta, including:',
        ],
        bullets: ['Edmonton', 'Calgary', 'St. Albert', 'Red Deer', 'Surrounding areas'],
        paragraphsAfter: [
          'Wherever your property is located, our team is ready to keep your garden healthy and beautiful.',
        ],
      },
      {
        heading: 'Our Commitment: Healthy Growth & Lasting Beauty',
        paragraphs: [
          'We believe gardens should feel alive, balanced, and cared for. That\'s why our gardening services focus on:',
        ],
        bullets: ['Plant health', 'Soil nourishment', 'Clean maintenance', 'Long-term sustainability'],
        paragraphsAfter: ['Your green space deserves thoughtful care — and we deliver exactly that.'],
      },
      {
        heading: 'Let Your Garden Thrive with Confidence',
        paragraphs: [
          'A healthy garden brings life, beauty, and balance to your property. With Oilers Services Inc, you gain a gardening partner who understands nature, respects your space, and delivers care you can trust.',
        ],
      },
    ],
    cta:
      'Contact us today and let us keep your outdoor spaces green, healthy, and welcoming — season after season.',
  },
  demolition: {
    title: 'Demolition Services in Alberta',
    subtitle: 'Safe, Controlled & Responsible Demolition by Oilers Services Inc',
    intro:
      "Demolition is not just about tearing down structures — it's about preparing for new beginnings. Whether you're clearing space for a new home, upgrading a commercial property, or removing unsafe structures, demolition requires precision, planning, and strict safety control.",
    sections: [
      {
        paragraphs: [
          'At Oilers Services Inc, we provide safe and efficient demolition services across Alberta, handling homes, buildings, and various structures with professionalism and responsibility. Our focus is simple: protect people, protect surrounding property, and execute every project safely and efficiently.',
        ],
      },
      {
        heading: 'Demolition Done the Right Way',
        paragraphs: [
          'Demolition can feel risky if not handled by experienced professionals. Structural instability, environmental concerns, and safety hazards make it essential to choose a contractor you can truly trust.',
        ],
        bullets: [
          'Strict safety standards',
          'Industry best practices',
          'Environmental guidelines',
          'Careful planning and supervision',
        ],
        paragraphsAfter: [
          'We approach every demolition project with control, preparation, and respect for the surrounding environment.',
        ],
      },
      {
        heading: 'Residential Demolition Services',
        paragraphs: [
          'When it comes to residential properties, careful execution is critical. We understand that homes are often located near neighbors, utilities, and active communities.',
        ],
        bullets: [
          'Partial home demolition',
          'Interior structural removal',
          'Garage and small structure removal',
          'Property clearing for new construction',
        ],
        paragraphsAfter: [
          'We ensure the process is handled with minimal disruption while maintaining maximum safety.',
        ],
      },
      {
        heading: 'Commercial & Structural Demolition',
        paragraphs: [
          'Commercial demolition projects require detailed coordination and professional management. From small commercial buildings to larger structures, our team manages demolition with precision and accountability.',
        ],
        bullets: [
          'Organized site preparation',
          'Structural safety assessments',
          'Controlled demolition execution',
          'Responsible debris management',
        ],
        paragraphsAfter: [
          'Our experience in both residential and commercial construction gives us a deep understanding of structural systems, allowing us to perform demolition safely and strategically.',
        ],
      },
      {
        heading: 'Safety is Our Top Priority',
        paragraphs: [
          'Demolition without proper safety procedures can lead to serious risks. That\'s why safety is at the core of everything we do.',
        ],
        bullets: [
          'Worker safety',
          'Protection of nearby structures',
          'Compliance with Alberta regulations',
          'Controlled and systematic demolition',
        ],
        paragraphsAfter: [
          'Every project begins with careful planning and risk assessment to ensure smooth and secure execution.',
        ],
      },
      {
        heading: 'Environmentally Responsible Demolition',
        paragraphs: [
          'At Oilers Services Inc, we recognize our responsibility to protect the environment. Demolition isn\'t just about removal — it\'s also about responsible disposal and waste management.',
        ],
        bullets: [
          'Manage debris properly',
          'Minimize dust and pollution',
          'Reduce environmental impact',
          'Maintain clean, organized work sites',
        ],
        paragraphsAfter: [
          'Our goal is to prepare your property for its next chapter without compromising safety or environmental responsibility.',
        ],
      },
      {
        heading: 'Efficient Execution with Minimal Disruption',
        paragraphs: [
          'We understand that time matters. Delays in demolition can impact your overall construction timeline. That\'s why we prioritize efficient scheduling and organized workflow.',
        ],
        numberedList: [
          'Site evaluation and planning',
          'Safety inspection and preparation',
          'Controlled demolition',
          'Debris clearing and cleanup',
          'Final site readiness check',
        ],
        paragraphsAfter: [
          'The result is a cleared, safe site ready for your next project phase.',
        ],
      },
      {
        heading: 'Serving Demolition Projects Across Alberta',
        paragraphs: [
          'Based in Edmonton, Oilers Services Inc proudly provides demolition services all over Alberta, including:',
        ],
        bullets: ['Edmonton', 'Calgary', 'St. Albert', 'Red Deer', 'Surrounding regions'],
        paragraphsAfter: [
          'No matter where your project is located, we bring professionalism, responsibility, and expertise to every demolition site.',
        ],
      },
      {
        heading: 'Why Choose Oilers Services Inc for Demolition?',
        paragraphs: [
          'Demolition requires strength — but also precision and responsibility. Clients across Alberta choose us because we deliver:',
        ],
        bullets: [
          'Strict safety compliance',
          'Experienced demolition professionals',
          'Responsible environmental practices',
          'Organized and controlled execution',
          'Transparent communication',
        ],
        paragraphsAfter: [
          "We don't believe in careless destruction. We believe in strategic preparation for something better.",
        ],
      },
      {
        heading: 'Our Commitment: Safety, Control & Professionalism',
        paragraphs: [
          'At Oilers Services Inc, demolition is handled with discipline and respect. We understand that every project is the first step toward something new — a rebuild, a renovation, or a fresh start.',
          "That's why we focus on: Careful planning, Clear communication, Responsible execution",
          'Your project deserves a safe beginning.',
        ],
      },
      {
        heading: 'Clear the Way for New Possibilities',
        paragraphs: [
          'Demolition marks the beginning of transformation. With Oilers Services Inc, you gain a trusted partner who handles every structure with care, safety, and responsibility.',
        ],
      },
    ],
    cta: "Contact us today and let's prepare your site for its next chapter — safely and professionally.",
  },
  'soil-grading': {
    title: 'Soil Grading Services in Alberta',
    subtitle: 'Strong Foundations Begin with Precision Grading by Oilers Services Inc',
    intro:
      'Every successful construction or landscaping project starts below the surface. Proper soil grading is not just a technical step — it is the foundation of safety, stability, and long-term durability. Without correct grading, even the best structures can face drainage problems, foundation damage, and costly repairs.',
    sections: [
      {
        paragraphs: [
          'At Oilers Services Inc, we provide professional soil grading services across Alberta, preparing land with precision so your construction or landscaping project starts on solid ground. We approach every grading project with care, accuracy, and respect for long-term performance.',
        ],
      },
      {
        heading: 'Why Proper Soil Grading Matters',
        paragraphs: [
          'Grading is essential for controlling water flow, preventing erosion, and protecting foundations. Poor grading can lead to standing water, soil movement, and structural issues that appear years later.',
        ],
        bullets: [
          'Proper drainage away from structures',
          'Stable and level building surfaces',
          'Reduced risk of erosion',
          'Long-term foundation protection',
        ],
        paragraphsAfter: ["We don't rush this process — we get it right the first time."],
      },
      {
        heading: 'Professional Land Preparation for Construction Projects',
        paragraphs: [
          'Before any construction begins, the land must be prepared correctly. Our soil grading services support a wide range of construction needs.',
        ],
        bullets: [
          'Site leveling and preparation',
          'Foundation grading',
          'Drainage slope creation',
          'Land contouring for stability',
        ],
        paragraphsAfter: [
          'By preparing your site with precision, we help ensure smoother construction phases and fewer issues down the line.',
        ],
      },
      {
        heading: 'Grading for Landscaping Projects',
        paragraphs: [
          'Landscaping requires more than visual planning — it requires proper ground preparation. Uneven land or poor drainage can quickly damage plants and outdoor structures.',
        ],
        bullets: [
          'Create smooth, functional outdoor spaces',
          'Improve water drainage',
          'Support long-term plant health',
          'Prevent soil erosion',
        ],
        paragraphsAfter: [
          "Whether you're installing a new landscape or upgrading an existing one, proper grading sets the stage for lasting results.",
        ],
      },
      {
        heading: 'Precision Equipment & Skilled Execution',
        paragraphs: [
          'Soil grading is a technical task that demands both experience and the right equipment. At Oilers Services Inc, we use professional-grade machinery operated by trained professionals to achieve accurate and consistent results.',
        ],
        bullets: [
          'Controlled grading processes',
          'Accurate slope measurements',
          'Clean and organized job sites',
          'Safe equipment operation',
        ],
        paragraphsAfter: ['Every project is completed with attention to detail and safety.'],
      },
      {
        heading: 'Residential & Commercial Soil Grading',
        paragraphs: [
          'We provide soil grading services for both residential and commercial properties across Alberta. Our experience across multiple project types allows us to adapt our approach while maintaining high standards.',
        ],
        bullets: ['Homeowners', 'Builders and developers', 'Property investors', 'Commercial property owners'],
        paragraphsAfter: [
          'No matter the scale, your project receives the same level of care and precision.',
        ],
      },
      {
        heading: 'Drainage Solutions That Protect Your Investment',
        paragraphs: [
          'Water management is one of the most critical aspects of grading. Improper drainage can weaken soil and damage foundations over time.',
        ],
        bullets: [
          'Direct water away from structures',
          'Reduce pooling and erosion',
          'Improve long-term land stability',
        ],
        paragraphsAfter: ['By focusing on proper drainage, we help protect your investment for years to come.'],
      },
      {
        heading: 'Serving Soil Grading Projects All Over Alberta',
        paragraphs: [
          'With our head office located in Edmonton, Oilers Services Inc proudly provides soil grading services all over Alberta, including:',
        ],
        bullets: ['Edmonton', 'Calgary', 'St. Albert', 'Red Deer', 'Surrounding regions'],
        paragraphsAfter: [
          'Wherever your land is located, we bring reliable grading expertise to your project.',
        ],
      },
      {
        heading: 'Why Choose Oilers Services Inc for Soil Grading?',
        paragraphs: [
          'Soil grading demands precision, planning, and accountability. Clients across Alberta trust us because we deliver:',
        ],
        bullets: [
          'Experienced grading professionals',
          'Accurate site preparation',
          'Strong focus on drainage and stability',
          'Safe and efficient execution',
          'Clear communication throughout',
        ],
        paragraphsAfter: ['We believe the quality of your project begins with the ground beneath it.'],
      },
      {
        heading: 'Our Commitment: Stability, Accuracy & Long-Term Value',
        paragraphs: [
          'At Oilers Services Inc, we understand that soil grading is a critical step that cannot be overlooked. That\'s why we commit to careful planning, precise execution, and results you can rely on.',
          'We prepare land not just for today — but for long-term performance and peace of mind.',
        ],
      },
      {
        heading: 'Build on a Strong, Stable Foundation',
        paragraphs: [
          'Proper grading protects your project, your investment, and your future plans. With Oilers Services Inc, you gain a trusted partner who understands that what lies beneath matters most.',
        ],
      },
    ],
    cta: "Contact us today and let's prepare your land the right way — with precision, care, and confidence.",
  },
  'snow-removal': {
    title: 'Snow Removal Services in Alberta',
    subtitle: 'Oilers Services Inc – Reliable Winter Protection for Residential & Commercial Properties',
    intro:
      "Winters in Alberta can be beautiful — but they can also be harsh, unpredictable, and dangerous. At Oilers Services Inc, we provide dependable, timely, and professional snow removal services to keep your property safe, accessible, and fully operational throughout the winter season.",
    sections: [
      {
        paragraphs: [
          'We understand that heavy snowfall and icy conditions can disrupt your daily life or business operations. That\'s why our experienced team is always prepared to respond quickly, clear efficiently, and ensure your peace of mind during the coldest months of the year.',
        ],
      },
      {
        heading: 'Professional Snow Removal for Homes & Businesses Across Alberta',
        paragraphs: [
          'We proudly serve commercial and residential properties all over Alberta, including:',
        ],
        bullets: [
          'Residential driveways',
          'Sidewalks & walkways',
          'Parking lots',
          'Commercial plazas',
          'Office buildings',
          'Industrial facilities',
        ],
        paragraphsAfter: [
          'Whether you are a homeowner who wants a clean driveway in the morning or a business owner who needs safe access for customers and employees, we treat every property with equal care and responsibility.',
        ],
      },
      {
        heading: 'Our Snow Removal Services Include:',
        bullets: [
          'Driveway snow clearing',
          'Parking lot snow removal',
          'Sidewalk & walkway clearing',
          'Ice removal & de-icing',
          'Salting & sanding services',
          'Seasonal snow management contracts',
          'Emergency snow clearing',
        ],
        paragraphsAfter: [
          'We use reliable equipment and safe techniques to remove snow efficiently without damaging your pavement, landscaping, or property structure.',
        ],
      },
      {
        heading: 'Safety is Our Top Priority',
        paragraphs: [
          'Snow and ice can cause slips, falls, vehicle accidents, and legal liabilities — especially for commercial properties. Our team follows strict safety procedures to reduce risks and maintain compliance with Alberta safety standards.',
          'With Oilers Services Inc, you don\'t just get snow removal — you get protection, responsibility, and commitment.',
        ],
        bullets: [
          'Clear and safe access points',
          'Reduced ice hazards',
          'Proper drainage after melting',
          'Minimal disruption to your daily routine',
        ],
      },
      {
        heading: 'Commercial Snow Removal – Keep Your Business Running',
        paragraphs: [
          'For businesses, snow is more than just an inconvenience — it can impact revenue and reputation. A blocked parking lot or icy entrance can discourage customers and create liability risks.',
        ],
        bullets: [
          'Safe customer entry',
          'Clear parking areas',
          'On-time service during heavy snowfall',
          'Flexible scheduling (day & night operations)',
          'Seasonal maintenance plans',
        ],
        paragraphsAfter: [
          'We understand that your business depends on accessibility — and we take that responsibility seriously.',
        ],
      },
      {
        heading: 'Residential Snow Removal – Peace of Mind at Home',
        paragraphs: [
          'Alberta winters can be tough, especially for families, seniors, or busy homeowners. Shoveling snow early in the morning or late at night is exhausting and sometimes risky.',
          'Let our team handle it for you.',
        ],
        bullets: [
          'Reliable driveway clearing',
          'Walkway safety for children and elders',
          'Quick response after snowfall',
          'Affordable seasonal plans',
        ],
        paragraphsAfter: ['Your home should feel safe and comfortable — even in winter.'],
      },
      {
        heading: 'Serving All Over Alberta',
        paragraphs: [
          'From our head office in Edmonton, Alberta, we proudly serve communities across the province.',
        ],
      },
      {
        heading: 'Why Choose Oilers Services Inc for Snow Removal?',
        bullets: [
          'Experienced and trained team',
          'Fast response during snowstorms',
          'Professional-grade equipment',
          'Commercial & residential expertise',
          'Seasonal contracts available',
          'Customer-first approach',
          'Honest pricing and clear communication',
        ],
        paragraphsAfter: ["We don't just clear snow — we build trust with every service call."],
      },
      {
        heading: 'A Company You Can Trust',
        paragraphs: [
          'At Oilers Services Inc, we believe in long-term relationships built on honesty, reliability, and hard work. Winter conditions can be stressful — but working with the right team makes all the difference.',
        ],
        bullets: [
          'Reliability during harsh weather',
          'Professional service with respect',
          'Clear communication',
          'A team that truly cares about your safety',
        ],
        paragraphsAfter: ['Your safety is our responsibility. Your trust is our priority.'],
      },
      {
        heading: 'Get Ready Before the Snow Falls',
        paragraphs: [
          "Don't wait for the next snowstorm to take action. Contact Oilers Services Inc today for reliable snow removal services in Alberta. Ask about our seasonal contracts and customized plans for your property.",
          'Stay safe. Stay accessible. Stay worry-free — all winter long.',
        ],
      },
    ],
    cta:
      "Don't wait for the next snowstorm to take action. Contact us today for reliable snow removal services in Alberta.",
  },
};
