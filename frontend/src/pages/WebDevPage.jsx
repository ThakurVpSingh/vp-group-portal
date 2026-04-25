import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { Globe } from 'lucide-react';

const WebDevPage = () => {
    return (
        <PageTemplate 
            title="Web Development"
            subtitle="Architecting Digital Experiences"
            description="We build high-performance, SEO-optimized, and visually stunning web ecosystems that drive engagement and conversion. From single-page applications to complex enterprise portals."
            techDetails={[
                "Full-stack MERN (MongoDB, Express, React, Node.js) architecture for seamless data flow.",
                "Responsive design systems using CSS Grid, Flexbox, and modern viewport management.",
                "Progressive Web App (PWA) capabilities for offline access and native-like feel.",
                "Integration with Headless CMS (Strapi, Contentful) for dynamic content management.",
                "State management via Redux Toolkit or Context API for complex application logic."
            ]}
            procedures={[
                "Discovery & Wireframing: Mapping user journeys and functional requirements.",
                "UI/UX Design: Creating high-fidelity prototypes with cinematic aesthetics.",
                "Development Sprint: Agile coding cycles with continuous integration (CI/CD).",
                "Quality Assurance: Rigorous testing across devices, browsers, and network speeds.",
                "Deployment: Secure launching on cloud infrastructure with SSL and CDN optimization."
            ]}
            suitability={[
                "High-performance requirements: If your site needs to be lightning fast.",
                "Scalability: Built to handle thousands of concurrent users with ease.",
                "Mobile-First Approach: Ensuring 100% responsiveness on all handheld devices.",
                "Affordable Pricing: Premium quality at a fraction of agency costs.",
                "24/7 Technical Support: We never leave your digital assets unattended."
            ]}
            icon={Globe}
        />
    );
};

export default WebDevPage;
