import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { User, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan') || 'standard';
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    institution: ''
  });

  const roles = [
    { id: 'student', label: 'Student / Employee', icon: <User size={24} />, color: '#10b981' },
    { id: 'manager', label: 'Manager / Principal', icon: <Users size={24} />, color: '#3b82f6' },
    { id: 'admin', label: 'Organization Admin', icon: <Shield size={24} />, color: '#8b5cf6' }
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else {
      // Logic would send email here
      setStep(3);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#030712', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 5%' }}>
      <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', padding: '60px' }}>
        
        {step < 3 && (
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900' }}>Account <span style={{ color: '#22d3ee' }}>Registration</span></h2>
            <p style={{ color: '#9ca3af', marginTop: '8px' }}>Provisioning access for {plan.toUpperCase()} tier</p>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: '#22d3ee', letterSpacing: '1px' }}>SELECT OPERATIONAL ROLE</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '20px' }}>
              {roles.map(r => (
                <div 
                  key={r.id}
                  onClick={() => setFormData({...formData, role: r.id})}
                  style={{ 
                    padding: '24px', 
                    borderRadius: '16px', 
                    background: formData.role === r.id ? `${r.color}15` : 'rgba(255,255,255,0.02)',
                    border: formData.role === r.id ? `2px solid ${r.color}` : '1px solid rgba(255,255,255,0.05)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    transition: '0.3s'
                  }}
                >
                  <div style={{ color: r.color }}>{r.icon}</div>
                  <span style={{ fontWeight: '700' }}>{r.label}</span>
                </div>
              ))}
            </div>
            <button 
              disabled={!formData.role}
              className="btn-step"
              style={{ padding: '18px', borderRadius: '12px', background: formData.role ? '#22d3ee' : '#1f2937', color: '#030712', fontWeight: '900', border: 'none', cursor: 'pointer' }}
            >
              CONTINUE TO DETAILS
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="form-group">
              <input 
                placeholder="Full Name" 
                className="custom-input" 
                required 
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Operational Email Address" 
                className="custom-input" 
                required 
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                placeholder="Institution / Company Name" 
                className="custom-input" 
                required 
                onChange={e => setFormData({...formData, institution: e.target.value})}
              />
            </div>
            <button className="btn-step" style={{ padding: '18px', borderRadius: '12px', background: '#22d3ee', color: '#030712', fontWeight: '900', border: 'none', cursor: 'pointer' }}>
              COMPLETE PROVISIONING
            </button>
          </form>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={80} color="#10b981" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '16px' }}>Provisioning <span style={{ color: '#10b981' }}>Complete.</span></h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.6, marginBottom: '40px' }}>
              Your unique User ID and Password have been generated and transmitted to <strong>{formData.email}</strong>.<br />
              Please check your inbox (and spam folder) to proceed with the secure vault access.
            </p>
            <button 
              onClick={() => navigate('/pricing')}
              className="btn-step" 
              style={{ padding: '20px 40px', borderRadius: '12px', background: '#22d3ee', color: '#030712', border: 'none', fontWeight: '800', cursor: 'pointer' }}
            >
              EXPLORE SUBSCRIPTION PLANS <ArrowRight size={20} style={{ marginLeft: '12px', verticalAlign: 'middle' }} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(40px);
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .custom-input {
          width: 100%;
          padding: 18px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: #fff;
          font-family: inherit;
        }
        .btn-step:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
      `}</style>
    </div>
  );
};

export default Register;
