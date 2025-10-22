import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/longdoan2k4', icon: 'G' },
    { name: 'LinkedIn', url: '#', icon: 'L' },
    { name: 'Email', url: 'mailto:hochau@gmail.com', icon: 'E' },
    { name: 'Phone', url: 'tel:+84123456789', icon: 'P' }
  ];

  const quickLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dự án', path: '/projects' },
    { name: 'Giới thiệu', path: '/blog' },
    { name: 'Liên hệ', path: '/contact' }
  ];

  return (
    <footer style={{backgroundColor: '#1e293b', color: 'white', padding: '48px 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px'}}>
          {/* About Section */}
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>Clau</span>
              </div>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>Hồ Châu Thành</span>
            </div>
            <p style={{color: '#94a3b8', margin: 0, lineHeight: '1.6'}}>
              Sinh viên đam mê lập trình với kinh nghiệm phát triển game 2D và ứng dụng web thương mại điện tử.
            </p>
            <div style={{display: 'flex', gap: '12px', marginTop: '16px'}}>
              {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                {...(link.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#374151',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  title={link.name}
                >
                  <span style={{fontSize: '14px', fontWeight: '500'}}>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>Liên kết</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  style={{color: '#94a3b8', textDecoration: 'none', fontSize: '14px'}}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>Liên hệ</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8'}}>
                <span style={{fontSize: '16px'}}>📧</span>
                <span style={{fontSize: '14px'}}>hochauthanh22062004@gmail.com</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8'}}>
                <span style={{fontSize: '16px'}}>📱</span>
                <span style={{fontSize: '14px'}}>+84 123 456 789</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8'}}>
                <span style={{fontSize: '16px'}}>📍</span>
                <span style={{fontSize: '14px'}}>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '32px',
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <p style={{color: '#94a3b8', margin: 0, fontSize: '14px'}}>
            © {currentYear} Hồ Châu Thành. Tất cả quyền được bảo lưu.
          </p>
          <div style={{display: 'flex', gap: '24px', fontSize: '14px'}}>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Chính sách bảo mật</a>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;