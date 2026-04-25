import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { Palette } from 'lucide-react';

const UIUXPage = () => {
    return (
        <PageTemplate 
            title="Custom UI/UX"
            subtitle="Cinematic & Intuitive Design"
            description="We bridge the gap between human psychology and digital interaction. Our designs are not just beautiful—they are engineered to guide users and maximize retention."
            techDetails={[
                "High-fidelity prototyping using Figma and Adobe Creative Suite.",
                "Design systems with component-driven architecture for consistency.",
                "Micro-interactions and animations for enhanced user engagement.",
                "User persona mapping and behavioral psychology integration.",
                "Accessibility compliance (WCAG) ensuring inclusive digital experiences."
            ]}
            procedures={[
                "User Research: Identifying your audience and their primary goals.",
                "Interaction Design: Mapping the flow and structure of the application.",
                "Visual Design: Crafting high-impact aesthetics and brand identities.",
                "Prototyping: Creating interactive models for stakeholder feedback.",
                "Developer Handoff: Ensuring pixel-perfect implementation of the design."
            ]}
            suitability={[
                "Brand Identity Focus: If you need to stand out with a premium visual feel.",
                "User Retention: Improving the usability of complex software portals.",
                "Conversion Optimization: Designing flows that lead naturally to action.",
                "High-Fidelity Projects: For those who want their app to feel 'next-gen'.",
                "Affordable Design: World-class UI/UX without the enterprise price tag."
            ]}
            icon={Palette}
        />
    );
};

export default UIUXPage;
