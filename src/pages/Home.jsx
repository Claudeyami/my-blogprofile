import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f8fafc'}}>
      {/* Hero Section */}
      <section style={{padding: '80px 0 64px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  backgroundColor: '#e0e7ff',
                  color: '#4338ca',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  👋 Xin chào, tôi là
                </div>
                <h1 style={{
                  fontSize: '60px',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  lineHeight: '1.1',
                  margin: 0
                }}>
                  Hồ Châu Thành
                </h1>
                <p style={{
                  fontSize: '20px',
                  color: '#475569',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Sinh viên đam mê lập trình với kinh nghiệm phát triển game 2D và ứng dụng web thương mại điện tử
                </p>
                <p style={{
                  fontSize: '18px',
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Đang học tập và phát triển kỹ năng về React.js, Node.js, Unity 2D. Có kinh nghiệm thực tế qua các dự án game và website bán hàng.
                </p>
              </div>
              <div style={{display: 'flex', gap: '16px'}}>
                <Link 
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 32px',
                    backgroundColor: '#6366f1',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Xem dự án của tôi
                </Link>
                <Link 
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 32px',
                    border: '2px solid #c7d2fe',
                    color: '#6366f1',
                    fontWeight: '600',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
            <div style={{position: 'relative'}}>
              <div style={{
                width: '100%',
                height: '384px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
              }}>
                <div style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.1)'}}></div>
                <div style={{textAlign: 'center', color: 'white', position: 'relative', zIndex: 10}}>
                  <div style={{fontSize: '64px', marginBottom: '16px'}}>👨‍💻</div>
                  <h3 style={{fontSize: '24px', fontWeight: 'bold', margin: 0}}>Developer</h3>
                </div>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite 0.3s'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{padding: '64px 0', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px'}}>Kỹ năng đang học tập</h2>
            <p style={{fontSize: '18px', color: '#64748b'}}>Các công nghệ và kỹ năng tôi đang phát triển để tạo ra những sản phẩm tuyệt vời</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#e0e7ff',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{color: '#6366f1', fontWeight: 'bold'}}>⚛️</span>
                </div>
                <h3 style={{fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: 0}}>Frontend</h3>
              </div>
              <p style={{color: '#64748b', fontSize: '14px', margin: 0}}>React.js, JavaScript, HTML5, CSS3, Tailwind CSS</p>
            </div>
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#dcfce7',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{color: '#16a34a', fontWeight: 'bold'}}>🖥️</span>
                </div>
                <h3 style={{fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: 0}}>Backend</h3>
              </div>
              <p style={{color: '#64748b', fontSize: '14px', margin: 0}}>Node.js, Express.js, SQL Server, RESTful APIs</p>
            </div>
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f3e8ff',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{color: '#8b5cf6', fontWeight: 'bold'}}>🎮</span>
                </div>
                <h3 style={{fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: 0}}>Game Dev</h3>
              </div>
              <p style={{color: '#64748b', fontSize: '14px', margin: 0}}>Unity 2D, C#, Animator, Tilemap</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{padding: '64px 0', backgroundColor: '#f8fafc'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px'}}>Dự án đã thực hiện</h2>
            <p style={{fontSize: '18px', color: '#64748b'}}>Các dự án tôi đã hoàn thành trong quá trình học tập và phát triển kỹ năng</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px'}}>
            {/* Project 1 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                height: '192px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{textAlign: 'center', color: 'white'}}>
                  <div style={{fontSize: '48px', marginBottom: '8px'}}>🎮</div>
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Chaos Swarm</h3>
                </div>
              </div>
              <div style={{padding: '24px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
                  <span style={{
                    backgroundColor: '#e0e7ff',
                    color: '#6366f1',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>Game</span>
                  <span style={{color: '#94a3b8', fontSize: '14px'}}>2024</span>
                </div>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '12px'}}>Game 2D Pixel - Chaos Swarm</h3>
                <p style={{color: '#64748b', marginBottom: '16px', lineHeight: '1.6'}}>Dự án game 2D đầu tiên của tôi, học cách sử dụng Unity và C# để tạo ra trải nghiệm chơi game thú vị.</p>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span style={{fontSize: '14px', color: '#94a3b8'}}>Unity, C#</span>
                  <Link to="/projects" style={{color: '#6366f1', fontWeight: '500', textDecoration: 'none'}}>Xem chi tiết →</Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                height: '192px',
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{textAlign: 'center', color: 'white'}}>
                  <div style={{fontSize: '48px', marginBottom: '8px'}}>🛒</div>
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>FigureVerse</h3>
                </div>
              </div>
              <div style={{padding: '24px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
                  <span style={{
                    backgroundColor: '#f3e8ff',
                    color: '#8b5cf6',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>Web</span>
                  <span style={{color: '#94a3b8', fontSize: '14px'}}>2024</span>
                </div>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '12px'}}>Web Bán Mô Hình FigureVerse</h3>
                <p style={{color: '#64748b', marginBottom: '16px', lineHeight: '1.6'}}>Dự án web thương mại điện tử đầu tiên, học cách xây dựng hệ thống bán hàng hoàn chỉnh với React và Node.js.</p>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span style={{fontSize: '14px', color: '#94a3b8'}}>React, Node.js</span>
                  <Link to="/projects" style={{color: '#6366f1', fontWeight: '500', textDecoration: 'none'}}>Xem chi tiết →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{padding: '64px 0', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'}}>
            <div>
              <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#1e293b', marginBottom: '24px'}}>Về tôi</h2>
              <p style={{fontSize: '18px', color: '#475569', lineHeight: '1.6', marginBottom: '24px'}}>
                Tôi là một sinh viên đam mê lập trình, đang học tập và phát triển kỹ năng trong lĩnh vực công nghệ thông tin. 
                Với niềm đam mê tạo ra những sản phẩm digital chất lượng cao, tôi luôn tìm kiếm những thử thách mới để học hỏi.
              </p>
              <p style={{fontSize: '18px', color: '#475569', lineHeight: '1.6', marginBottom: '32px'}}>
                Qua các dự án thực tế, tôi đã học được cách phát triển từ Game Development đến Web Application, 
                và luôn cố gắng áp dụng những kiến thức mới vào các dự án của mình.
              </p>
              <div style={{display: 'flex', gap: '16px'}}>
                <Link 
                  to="/blog"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 24px',
                    backgroundColor: '#6366f1',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '12px',
                    textDecoration: 'none'
                  }}
                >
                  Tìm hiểu thêm
                </Link>
                <Link 
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 24px',
                    border: '2px solid #c7d2fe',
                    color: '#6366f1',
                    fontWeight: '600',
                    borderRadius: '12px',
                    textDecoration: 'none'
                  }}
                >
                  Liên hệ
                </Link>
              </div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
              <div style={{textAlign: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
                <div style={{fontSize: '32px', marginBottom: '12px'}}>🎯</div>
                <h3 style={{fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>Mục tiêu</h3>
                <p style={{fontSize: '14px', color: '#64748b', margin: 0}}>Học tập và phát triển kỹ năng</p>
              </div>
              <div style={{textAlign: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
                <div style={{fontSize: '32px', marginBottom: '12px'}}>💡</div>
                <h3 style={{fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>Sáng tạo</h3>
                <p style={{fontSize: '14px', color: '#64748b', margin: 0}}>Luôn tìm kiếm giải pháp mới</p>
              </div>
              <div style={{textAlign: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
                <div style={{fontSize: '32px', marginBottom: '12px'}}>🚀</div>
                <h3 style={{fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>Hiệu quả</h3>
                <p style={{fontSize: '14px', color: '#64748b', margin: 0}}>Phát triển nhanh và ổn định</p>
              </div>
              <div style={{textAlign: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
                <div style={{fontSize: '32px', marginBottom: '12px'}}>🤝</div>
                <h3 style={{fontWeight: '600', color: '#1e293b', marginBottom: '8px'}}>Hợp tác</h3>
                <p style={{fontSize: '14px', color: '#64748b', margin: 0}}>Làm việc nhóm hiệu quả</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section: Java vs JavaScript */}
      <section className="blog-section" style={{
        padding: '40px 20px',
        background: 'linear-gradient(180deg, #fdfdfd 0%, #f1f1f1 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '900px',
        margin: '40px auto',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '28px', marginBottom: '20px' }}>
          🧠 Kiến thức Lập trình: Java vs JavaScript
        </h2>
        
        <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#333' }}>
          Nếu bạn từng nghe qua hai cái tên <b>Java</b> và <b>JavaScript</b> rồi thắc mắc “Ủa, chắc là một loại chứ gì?”, 
          thì… xin chia buồn 😅 — bạn vừa rơi vào cái bẫy marketing lớn nhất trong lịch sử lập trình!
        </p>

        <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#333' }}>
          Hai ngôn ngữ này thực ra <b>khác nhau hoàn toàn</b> — từ mục tiêu thiết kế, cách hoạt động đến nơi chúng được sử dụng.
        </p>

        <h3 style={{ color: '#e67e22', marginTop: '30px' }}>☕ Java – Ngôn ngữ “doanh nghiệp” và hệ thống lớn</h3>
        <p style={{ lineHeight: '1.8', fontSize: '16px' }}>
          Java ra đời năm 1995, cùng thời điểm với sự bùng nổ của Internet. Nó là một ngôn ngữ 
          <b>hướng đối tượng mạnh mẽ</b>, chạy trên nền tảng <b>JVM (Java Virtual Machine)</b>.
          Ưu điểm là “viết một lần, chạy mọi nơi” – chạy được trên Windows, Mac, Linux, thậm chí Android.
        </p>

        <ul style={{ marginLeft: '20px' }}>
          <li>✅ Dùng trong ứng dụng Android</li>
          <li>🏢 Phù hợp cho các hệ thống lớn, ngân hàng, doanh nghiệp</li>
          <li>💪 Cú pháp nghiêm ngặt, hiệu suất cao, dễ kiểm soát</li>
        </ul>

        <h3 style={{ color: '#3498db', marginTop: '30px' }}>💡 JavaScript – Linh hồn của thế giới Web</h3>
        <p style={{ lineHeight: '1.8', fontSize: '16px' }}>
          JavaScript lại được tạo ra cũng năm 1995, nhưng dành riêng cho <b>trình duyệt</b> – 
          giúp website trở nên sinh động hơn. Khi bạn bấm nút, cuộn trang, xem hiệu ứng trượt mượt mà —
          đó là công của JavaScript!
        </p>

        <ul style={{ marginLeft: '20px' }}>
          <li>🌐 Dùng cho Frontend (React, Vue, Angular)</li>
          <li>⚙️ Dùng được cả Backend (Node.js)</li>
          <li>⚡ Rất linh hoạt, học nhanh, code sáng tạo</li>
        </ul>

        <h3 style={{ color: '#16a085', marginTop: '30px' }}>⚔️ Java vs JavaScript – Giống nhau mỗi cái tên</h3>
        <p style={{ lineHeight: '1.8', fontSize: '16px' }}>
          Cả hai đều mạnh, nhưng hướng đi khác nhau:
        </p>
        <div style={{
          margin: '20px 0',
          backgroundColor: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
          overflow: 'hidden'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: '#1e293b' }}>Tiêu chí</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: '#1e293b' }}>Java</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: '#1e293b' }}>JavaScript</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px 16px', color: '#475569', borderTop: '1px solid #e2e8f0' }}>Môi trường chạy</td>
                  <td style={{ padding: '12px 16px', color: '#334155', borderTop: '1px solid #e2e8f0' }}>JVM, Android, server</td>
                  <td style={{ padding: '12px 16px', color: '#334155', borderTop: '1px solid #e2e8f0' }}>Trình duyệt, Node.js</td>
                </tr>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px 16px', color: '#475569', borderTop: '1px solid #e2e8f0' }}>Mục tiêu chính</td>
                  <td style={{ padding: '12px 16px', color: '#334155', borderTop: '1px solid #e2e8f0' }}>Backend, ứng dụng lớn</td>
                  <td style={{ padding: '12px 16px', color: '#334155', borderTop: '1px solid #e2e8f0' }}>Frontend, web động</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', color: '#475569', borderTop: '1px solid #e2e8f0' }}>Độ linh hoạt</td>
                  <td style={{ padding: '12px 16px', color: '#334155', borderTop: '1px solid #e2e8f0' }}>Cứng nhắc, nghiêm ngặt</td>
                  <td style={{ padding: '12px 16px', color: '#334155', borderTop: '1px solid #e2e8f0' }}>Tự do, sáng tạo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', fontStyle: 'italic', color: '#555' }}>
          👉 Nói vui: Java là “cỗ máy cơ khí chính xác”, còn JavaScript là “nghệ sĩ đường phố” của giới lập trình.
        </p>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#777' }}>
          <b>Kết luận:</b> Học cả hai, bạn sẽ hiểu cả thế giới backend lẫn frontend —  
          trở thành một lập trình viên <b>Fullstack</b> thực thụ 💪
        </p>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
      }}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 24px'}}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px'
          }}>
            Muốn tìm hiểu thêm về tôi?
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px'
          }}>
            Hãy liên hệ với tôi để thảo luận về các dự án và cách tôi có thể học hỏi thêm từ bạn.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
            <Link 
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: 'white',
                color: '#6366f1',
                fontWeight: 'bold',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              Liên hệ ngay
            </Link>
            <Link 
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                border: '2px solid white',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              Xem portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#1e293b', color: 'white', padding: '48px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px'}}>
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
                  <span style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>H</span>
                </div>
                <span style={{fontSize: '20px', fontWeight: 'bold'}}>Hồ Châu Thành</span>
              </div>
              <p style={{color: '#94a3b8', margin: 0}}>
                Sinh viên đam mê lập trình với kinh nghiệm phát triển game 2D và ứng dụng web thương mại điện tử.
              </p>
            </div>
            <div>
              <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>Liên kết</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <Link to="/" style={{color: '#94a3b8', textDecoration: 'none'}}>Trang chủ</Link>
                <Link to="/projects" style={{color: '#94a3b8', textDecoration: 'none'}}>Dự án</Link>
                <Link to="/blog" style={{color: '#94a3b8', textDecoration: 'none'}}>Giới thiệu</Link>
                <Link to="/contact" style={{color: '#94a3b8', textDecoration: 'none'}}>Liên hệ</Link>
              </div>
            </div>
            <div>
              <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>Liên hệ</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px', color: '#94a3b8'}}>
                <p style={{margin: 0}}>📧 hochauthanh22062004@gmail.com</p>
                <p style={{margin: 0}}>📱 +84 123 456 789</p>
                <p style={{margin: 0}}>📍 TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '32px',
            paddingTop: '32px',
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <p style={{margin: 0}}>&copy; 2024 Hồ Châu Thành. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;