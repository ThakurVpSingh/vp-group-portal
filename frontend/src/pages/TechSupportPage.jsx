import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { LifeBuoy } from 'lucide-react';

const TechSupportPage = () => {
    return (
        <PageTemplate 
            title="Technical Support"
            subtitle="24/7 Resilience & Monitoring"
            description="Our dedicated support mesh ensures your digital infrastructure remains resilient, secure, and always online. We provide proactive monitoring and rapid response."
            techDetails={[
                "Real-time uptime monitoring with automated alerting and heartbeat checks.",
                "Cloud infrastructure management (AWS, Google Cloud, Azure) and optimization.",
                "Database maintenance, backups, and disaster recovery orchestration.",
                "Security patching and zero-day vulnerability mitigation.",
                "Technical documentation and knowledge base management."
            ]}
            procedures={[
                "Proactive Monitoring: Catching issues before they impact your users.",
                "Ticket Orchestration: Centralized hub for tracking and resolving requests.",
                "Incident Response: Immediate action for mission-critical failures.",
                "Regular Audits: Monthly health checks for performance and security.",
                "Continuous Improvement: Refining systems based on support data."
            ]}
            suitability={[
                "Zero-Downtime Goals: For businesses that cannot afford to be offline.",
                "Affordable Peace of Mind: Professional support at a predictable monthly cost.",
                "Expert Availability: Access to specialized engineers whenever needed.",
                "Security Compliance: Ensuring your systems meet modern safety standards.",
                "Scalable Support: Grows with your business complexity."
            ]}
            icon={LifeBuoy}
        />
    );
};

export default TechSupportPage;
