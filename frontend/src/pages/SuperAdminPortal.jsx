import { ShieldAlert, Globe, Server, UserCheck, Activity, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuperAdminPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '40px', padding: '40px', background: 'radial-gradient(ellipse at top left, rgba(239, 68, 68, 0.15), transparent 70%)', borderRadius: '24px', border: '1px solid rgba(239, 68, 68, 0.2)' }} className="hero-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <ShieldAlert size={48} color="#f87171" className="animate-glow" />
          <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: 0, color: '#f87171', letterSpacing: '-1px' }}>GLOBAL COMMAND</h1>
        </div>
        <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.6', fontWeight: '500' }}>
          Omniscient view of the VexioGate infrastructure. You have unparalleled access superseding all lower-tiered hierarchies. Monitor all portals, enforce compliance rules, and dictate security policies across the firm.
        </p>
      </div>

      <h2 style={{ marginBottom: '24px', fontSize: '1.4rem' }} className="text-gradient">Portal Summary Overview</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        
        {/* Admin Portal Summarization */}
        <div className="glass-panel animate-fade-in-delay-1 hero-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--primary)' }}>
            <Server size={24} />
            <h3 style={{ fontSize: '1.2rem' }}>Admin Tier</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', minHeight: '60px' }}>
            Responsible for managing identities, assigning roles, and auditing forensic data via immutable logs. 
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span style={{color: 'var(--text-muted)'}}>Active Admins:</span> <span>Operational</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-muted)'}}>Audits Recorded:</span> <span style={{color: 'var(--success)'}}>Real-time Sync</span></div>
          </div>
        </div>

        {/* Manager Portal Summarization */}
        <div className="glass-panel animate-fade-in-delay-2 hero-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: '#8b5cf6' }}>
            <UserCheck size={24} />
            <h3 style={{ fontSize: '1.2rem' }}>Manager Tier</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', minHeight: '60px' }}>
            Focuses on team compliance, orchestrating leave approvals, and ensuring daily operational workforce capacity.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span style={{color: 'var(--text-muted)'}}>Capacity Rules:</span> <span>Enforced</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-muted)'}}>Pending Approvals:</span> <span style={{color: '#f87171'}}>-</span></div>
          </div>
        </div>

        {/* Employee Portal Summarization */}
        <div className="glass-panel animate-fade-in-delay-3 hero-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--success)' }}>
            <Award size={24} />
            <h3 style={{ fontSize: '1.2rem' }}>Employee Tier</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', minHeight: '60px' }}>
            The foundation of GuardRail. Secure authentication, direct attendance check-ins, and personal leave routing.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span style={{color: 'var(--text-muted)'}}>Portals Linked:</span> <span>100%</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-muted)'}}>System Health:</span> <span style={{color: 'var(--success)'}}>Optimal</span></div>
          </div>
        </div>
      </div>

      <div className="glass-panel animate-fade-in-delay-3 hero-card" style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}><Globe size={24} color="#f87171" className="animate-glow" /> Master Directory Node</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Access the unified directory containing all structural and organizational hierarchies.</p>
        </div>
        <button onClick={() => navigate('/users')} className="btn" style={{ background: '#f87171', color: '#fff', border: 'none', padding: '12px 24px' }}>
          Initialize Management <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SuperAdminPortal;
