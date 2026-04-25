import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { Cpu } from 'lucide-react';

const SoftwareEngPage = () => {
    return (
        <PageTemplate 
            title="Software Engineering"
            subtitle="Mission-Critical System Logic"
            description="Engineering robust backend systems, identity management platforms, and custom enterprise tools. We focus on security, reliability, and long-term maintainability."
            techDetails={[
                "Distributed system design using microservices or modular monoliths.",
                "High-security authentication (OAuth2, JWT, Multi-factor auth) implementations.",
                "Real-time data synchronization using WebSockets and event-driven logic.",
                "Automated testing suites (Unit, Integration, E2E) ensuring zero-regressions.",
                "Containerization with Docker for consistent environment parity."
            ]}
            procedures={[
                "Architecture Planning: Designing the skeleton for multi-year stability.",
                "Core Development: Building the business logic with zero-trust protocols.",
                "Security Auditing: Penetration testing and vulnerability assessment.",
                "Performance Tuning: Optimizing database queries and memory allocation.",
                "Legacy Integration: Connecting new systems with your existing infrastructure."
            ]}
            suitability={[
                "Complex Logic: Best for businesses with unique, custom-tailored workflows.",
                "Security Priority: Essential for handling sensitive user or financial data.",
                "Enterprise Growth: Designed to evolve as your organizational complexity increases.",
                "Cost-Efficient: Optimized code that reduces long-term maintenance overhead.",
                "Technical Excellence: Managed by senior engineers with deep stack expertise."
            ]}
            icon={Cpu}
        />
    );
};

export default SoftwareEngPage;
