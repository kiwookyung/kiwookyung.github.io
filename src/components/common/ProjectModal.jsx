import { useEffect, useState } from 'react';
import { X, Github, Calendar, Users, Award, AlertCircle, Play, Tag, AlertTriangle, CheckCircle2, ArrowRight, Lightbulb, ChevronDown, ChevronUp, Film } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { getCurrentThemeColors } = useTheme();
  const themeColors = getCurrentThemeColors();
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);

  // 모달이 열려있을 때 배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      // body에 스크롤 방지 스타일 적용
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // 모달이 닫힐 때 원래 상태로 복원
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div
            className="px-6 py-4 flex justify-between items-center"
            style={{
              background: `linear-gradient(135deg, ${themeColors.primary}E6, ${themeColors.primaryDark}E6)`
            }}
          >
            <h3 className="text-2xl font-display font-black text-white">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Project Image */}
            <div className="mb-6">
              <div className="h-72 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">프로젝트 설명</h4>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  {(project.longDescription || project.description)
                    .split(/[.]\s+/)
                    .filter(sentence => sentence.trim().length > 0)
                    .map((sentence, index, array) => (
                      <p key={index} className="mb-0">
                        {sentence.trim()}
                        {index < array.length - 1 ? '.' : ''}
                      </p>
                    ))}
                </div>

                {/* 프로젝트 스크린샷 갤러리 */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {(showAllScreenshots ? project.screenshots : project.screenshots.slice(0, 4)).map((screenshot, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                          <img
                            src={screenshot}
                            alt={`${project.title} 스크린샷 ${index + 1}`}
                            className="w-full h-32 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onClick={() => window.open(screenshot, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                    {project.screenshots.length > 6 && (
                      <button
                        onClick={() => setShowAllScreenshots(!showAllScreenshots)}
                        className="w-full mt-3 py-2 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center gap-1 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {showAllScreenshots ? (
                          <>
                            <ChevronUp size={16} />
                            <span>간략히 보기</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} />
                            <span>전체 {project.screenshots.length}개 화면 보기</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">프로젝트 정보</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.period}</span>
                  </div>
                  <div className="text-gray-600">
                    <div className="flex items-center mb-2">
                      <Users size={16} className="mr-2" />
                      <span className="font-medium">팀원:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.teamSize.split(/[,(]/).map((member, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {member.trim().replace(/[()]/g, '')}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium mr-2">역할:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.role.split(/[,·]/).map((role, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {role.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Video */}
            {project.demoVideo && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Film size={20} className="text-primary-600" />
                  영상 포트폴리오
                </h4>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <video
                    src={project.demoVideo}
                    controls
                    className="w-full max-h-96 bg-black"
                    preload="metadata"
                  >
                    브라우저가 비디오 태그를 지원하지 않습니다.
                  </video>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">사용 기술</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 핵심 기술 선택 이유 */}
              {project.techDetails && project.techDetails.length > 0 && (
                <div className="mt-4 space-y-3">
                  <h5 className="text-md font-semibold text-gray-800 mb-2">핵심 기술 선택 이유</h5>
                  {project.techDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500"
                    >
                      <div className="flex items-start gap-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold flex-shrink-0">
                          {(index + 1).toString()}
                        </span>
                        <div className="flex-1">
                          <h6 className="font-semibold text-gray-900 mb-1">{detail.name}</h6>
                          <p className="text-sm text-gray-700 leading-relaxed">{detail.reason}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">주요 성과</h4>
                <div className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <Award size={16} className="mr-2 text-yellow-500" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">트러블슈팅</h4>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => {
                    // 텍스트를 문제/해결로 파싱
                    const parseTroubleshooting = (text) => {
                      // "문제 설명: 문제 상황 발생했습니다. 해결 방법" 형식 파싱
                      const colonIndex = text.indexOf(':');
                      if (colonIndex === -1) {
                        return { title: '', problem: text, solution: '' };
                      }

                      const title = text.substring(0, colonIndex).trim();
                      const rest = text.substring(colonIndex + 1).trim();

                      // "발생했습니다." 또는 "발생했습니다"를 기준으로 문제와 해결 분리
                      const occurredPattern = /발생했습니다\.?/;
                      const occurredMatch = rest.match(occurredPattern);

                      if (occurredMatch) {
                        const occurredIndex = rest.indexOf(occurredMatch[0]) + occurredMatch[0].length;
                        const problem = rest.substring(0, occurredIndex).trim();
                        let solution = rest.substring(occurredIndex).trim();

                        // 해결 방법 앞의 공백이나 마침표 제거
                        solution = solution.replace(/^[\s.]+/, '').trim();

                        // 해결 방법에서 마지막 마침표 제거 (있는 경우)
                        if (solution.endsWith('.')) {
                          solution = solution.slice(0, -1).trim();
                        }

                        return { title, problem, solution };
                      }

                      // "발생했습니다" 패턴이 없으면 마지막 마침표를 기준으로 분리
                      const lastDotIndex = rest.lastIndexOf('.');
                      if (lastDotIndex > 0 && lastDotIndex < rest.length - 1) {
                        const problem = rest.substring(0, lastDotIndex + 1).trim();
                        let solution = rest.substring(lastDotIndex + 1).trim();
                        if (solution.endsWith('.')) {
                          solution = solution.slice(0, -1).trim();
                        }
                        return { title, problem, solution };
                      }

                      // 패턴이 없으면 전체를 문제로 처리
                      return { title, problem: rest, solution: '' };
                    };

                    const parsed = parseTroubleshooting(challenge);

                    return (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {/* 제목 */}
                        {parsed.title && (
                          <div className="bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                              <AlertTriangle size={18} className="text-red-500 flex-shrink-0" />
                              <h5 className="font-semibold text-gray-900">{parsed.title}</h5>
                            </div>
                          </div>
                        )}

                        <div className="p-4 space-y-4">
                          {/* 문제 섹션 */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <AlertCircle size={18} className="text-red-500" />
                              <span className="text-base font-semibold text-red-700">문제</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed pl-6">{parsed.problem}</p>
                          </div>

                          {/* 해결 방법이 있을 때만 표시 */}
                          {parsed.solution && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb size={18} className="text-green-500" />
                                <span className="text-base font-semibold text-green-700">해결</span>
                              </div>
                              <p className="text-gray-700 text-sm leading-relaxed pl-6">{parsed.solution}</p>
                            </div>
                          )}

                          {/* 트러블슈팅 이미지 (있는 경우) */}
                          {project.troubleshootingImages && project.troubleshootingImages[index] && project.troubleshootingImages[index].length > 0 && (
                            <div className="mt-3 pl-6">
                              <div className="grid grid-cols-2 gap-2">
                                {project.troubleshootingImages[index].map((img, imgIndex) => (
                                  <div key={imgIndex} className="relative rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                                    <img
                                      src={img}
                                      alt={`${parsed.title} 이미지 ${imgIndex + 1}`}
                                      loading="lazy"
                                      className="w-full h-32 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                                      onClick={() => window.open(img, '_blank')}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">프로젝트 태그</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center gap-3 pt-6 border-t border-gray-200">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>GitHub 보기</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-theme-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-theme-primary-dark transition-colors duration-200 flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>시연 영상</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
