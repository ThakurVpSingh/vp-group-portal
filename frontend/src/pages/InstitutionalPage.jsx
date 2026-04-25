import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { GraduationCap } from 'lucide-react';

const InstitutionalPage = () => {
    return (
        <PageTemplate 
            title="Institutional Clients"
            subtitle="Large-Scale Management Mesh"
            description="We provide comprehensive management software for educational institutions, government bodies, and large-scale NGOs, focusing on hierarchical gatekeeping and secure data oversight."
            techDetails={[
                "Hierarchical RBAC: Complex role-based access for admins, staff, and members.",
                "Bulk Data Processing: Handling thousands of records with zero-latency.",
                "Compliance Frameworks: Meeting strict institutional and legal data standards.",
                "Reporting Engines: Automated generation of operational and financial audits.",
                "Integration Hubs: Connecting with national and regional data repositories."
            ]}
            procedures={[
                "Needs Assessment: Mapping the complex hierarchy of the institution.",
                "Framework Customization: Adapting our VexioGate mesh to institutional rules.",
                "Secure Onboarding: Mass-migration of records with 100% data integrity.",
                "Staff Training: Multi-tier workshops for different access levels.",
                "Phased Rollout: Gradual implementation to ensure operational continuity."
            ]}
            suitability={[
                "Large Scale: Optimized for organizations with 500+ active members.",
                "Security Mandates: For institutions requiring absolute Zero-Trust Security Protocols.",
                "Cost Efficiency: Reducing administrative overhead through automation.",
                "Long-Term Support: Multi-year technical commitment for institutional stability.",
                "Reliable Auditing: Automated trails for transparency and accountability."
            ]}
            icon={GraduationCap}
            showContact={false}
        />
    );
};

export default InstitutionalPage;
    
