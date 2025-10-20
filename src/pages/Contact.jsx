import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hochau@gmail.com',
      link: 'mailto:hochau@gmail.com'
    },
    {
      icon: '📱',
      title: 'Điện thoại',
      value: '+84 123 456 789',
      link: 'tel:+84123456789'
    },
    {
      icon: '📍',
      title: 'Địa chỉ',
      value: 'TP. Hồ Chí Minh, Việt Nam',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/hochau',
      link: '#'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'G', url: 'https://github.com/longdoan2k4', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: 'L', url: '#', color: 'hover:bg-blue-700' },
    { name: 'Twitter', icon: 'T', url: '#', color: 'hover:bg-blue-400' },
    { name: 'Facebook', icon: 'F', url: '#', color: 'hover:bg-blue-600' }
  ];

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f8fafc'}}>

      {/* Header Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #3b82f6, #6366f1)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
          <h1 style={{fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '16px'}}>Liên hệ với tôi</h1>
          <p style={{fontSize: '20px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', margin: '0 auto'}}>
            Có dự án mới hoặc câu hỏi? Tôi luôn sẵn sàng lắng nghe và thảo luận về cách tôi có thể giúp bạn.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{padding: '64px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px'}}>
            {/* Contact Form */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '24px'}}>Gửi tin nhắn</h2>
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
                  <div>
                    <label htmlFor="name" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="Nhập email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                    Chủ đề *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="Nhập chủ đề"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
                    Tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      resize: 'vertical'
                    }}
                    placeholder="Nhập tin nhắn của bạn"
                  />
                </div>
                
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
              <div>
                <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '24px'}}>Thông tin liên hệ</h2>
                <p style={{fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginBottom: '32px'}}>
                  Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội hợp tác hoặc bất kỳ câu hỏi nào bạn có. 
                  Hãy liên hệ với tôi qua bất kỳ kênh nào thuận tiện nhất.
                </p>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#f1f5f9',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{fontSize: '24px'}}>{info.icon}</span>
                    </div>
                    <div>
                      <h3 style={{fontWeight: '600', color: '#1e293b', marginBottom: '4px'}}>{info.title}</h3>
                  <a 
                    href={info.link}
                    {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        style={{
                          color: '#3b82f6',
                          textDecoration: 'none',
                          fontSize: '16px',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '16px'}}>Kết nối với tôi</h3>
                <div style={{display: 'flex', gap: '16px'}}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      {...(social.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#64748b',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e2e8f0'
                      }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{padding: '64px 0', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#1e293b', textAlign: 'center', marginBottom: '48px'}}>Câu hỏi thường gặp</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>
                  Thời gian phản hồi trung bình là bao lâu?
                </h3>
                <p style={{color: '#64748b', lineHeight: '1.6'}}>
                  Tôi thường phản hồi trong vòng 24 giờ. Nếu dự án khẩn cấp, hãy gọi điện trực tiếp.
                </p>
              </div>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>
                  Bạn có nhận dự án freelance không?
                </h3>
                <p style={{color: '#64748b', lineHeight: '1.6'}}>
                  Có, tôi sẵn sàng thảo luận về các dự án freelance phù hợp với chuyên môn của mình.
                </p>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>
                  Các loại dự án nào bạn thường nhận?
                </h3>
                <p style={{color: '#64748b', lineHeight: '1.6'}}>
                  Web applications, game development, UI/UX design, và các dự án full-stack.
                </p>
              </div>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>
                  Bạn có cung cấp dịch vụ tư vấn không?
                </h3>
                <p style={{color: '#64748b', lineHeight: '1.6'}}>
                  Có, tôi cung cấp dịch vụ tư vấn về công nghệ, kiến trúc hệ thống và best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #3b82f6, #6366f1)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px'
          }}>
            Sẵn sàng bắt đầu dự án?
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Hãy liên hệ với tôi ngay hôm nay để thảo luận về dự án của bạn và cách tôi có thể giúp bạn đạt được mục tiêu.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
            <a 
              href="mailto:hochau@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: 'white',
                color: '#3b82f6',
                fontWeight: '600',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              Gửi email ngay
            </a>
            <a 
              href="tel:+84123456789"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                border: '2px solid white',
                color: 'white',
                fontWeight: '600',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              Gọi điện thoại
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;