import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Game 2D Pixel - Chaos Swarm',
      year: '2024',
      icon: '🎮',
      description: 'Xây dựng game 2D phong cách pixel thể loại hành động – phiêu lưu, người chơi điều khiển nhân vật chiến đấu với quái, vượt màn, tích lũy kinh nghiệm, nâng cấp kỹ năng.',
      role: 'Lập trình game, thiết kế nhân vật/quái vật, thiết kế gameplay và UI',
      technologies: ['Unity', 'C#', 'Animator', 'Tilemap', 'GitHub Desktop', 'VS Code'],
      features: [
        'Thiết kế chức năng game',
        'Lập trình điều khiển nhân vật',
        'Tấn công, vượt màn',
        'Xử lý quái vật và hệ thống item'
      ],
      status: 'Hoàn thành',
      demo: '#',
      github: 'https://github.com/longdoan2k4/GameDoAn'
    },
    {
      id: 2,
      title: 'Web Bán Mô Hình FigureVerse',
      year: '2024',
      icon: '🛒',
      description: 'Website Bán Mô Hình FigureVerse - Ứng dụng thương mại điện tử chuyên biệt cho việc mua bán các loại mô hình như figure, mô hình anime. Hệ thống hỗ trợ quản lý sản phẩm, giỏ hàng, thanh toán, đánh giá sản phẩm và phân quyền người dùng.',
      role: 'Lập trình viên Full Stack',
      technologies: ['ReactJS', 'Node.js', 'Express', 'SQL Server', 'OAuth', 'VNPay', 'Momo'],
      features: [
        'Phân tích và thiết kế hệ thống',
        'Phát triển Frontend với ReactJS',
        'Phát triển Backend với Node.js/Express',
        'Thiết kế và quản lý cơ sở dữ liệu SQL Server',
        'Tích hợp các API bên thứ 3 (Google, Facebook, TikTok login)',
        'Tích hợp thanh toán VNPay, Momo'
      ],
      status: 'Hoàn thành',
      demo: '#',
      github: 'https://github.com/Claudeyami/WebsiteFigureVerse'
    }
  ];

  const categories = ['Tất cả', 'Game Development', 'Full Stack'];
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredProjects = activeCategory === 'Tất cả' 
    ? projects 
    : projects.filter(project => {
        if (activeCategory === 'Game Development') return project.technologies.includes('Unity');
        if (activeCategory === 'Full Stack') return project.technologies.includes('Node.js');
        return true;
      });

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f8fafc'}}>
      {/* Header Section */}
      <section style={{padding: '80px 0 64px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px'}}>Dự án của tôi</h1>
            <p style={{fontSize: 'clamp(16px, 2.5vw, 18px)', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
              Khám phá các dự án tôi đã thực hiện trong quá trình học tập, từ game development đến web applications. 
              Mỗi dự án đều thể hiện kỹ năng và đam mê của tôi trong lập trình.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{padding: '32px 0', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px'}}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: activeCategory === category ? '#6366f1' : '#f1f5f9',
                  color: activeCategory === category ? 'white' : '#64748b',
                  boxShadow: activeCategory === category ? '0 4px 12px rgba(99, 102, 241, 0.3)' : 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{padding: '64px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          {filteredProjects.length === 0 ? (
            <div style={{textAlign: 'center', padding: '64px 0'}}>
              <div style={{fontSize: '64px', marginBottom: '16px'}}>🔍</div>
              <h3 style={{fontSize: '24px', fontWeight: '600', color: '#64748b', marginBottom: '8px'}}>Không tìm thấy dự án</h3>
              <p style={{color: '#94a3b8'}}>Hãy thử chọn danh mục khác để xem thêm dự án.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div key={project.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    height: '200px',
                    background: index === 0 
                      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' 
                      : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{textAlign: 'center', color: 'white'}}>
                      <div style={{fontSize: '48px', marginBottom: '8px'}}>{project.icon}</div>
                      <h3 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>{project.title.split(' - ')[0]}</h3>
                    </div>
                  </div>
                  <div style={{padding: '24px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
                      <span style={{
                        backgroundColor: index === 0 ? '#e0e7ff' : '#f3e8ff',
                        color: index === 0 ? '#6366f1' : '#8b5cf6',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {index === 0 ? 'Game' : 'Web'}
                      </span>
                      <span style={{color: '#94a3b8', fontSize: '14px'}}>{project.year}</span>
                    </div>
                    <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '12px'}}>{project.title}</h3>
                    <p style={{color: '#64748b', marginBottom: '16px', lineHeight: '1.6'}}>{project.description}</p>
                    <div style={{marginBottom: '16px'}}>
                      <h4 style={{fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>Công nghệ sử dụng:</h4>
                      <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} style={{
                            backgroundColor: '#f1f5f9',
                            color: '#475569',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{marginBottom: '16px'}}>
                      <h4 style={{fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>Vai trò:</h4>
                      <p style={{color: '#64748b', fontSize: '14px', margin: 0}}>{project.role}</p>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                      <h4 style={{fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>Chức năng chính:</h4>
                      <ul style={{color: '#64748b', fontSize: '14px', paddingLeft: '20px', margin: 0}}>
                        {project.features.map((feature, idx) => (
                          <li key={idx} style={{marginBottom: '4px'}}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                      <a 
                        href={project.demo}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          backgroundColor: '#6366f1',
                          color: 'white',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          flex: '1 1 auto'
                        }}
                      >
                        🚀 Xem dự án
                      </a>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          border: '1px solid #d1d5db',
                          color: '#64748b',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          flex: '1 1 auto'
                        }}
                      >
                        📁 Mã nguồn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{padding: '64px 0', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div className="projects-stats">
            <div>
              <div style={{fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 'bold', color: '#6366f1', marginBottom: '8px'}}>{projects.length}+</div>
              <div style={{color: '#64748b'}}>Dự án hoàn thành</div>
            </div>
            <div>
              <div style={{fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '8px'}}>10+</div>
              <div style={{color: '#64748b'}}>Công nghệ sử dụng</div>
            </div>
            <div>
              <div style={{fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 'bold', color: '#ec4899', marginBottom: '8px'}}>2+</div>
              <div style={{color: '#64748b'}}>Năm học tập</div>
            </div>
            <div>
              <div style={{fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px'}}>100%</div>
              <div style={{color: '#64748b'}}>Đam mê lập trình</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 24px'}}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px'
          }}>
            Có ý tưởng dự án mới?
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 3vw, 20px)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Tôi luôn sẵn sàng thảo luận về các dự án mới và cách tôi có thể học hỏi thêm từ bạn.
          </p>
          <div className="cta-buttons">
            <Link 
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'white',
                color: '#6366f1',
                fontWeight: '600',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              Bắt đầu dự án
            </Link>
            <a 
              href="mailto:hochauthanh22062004@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                border: '2px solid white',
                color: 'white',
                fontWeight: '600',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              Gửi email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;