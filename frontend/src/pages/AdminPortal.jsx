import { Shield, Fingerprint, Database, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TicketHub from '../components/TicketHub';

const AdminPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '40px', padding: '40px', background: 'radial-gradient(ellipse at top left, rgba(69, 97, 236, 0.15), transparent 60%)', borderRadius: '24px', border: '1px solid rgba(69, 97, 236, 0.2)' }} className="hero-card">
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }} className="text-gradient-primary">Administrator Controls</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', lineHeight: '1.6' }}>
          Welcome to the VexioGate Identity Network structure. As an Admin, you are entrusted with maintaining the integrity, provisioning, and hierarchical security definitions of the workforce mesh. Your actions define the zero-trust boundaries operations follow.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        
        <div className="glass-panel animate-fade-in-delay-1 hero-card" style={{ padding: '32px', cursor: 'pointer' }} onClick={() => navigate('/users')}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(69, 97, 236, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--primary)' }}>
            <Fingerprint size={28} />
          </div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Identity Vault</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>Provision, revoke, and manage the cryptographic profiles of users.</p>
          <div style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
            Enter Vault <ArrowRight size={16} />
          </div>
        </div>

        <div className="glass-panel animate-fade-in-delay-2 hero-card" style={{ padding: '32px', cursor: 'pointer' }} onClick={() => navigate('/audit')}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--success)' }}>
            <Database size={28} />
          </div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Forensic Audit Trail</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>Immutable logs of all digital movements across the application surface.</p>
          <div style={{ color: 'var(--success)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
            View Logs <ArrowRight size={16} />
          </div>
        </div>

        <div className="glass-panel animate-fade-in-delay-3 hero-card" style={{ padding: '32px', cursor: 'pointer' }} onClick={() => navigate('/health')}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#f87171' }}>
            <Lock size={28} />
          </div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>System Health</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>Monitor active sessions, database connections, and operational load metrics.</p>
          <div style={{ color: '#f87171', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
            Check Health <ArrowRight size={16} />
          </div>
        </div>
      </div>

      <TicketHub />
    </div>
  );
};

export default AdminPortal;
