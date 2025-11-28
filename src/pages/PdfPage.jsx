import { personalInfo } from '../data/personal';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { career } from '../data/career';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

const PdfPage = () => {
  // 마크다운 스타일 강조 텍스트 파싱 함수
  const parseMarkdownText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const content = part.slice(2, -2);
        return (
          <strong key={index} className="font-bold text-gray-900">
            {content}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="pdf-page bg-white text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* PDF 전용 스타일 */}
      <style>{`
        @media print {
          .pdf-page {
            page-break-inside: avoid;
          }
          .pdf-section {
            page-break-inside: avoid;
            margin-bottom: 20px;
          }
          .pdf-page-break {
            page-break-before: always;
          }
        }
        .pdf-page {
          max-width: 210mm;
          margin: 0 auto;
          padding: 20mm;
          line-height: 1.6;
        }
        .pdf-section {
          margin-bottom: 30px;
        }
        .pdf-header {
          border-bottom: 3px solid #25cc08;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .pdf-title {
          font-size: 32px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 10px;
        }
        .pdf-subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 15px;
        }
        .pdf-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          font-size: 14px;
        }
        .pdf-contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .pdf-section-title {
          font-size: 24px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 15px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5px;
        }
        .pdf-content {
          font-size: 14px;
          line-height: 1.8;
          color: #333;
        }
        .pdf-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 15px;
        }
        .pdf-card {
          border: 1px solid #e5e7eb;
          padding: 15px;
          border-radius: 8px;
          background: #f9fafb;
        }
        .pdf-card-title {
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 8px;
          color: #25cc08;
        }
        .pdf-project {
          margin-bottom: 25px;
          padding: 15px;
          border-left: 4px solid #25cc08;
          background: #f9fafb;
        }
        .pdf-project-title {
          font-size: 18px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 8px;
        }
        .pdf-project-meta {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
        }
        .pdf-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 10px;
        }
        .pdf-tech-tag {
          background: #e5e7eb;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
        .pdf-timeline-item {
          margin-bottom: 20px;
          padding-left: 20px;
          border-left: 2px solid #25cc08;
          position: relative;
        }
        .pdf-timeline-item::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 5px;
          width: 10px;
          height: 10px;
          background: #25cc08;
          border-radius: 50%;
        }
        .pdf-timeline-title {
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 5px;
        }
        .pdf-timeline-period {
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }
        .pdf-skill-item {
          margin-bottom: 10px;
        }
        .pdf-skill-name {
          font-weight: bold;
          margin-bottom: 3px;
        }
        .pdf-skill-desc {
          font-size: 12px;
          color: #666;
        }
      `}</style>

      {/* 헤더 */}
      <div className="pdf-header">
        <h1 className="pdf-title">{personalInfo.name}</h1>
        <p className="pdf-subtitle">{personalInfo.title}</p>
        <div className="pdf-contact">
          <div className="pdf-contact-item">
            <Mail size={14} />
            <span>{personalInfo.profile.email}</span>
          </div>
          <div className="pdf-contact-item">
            <Phone size={14} />
            <span>{personalInfo.profile.phone}</span>
          </div>
          <div className="pdf-contact-item">
            <MapPin size={14} />
            <span>{personalInfo.profile.location}</span>
          </div>
          <div className="pdf-contact-item">
            <Github size={14} />
            <a href={personalInfo.profile.github} className="text-blue-600">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* 소개 */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">소개</h2>
        <div className="pdf-content">
          <p className="mb-4">{parseMarkdownText(personalInfo.longDescription)}</p>
          <p className="mb-4">
            <strong>Vision:</strong> {personalInfo.vision}
          </p>
        </div>
      </div>

      {/* 강점 */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">핵심 역량</h2>
        <div className="pdf-grid">
          {personalInfo.strengths.map((strength, index) => (
            <div key={index} className="pdf-card">
              <div className="pdf-card-title">{strength.icon} {strength.title}</div>
              <p className="pdf-content" style={{ fontSize: '13px' }}>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 기술 스택 */}
      <div className="pdf-section pdf-page-break">
        <h2 className="pdf-section-title">기술 스택</h2>
        <div className="pdf-content">
          <div className="mb-4">
            <h3 className="font-bold mb-2" style={{ fontSize: '16px' }}>Frontend</h3>
            <div className="pdf-grid">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="pdf-skill-item">
                  <div className="pdf-skill-name">{skill.name}</div>
                  <div className="pdf-skill-desc">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2" style={{ fontSize: '16px' }}>협업 및 통합</h3>
            <div className="pdf-grid">
              {skills.collaboration?.map((skill, index) => (
                <div key={index} className="pdf-skill-item">
                  <div className="pdf-skill-name">{skill.name}</div>
                  <div className="pdf-skill-desc">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2" style={{ fontSize: '16px' }}>통합 및 외부 API</h3>
            <div className="pdf-grid">
              {skills.integration?.map((skill, index) => (
                <div key={index} className="pdf-skill-item">
                  <div className="pdf-skill-name">{skill.name}</div>
                  <div className="pdf-skill-desc">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2" style={{ fontSize: '16px' }}>Tools & Others</h3>
            <div className="pdf-grid">
              {skills.tools?.map((skill, index) => (
                <div key={index} className="pdf-skill-item">
                  <div className="pdf-skill-name">{skill.name}</div>
                  <div className="pdf-skill-desc">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 경력/교육 */}
      <div className="pdf-section pdf-page-break">
        <h2 className="pdf-section-title">경력 및 교육</h2>
        <div className="pdf-content">
          {career.map((item) => (
            <div key={item.id} className="pdf-timeline-item">
              <div className="pdf-timeline-title">{item.org} - {item.title}</div>
              <div className="pdf-timeline-period">{item.period}</div>
              <p className="mb-2" style={{ fontSize: '13px' }}>{item.description}</p>
              {item.details && (
                <ul className="list-disc pl-5" style={{ fontSize: '12px' }}>
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 프로젝트 */}
      <div className="pdf-section pdf-page-break">
        <h2 className="pdf-section-title">주요 프로젝트</h2>
        <div className="pdf-content">
          {projects.map((project) => (
            <div key={project.id} className="pdf-project">
              <div className="pdf-project-title">{project.title}</div>
              <div className="pdf-project-meta">
                {project.period} | {project.teamSize} | {project.role}
              </div>
              <p className="mb-3" style={{ fontSize: '13px' }}>{project.longDescription || project.description}</p>
              <div className="pdf-tech-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="pdf-tech-tag">{tech}</span>
                ))}
              </div>
              {project.achievements && project.achievements.length > 0 && (
                <div className="mt-3">
                  <strong style={{ fontSize: '13px' }}>주요 성과:</strong>
                  <ul className="list-disc pl-5 mt-1" style={{ fontSize: '12px' }}>
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 목표 */}
      <div className="pdf-section pdf-page-break">
        <h2 className="pdf-section-title">목표</h2>
        <div className="pdf-content">
          <div className="mb-4">
            <h3 className="font-bold mb-2" style={{ fontSize: '16px' }}>단기 목표</h3>
            {personalInfo.goals.shortTerm.map((goal, index) => (
              <div key={index} className="mb-3" style={{ fontSize: '13px' }}>
                <strong>{goal.icon} {goal.title}:</strong> {goal.description}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2" style={{ fontSize: '16px' }}>장기 목표</h3>
            {personalInfo.goals.longTerm.map((goal, index) => (
              <div key={index} className="mb-3" style={{ fontSize: '13px' }}>
                <strong>{goal.icon} {goal.title}:</strong> {goal.description}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 관심 분야 */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">관심 분야</h2>
        <div className="pdf-tech-tags">
          {personalInfo.interests.map((interest, index) => (
            <span key={index} className="pdf-tech-tag" style={{ fontSize: '13px', padding: '6px 12px' }}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PdfPage;

