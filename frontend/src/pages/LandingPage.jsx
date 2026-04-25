import { useEffect } from 'react';
import { Shield, ChevronRight, Server, Database, CheckCircle, Mail, Phone, MessageSquare, Anchor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "VexioGate | Next-Gen IAM";
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)', overflowX: 'hidden' }}>
      
      {/* Navigation Bar */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(10, 12, 16, 0.8)', borderBottom: '1px solid var(--bg-border)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(12px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={24} color="white" />
          </div>
          <span style={{ fontWeight: '800', fontSize: '1.4rem', letterSpacing: '-0.5px' }} className="text-gradient">VEXIOGATE</span>
        </div>
        <div className="desktop-only" style={{ display: 'flex', gap: '24px', alignItems: 'center', fontSize: '0.95rem', fontWeight: '600' }}>
          <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Focus</a>
          <a href="#workflow" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Workflow</a>
          <a href="#pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Pricing</a>
          <button onClick={() => navigate('/login')} className="btn btn-primary" style={{ padding: '10px 24px', borderRadius: '8px' }}>Access Portal</button>
        </div>
        <div className="mobile-only">
          <button onClick={() => navigate('/login')} className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.8rem' }}>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '100px 20px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(69, 97, 236, 0.15) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(69, 97, 236, 0.1)', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '700', marginBottom: '24px' }}>
            <Server size={16} /> ENTERPRISE IDENTITY ORCHESTRATION
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-2px' }}>
            Absolute <span className="text-gradient-primary">Zero-Trust</span> <br/>Workforce Control.
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 40px' }}>
            VexioGate is a high-fidelity identity access management (IAM) and Operations platform. We provide unified synchronization for modern enterprises through a continuous cybersecurity mesh.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/')} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '14px 32px' }}>Explore VP Group <ChevronRight size={20}/></button>
            <button onClick={() => navigate('/help/contact')} className="btn" style={{ fontSize: '1.1rem', padding: '14px 32px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>Inquiry & Support</button>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" style={{ padding: '80px 20px', background: 'var(--bg-card)', borderTop: '1px solid var(--bg-border)', borderBottom: '1px solid var(--bg-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }}>Operational Workflow</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>How the VexioGate platform secures and synchronizes your organizational nodes.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div className="hero-card glass-panel" style={{ padding: '32px' }}>
              <div style={{ color: 'var(--success)', marginBottom: '20px' }}><CheckCircle size={36} /></div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>1. Provisioning</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Admins utilize the VexioGate Vault to provision secure user credentials with granular role assignments and strict permissions.</p>
            </div>
            <div className="hero-card glass-panel" style={{ padding: '32px' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '20px' }}><Shield size={36} /></div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>2. Secure Portals</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Upon authentication, nodes are routed to specialized dashboards. Managers track telemetry while employees manage attendance grids.</p>
            </div>
            <div className="hero-card glass-panel" style={{ padding: '32px' }}>
              <div style={{ color: '#8b5cf6', marginBottom: '20px' }}><Database size={36} /></div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>3. Audit Trail</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Every digital action is indexed in the forensic audit trail, ensuring absolute accountability and system transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section id="pricing" style={{ padding: '80px 20px', background: 'var(--bg-card)', borderTop: '1px solid var(--bg-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }}>Subscription Tiers</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Scale your enterprise architecture with VexioGate specialized provisioning.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '12px' }}>Standard Node</h3>
              <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>$499<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="var(--primary)" /> 500 Employee Slots</li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="var(--primary)" /> 10 Manager Terminals</li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="var(--primary)" /> Standard Encryption</li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%' }}>Deploy Node</button>
            </div>

            <div className="glass-panel" style={{ padding: '40px', border: '1px solid var(--primary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>ENTERPRISE</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '12px' }}>Global Mesh</h3>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '24px' }}>$1,899<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="var(--primary)" /> Unlimited Access Points</li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="var(--primary)" /> Custom Deployment Hub</li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="var(--primary)" /> Forensic Audit Level 3</li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} color="var(--primary)" /> 24/7 Priority Mesh Support</li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(90deg, #4561ec, #8b5cf6)' }}>Deploy Mesh</button>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
          <div>
              <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '24px', letterSpacing: '-1px' }}>Engineered By <br/><span className="text-gradient">VEXIOGATE GLOBAL</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                VexioGate is a leading security infrastructure tailored for high-compliance environments, ensuring your digital workforce remains synchronized and secure.
              </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Phone size={24} color="var(--primary)"/></div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Global Support Line</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+1 (800) VEXIO-99</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Mail size={24} color="var(--primary)"/></div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Encrypted Email Matrix</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>support@vexiogate.network</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><MessageSquare size={24} color="var(--primary)"/></div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Real-time Terminal Chat</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Secure session chat for operational nodes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '24px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Anchor size={20} color="var(--primary)" /> Corporate Footprint
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
              <li><strong>Headquarter Base:</strong> VexioGate Global Mesh Hub</li>
              <li><strong>Global Branches:</strong> US Server Farm, London Sector, Asian-Pacific Hub</li>
              <li><strong>Active Clusters:</strong> 150+ Enterprise Institutions currently scaling our systems.</li>
              <li style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--bg-border)' }}>
                <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Privacy Policy <ChevronRight size={16}/></a>
              </li>
              <li>
                <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Security Protocols <ChevronRight size={16}/></a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default LandingPage;
