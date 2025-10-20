import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', name: 'Về tôi' },
    { id: 'skills', name: 'Kỹ năng' },
    { id: 'experience', name: 'Kinh nghiệm' },
    { id: 'education', name: 'Học vấn' },
  ];

  const skills = [
    {
      category: 'Frontend Development',
      items: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'UI/UX Principles'],
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express.js', 'SQL Server', 'RESTful APIs', 'Authentication (OAuth)'],
    },
    {
      category: 'Game Development',
      items: ['Unity 2D', 'C#', 'Animator', 'Tilemap', 'Pixel Art'],
    },
    {
      category: 'Tools & Others',
      items: ['Git/GitHub', 'VS Code', 'Vite', 'npm/yarn', 'Postman', 'Figma'],
    },
  ];

  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'FigureVerse Project',
      duration: '03/2024',
      description: 'Phát triển ứng dụng thương mại điện tử chuyên biệt cho mô hình figure, anime. Xây dựng cả Frontend (ReactJS) và Backend (Node.js/Express), quản lý cơ sở dữ liệu SQL Server và tích hợp các API bên thứ 3.',
      responsibilities: [
        'Phân tích và thiết kế hệ thống',
        'Phát triển Frontend với ReactJS, React Router, Lucide React Icons',
        'Phát triển Backend với Node.js, Express Framework',
        'Thiết kế và quản lý cơ sở dữ liệu SQL Server Management Studio',
        'Tối ưu code và sửa lỗi',
        'Tích hợp các API bên thứ 3 (Google, Facebook, TikTok login)',
        'Tích hợp thanh toán VNPay, Momo'
      ],
    },
    {
      id: 2,
      title: 'Game Developer',
      company: 'Chaos Swarm Project',
      duration: '01/2024 - 02/2024',
      description: 'Phát triển game 2D phong cách pixel thể loại hành động – phiêu lưu. Người chơi điều khiển nhân vật chiến đấu với quái, vượt màn, tích lũy kinh nghiệm, nâng cấp kỹ năng.',
      responsibilities: [
        'Thiết kế chức năng game',
        'Lập trình điều khiển nhân vật',
        'Tấn công, vượt màn',
        'Xử lý quái vật và hệ thống item'
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Công nghệ thông tin',
      university: 'TRƯỜNG ĐẠI HỌC CÔNG NGHỆ TP. HCM',
      duration: '2022 - 2025',
      gpa: '3.5/4.0',
      details: [
        'Chuyên ngành: Công Nghệ Phần Mềm',
        'Đồ án chuyên ngành: Hệ thống quản lý xem phim trực tuyến',
        'Các môn học nổi bật: Cấu trúc dữ liệu & giải thuật, Lập trình hướng đối tượng, Cơ sở dữ liệu, Phát triển ứng dụng web.'
      ],
    },
  ];

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f7f3f0'}}>

      {/* Hero Section */}
      <section style={{padding: '80px 0 64px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#3e2723', marginBottom: '16px'}}>Giới thiệu bản thân</h1>
            <p style={{fontSize: '18px', color: '#5d4037', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
              Tìm hiểu về hành trình phát triển của tôi, từ Game Development đến Full Stack Web Development.
              Khám phá kỹ năng, kinh nghiệm và đam mê của tôi trong lập trình.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{padding: '64px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {/* Main Content */}
            <div>
              {/* Tab Navigation */}
              <div style={{display: 'flex', gap: '16px', marginBottom: '32px', justifyContent: 'center'}}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: activeTab === tab.id ? '#8b4513' : '#f5e6d3',
                      color: activeTab === tab.id ? 'white' : '#8b4513',
                      boxShadow: activeTab === tab.id ? '0 4px 12px rgba(139, 69, 19, 0.3)' : 'none'
                    }}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* About Tab */}
              {activeTab === 'about' && (
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 10px 15px -3px rgba(139, 69, 19, 0.1)',
                  border: '1px solid #e5d5c8'
                }}>
                  <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#3e2723', marginBottom: '24px'}}>Về tôi</h2>
                  <p style={{fontSize: '18px', color: '#5d4037', marginBottom: '24px', lineHeight: '1.6'}}>
                    Tôi là một lập trình viên Full Stack trong lĩnh vực phát triển phần mềm. 
                    Tôi có đam mê tạo ra những sản phẩm digital chất lượng cao và luôn tìm kiếm những thử thách mới.
                  </p>
                  <p style={{fontSize: '18px', color: '#5d4037', marginBottom: '32px', lineHeight: '1.6'}}>
                    Với kinh nghiệm đa dạng từ Game Development đến Web Application, tôi có thể giúp bạn biến ý tưởng thành hiện thực 
                    thông qua các giải pháp công nghệ hiện đại và hiệu quả.
                  </p>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px'}}>
                    <div style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      padding: '20px',
                      border: '1px solid #e5d5c8'
                    }}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#f3e8ff',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{fontSize: '20px'}}>🎮</span>
                        </div>
                        <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#3e2723', margin: 0}}>Game Developer</h3>
                      </div>
                      <p style={{fontSize: '14px', color: '#5d4037', margin: 0}}>Unity 2D, C#</p>
                    </div>
                    <div style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      padding: '20px',
                      border: '1px solid #e5d5c8'
                    }}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#e0e7ff',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{fontSize: '20px'}}>💻</span>
                        </div>
                        <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#3e2723', margin: 0}}>Full Stack</h3>
                      </div>
                      <p style={{fontSize: '14px', color: '#5d4037', margin: 0}}>React, Node.js</p>
                    </div>
                    <div style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      padding: '20px',
                      border: '1px solid #e5d5c8'
                    }}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#fce7f3',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{fontSize: '20px'}}>🎨</span>
                        </div>
                        <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#3e2723', margin: 0}}>UI/UX</h3>
                      </div>
                      <p style={{fontSize: '14px', color: '#5d4037', margin: 0}}>Design, Responsive</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 10px 15px -3px rgba(139, 69, 19, 0.1)',
                  border: '1px solid #e5d5c8'
                }}>
                  <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#3e2723', marginBottom: '24px'}}>Kỹ năng chuyên môn</h2>
                  <p style={{fontSize: '18px', color: '#5d4037', marginBottom: '32px'}}>
                    Các công nghệ và kỹ năng tôi sử dụng để tạo ra những sản phẩm tuyệt vời
                  </p>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
                    {skills.map((skillGroup, index) => (
                      <div key={index} style={{
                        backgroundColor: '#faf7f4',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #e5d5c8'
                      }}>
                        <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#3e2723', marginBottom: '16px'}}>{skillGroup.category}</h3>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
                          {skillGroup.items.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              style={{
                                padding: '8px 16px',
                                backgroundColor: '#f5e6d3',
                                color: '#8b4513',
                                borderRadius: '9999px',
                                fontSize: '14px',
                                fontWeight: '500'
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 10px 15px -3px rgba(139, 69, 19, 0.1)',
                  border: '1px solid #e5d5c8'
                }}>
                  <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#3e2723', marginBottom: '24px'}}>Kinh nghiệm làm việc</h2>
                  <p style={{fontSize: '18px', color: '#5d4037', marginBottom: '32px'}}>
                    Hành trình phát triển sự nghiệp và các dự án đã thực hiện
                  </p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                    {experiences.map((exp) => (
                      <div key={exp.id} style={{
                        borderLeft: '4px solid #8b4513',
                        paddingLeft: '24px',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          left: '-8px',
                          top: '16px',
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#8b4513',
                          borderRadius: '50%'
                        }}></div>
                        <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#3e2723', marginBottom: '4px'}}>{exp.title}</h3>
                        <p style={{fontSize: '16px', color: '#5d4037', fontWeight: '600', marginBottom: '4px'}}>{exp.company}</p>
                        <p style={{fontSize: '14px', color: '#6d4c41', marginBottom: '12px'}}>{exp.duration}</p>
                        <p style={{fontSize: '16px', color: '#5d4037', marginBottom: '16px', lineHeight: '1.6'}}>{exp.description}</p>
                        <ul style={{color: '#5d4037', fontSize: '14px', paddingLeft: '20px', margin: 0}}>
                          {exp.responsibilities.map((res, index) => (
                            <li key={index} style={{marginBottom: '4px'}}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 10px 15px -3px rgba(139, 69, 19, 0.1)',
                  border: '1px solid #e5d5c8'
                }}>
                  <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#3e2723', marginBottom: '24px'}}>Học vấn</h2>
                  <p style={{fontSize: '18px', color: '#5d4037', marginBottom: '32px'}}>
                    Quá trình học tập và rèn luyện kiến thức chuyên môn
                  </p>
                  
                  {/* Education Section */}
                  <div style={{marginBottom: '48px'}}>
                    <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#3e2723', marginBottom: '24px'}}>Học vấn chính thức</h3>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                      {education.map((edu) => (
                        <div key={edu.id} style={{
                          borderLeft: '4px solid #d2691e',
                          paddingLeft: '24px',
                          position: 'relative'
                        }}>
                          <div style={{
                            position: 'absolute',
                            left: '-8px',
                            top: '16px',
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#d2691e',
                            borderRadius: '50%'
                          }}></div>
                          <h4 style={{fontSize: '20px', fontWeight: 'bold', color: '#3e2723', marginBottom: '4px'}}>{edu.degree}</h4>
                          <p style={{fontSize: '16px', color: '#5d4037', fontWeight: '600', marginBottom: '4px'}}>{edu.university}</p>
                          <p style={{fontSize: '14px', color: '#6d4c41', marginBottom: '12px'}}>{edu.duration}</p>
                          <ul style={{color: '#5d4037', fontSize: '14px', paddingLeft: '20px', margin: 0}}>
                            {edu.details.map((detail, index) => (
                              <li key={index} style={{marginBottom: '4px'}}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certificates Section */}
                  <div>
                    <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#3e2723', marginBottom: '24px'}}>Chứng chỉ</h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px'}}>
                      {/* IBM Certificates */}
                      <div style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '12px',
                        padding: '20px',
                        border: '1px solid #e5d5c8'
                      }}>
                        <h4 style={{fontSize: '18px', fontWeight: 'bold', color: '#3e2723', marginBottom: '16px'}}>IBM Certificates (12/2024)</h4>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>📜</span>
                            <a href="https://courses.cognitiveclass.ai/certificates/1aeb66fe1ebe492180c0a5f46d7af44b" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              Accessing Hadoop Data Using Hive
                            </a>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>📜</span>
                            <a href="https://courses.cognitiveclass.ai/certificates/e2f12a16ff274b5bba9071f051d5422e" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              Moving Data into Hadoop
                            </a>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>📜</span>
                            <a href="https://courses.cognitiveclass.ai/certificates/8c5e98ceed7b4cb3977b83718666dcf4" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              Hadoop 101
                            </a>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>📜</span>
                            <a href="https://courses.cognitiveclass.ai/certificates/e4abdfa9124f4cba8b1825ccedaba260" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              MapReduce and YARN
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Cisco Certificates */}
                      <div style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '12px',
                        padding: '20px',
                        border: '1px solid #e5d5c8'
                      }}>
                        <h4 style={{fontSize: '18px', fontWeight: 'bold', color: '#3e2723', marginBottom: '16px'}}>Cisco Certificates</h4>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>🏆</span>
                            <a href="https://www.credly.com/badges/7d2968aa-d8ef-4dd8-bdb2-c239b832562b/public_url" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              Data Science Foundations - Level 1 (12/2024)
                            </a>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>🌐</span>
                            <a href="https://www.credly.com/badges/75f3172c-f256-4a8c-9c08-5ea7539d7ed4/public_url" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              Networking Basics (9/2025)
                            </a>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>⚡</span>
                            <a href="https://www.credly.com/badges/ef5fb56a-3bd0-4233-970b-2015c6745613/public_url" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              JavaScript Essentials 1 (9/2025)
                            </a>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{fontSize: '12px', color: '#6d4c41'}}>⚡</span>
                            <a href="https://www.credly.com/badges/14cbf02d-c137-4cd9-8d5c-73dec07df1c9/public_url" target="_blank" rel="noopener noreferrer" style={{color: '#8b4513', textDecoration: 'none', fontSize: '14px'}}>
                              JavaScript Essentials 2 (10/2025)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #8b4513, #d2691e)'
      }}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 24px'}}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px'
          }}>
            Sẵn sàng làm việc cùng nhau?
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px'
          }}>
            Nếu bạn có một dự án thú vị hoặc muốn tìm hiểu thêm về tôi, đừng ngần ngại liên hệ!
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#8b4513',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontWeight: 'bold',
              fontSize: '18px',
              textDecoration: 'none',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;