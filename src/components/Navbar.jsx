import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dự án', path: '/projects' },
    { name: 'Giới thiệu', path: '/blog' },
    { name: 'Liên hệ', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '16px 24px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* Logo */}
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>H</span>
            </div>
            <span style={{fontSize: '20px', fontWeight: 'bold', color: '#1e293b'}}>Hồ Châu Thành</span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActive(item.path) ? '#6366f1' : '#64748b',
                  textDecoration: 'none',
                  fontWeight: isActive(item.path) ? '600' : '500',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div style={{display: 'none'}}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                color: '#64748b',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <svg style={{width: '24px', height: '24px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            paddingTop: '16px',
            borderTop: '1px solid #e2e8f0'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActive(item.path) ? '#6366f1' : '#64748b',
                  textDecoration: 'none',
                  fontWeight: isActive(item.path) ? '600' : '500',
                  padding: '8px 0',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;