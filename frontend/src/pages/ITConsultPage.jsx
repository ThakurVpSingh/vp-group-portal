import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { Lightbulb } from 'lucide-react';

const ITConsultPage = () => {
    return (
        <PageTemplate 
            title="IT Consultation"
            subtitle="Strategic Digital Transformation"
            description="We guide your business through the complexities of modern technology. From architecture reviews to long-term digital strategy, we ensure your tech stack is a competitive advantage."
            techDetails={[
                "Tech Stack Evaluation: Analyzing your current tools for efficiency and cost.",
                "Cloud Migration Strategy: Moving from local servers to scalable cloud meshes.",
                "Security Posture Assessment: Identifying vulnerabilities in your digital perimeter.",
                "Scalability Roadmapping: Planning for 10x growth without technical debt.",
                "Performance Optimization: Tuning systems for maximum operational speed."
            ]}
            procedures={[
                "Initial Discovery: Understanding your business goals and current pain points.",
                "Technical Audit: A deep dive into your existing codebase and infrastructure.",
                "Strategy Formulation: Creating a tailored roadmap with clear milestones.",
                "Implementation Support: Guiding your team through the recommended changes.",
                "Continuous Review: Quarterly check-ins to adapt the strategy to new trends."
            ]}
            suitability={[
                "Expanding Businesses: When your current tech is holding your growth back.",
                "Cost-Conscious Ventures: Optimizing your cloud and tool spend.",
                "Modernization Needs: Moving away from legacy systems to high-perf alternatives.",
                "Strategic Planning: Getting expert advice before making big tech investments.",
                "Affordable Expertise: Senior-level consulting at manageable project rates."
            ]}
            icon={Lightbulb}
        />
    );
};

export default ITConsultPage;
