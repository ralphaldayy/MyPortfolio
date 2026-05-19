import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  personalInfo, 
  experiences, 
  education, 
  technicalSkills, 
  certifications, 
  projects 
} from './data';
import { 
  Mail, 
  MapPin, 
  ExternalLink,
  Terminal,
  Activity,
  Globe,
  Settings,
  ChevronRight,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Database,
  Cpu,
  ShieldCheck,
  Code,
  Layout,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Section = ({ id, title, children, className = "" }: { id: string, title?: string, children: React.ReactNode, className?: string }) => (
  <motion.section 
    id={id} 
    className={`py-24 relative z-10 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    }}
  >
    <div className="max-w-7xl mx-auto px-6">
      {title && (
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-[var(--border)] pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-3 bg-[var(--accent)]"></div>
              <span className="label-mono font-black text-black bg-[var(--accent)] px-2">MODULE::{id.toUpperCase()}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[var(--text-heading)] tracking-[ -0.05em] uppercase italic leading-none">
              {title}
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--text-muted)] font-bold text-right hidden md:block">
            REF_PROT_ID: {Math.random().toString(36).substring(7).toUpperCase()}<br />
            VERSION_CONTROL: ACTIVE
          </div>
        </div>
      )}
      {children}
    </div>
  </motion.section>
);

const SkillCategoryIcon = ({ category }: { category: string }) => {
  const iconClass = "w-5 h-5 text-[var(--accent)]";
  if (category.includes('Cloud')) return <Database className={iconClass} />;
  if (category.includes('Hardware')) return <Cpu className={iconClass} />;
  if (category.includes('Networking')) return <Globe className={iconClass} />;
  if (category.includes('Security')) return <ShieldCheck className={iconClass} />;
  if (category.includes('Testing')) return <Activity className={iconClass} />;
  return <Settings className={iconClass} />;
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCertCategory, setActiveCertCategory] = useState(certifications[0]?.category || '');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="tech-bg min-h-screen text-[var(--text-body)] selection:bg-[var(--accent)]/20 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${scrolled ? 'bg-[var(--bg-main)] border-[var(--border)]' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="status-indicator"></div>
            <span className="font-mono text-sm font-bold text-[var(--text-heading)] tracking-tighter uppercase">INFRA_ALDAY // v3.0</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] font-medium">
            {['experience', 'skills', 'certifications', 'projects'].map((item) => (
              <a key={item} href={`#${item}`} className="px-5 py-2 hover:bg-[var(--accent)] hover:text-black transition-all uppercase border-x border-transparent hover:border-[var(--border)]">
                {item}
              </a>
            ))}
            <div className="w-8 h-px bg-[var(--border)] mx-4"></div>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 border-2 border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--accent)] text-[var(--text-heading)] transition-all shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <button onClick={() => setIsDark(!isDark)} className="p-2 text-[var(--text-heading)] border border-[var(--border)]">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-[var(--text-heading)] border border-[var(--border)]">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              className="md:hidden bg-[var(--bg-card)] border-b-2 border-[var(--border)] py-8 px-6 flex flex-col space-y-4 origin-top"
            >
              {['experience', 'skills', 'certifications', 'projects'].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-tight text-[var(--text-heading)] border-b border-[var(--border)] pb-2">{item}</a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary justify-center font-black">TRANSMIT</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Industrial Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Primary Command Block */}
            <motion.div 
              className="md:col-span-8 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-3 py-1 bg-[var(--accent)] text-black font-mono text-[10px] font-bold tracking-widest uppercase mb-4">
                [ PRODUCTION_ENVIRONMENT ]
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-[var(--text-heading)] leading-[0.8] tracking-tighter uppercase italic">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-4xl font-mono text-[var(--accent)] font-bold uppercase tracking-tight">
                {personalInfo.title}
              </p>
              <div className="max-w-3xl text-xl text-[var(--text-body)] leading-tight font-medium border-l-8 border-[var(--border)] pl-10 py-4 dark:border-[var(--accent)]/20">
                {personalInfo.summary}
              </div>
              
              <div className="flex flex-wrap gap-6 pt-10">
                <a href="#contact" className="btn-primary text-lg px-12 py-5">
                  <Mail className="w-6 h-6" />
                  INIT_CONNECTION
                </a>
                <a href="#experience" className="btn-secondary text-lg px-12 py-5">
                  <Terminal className="w-6 h-6" />
                  AUTH_LOGS
                </a>
              </div>
            </motion.div>

            {/* Spec Sheet / Monitor Block */}
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="tech-card p-0 overflow-hidden scanline">
                <div className="bg-[var(--border)] p-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white tracking-[0.3em] font-black uppercase">SYSTEM_MONITOR</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-8 space-y-8">
                  {/* Subject Profile Image */}
                  <div className="relative group overflow-hidden border-2 border-[var(--border)] bg-black">
                    <div className="aspect-square relative flex items-center justify-center p-2">
                       <img 
                        src={personalInfo.photo} 
                        alt={personalInfo.name} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Technical Frames */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--accent)] translate-x-[-2px] translate-y-[-2px]"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--accent)] translate-x-[2px] translate-y-[2px]"></div>
                    </div>
                    {/* ID Label */}
                    <div className="bg-[var(--border)] px-3 py-1 flex justify-between items-center text-[8px] font-mono font-black text-white uppercase tracking-widest">
                      <span>BIOMETRIC_DATA</span>
                      <span>{personalInfo.personal_id || "RD_4227_PH"}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-[var(--border)]/10 pb-2">
                      <span className="label-mono opacity-50">LOCATION_ID</span>
                      <span className="font-bold text-[var(--text-heading)] uppercase">{personalInfo.location}</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[var(--border)]/10 pb-2">
                      <span className="label-mono opacity-50">STATUS</span>
                      <span className="font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        CONNECTED
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[var(--border)]/10 pb-2">
                      <span className="label-mono opacity-50">CORE_V</span>
                      <span className="font-bold text-[var(--text-heading)]">OS_ALDAY_x64</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative group/skill">
                      <div className="flex justify-between label-mono mb-2">
                        <span>INFRA_EFFICIENCY</span>
                        <span>98%</span>
                      </div>
                      <div className="h-6 bg-[var(--bg-main)] border-2 border-[var(--border)] p-1">
                        <div className="h-full bg-[var(--accent)] w-[98%]"></div>
                      </div>
                    </div>
                    <div className="relative group/skill">
                      <div className="flex justify-between label-mono mb-2">
                        <span>RESPONSE_TIME</span>
                        <span>24MS</span>
                      </div>
                      <div className="h-6 bg-[var(--bg-main)] border-2 border-[var(--border)] p-1">
                        <div className="h-full bg-[var(--accent)] w-[92%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Page - Industrial Schematic */}
      <Section id="experience" title="DEPLOYMENT_HISTORY">
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="tech-card p-10 md:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Briefcase className="w-48 h-48" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                <div className="lg:col-span-1 border-r-0 lg:border-r-2 border-[var(--border)] pr-0 lg:pr-10 space-y-4">
                  {exp.logo && (
                    <div className="w-full aspect-square bg-white p-6 border-2 border-[var(--border)] grayscale group-hover:grayscale-0 transition-all">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div className="w-full px-4 py-2 bg-[var(--border)] text-white font-mono text-[10px] font-bold block text-center uppercase tracking-widest leading-tight">
                    {exp.date}
                  </div>
                  <h3 className="text-[10px] font-mono font-black text-[var(--text-muted)] uppercase tracking-widest text-center">
                    UID: 00{i+1}_NODE
                  </h3>
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="pt-2 border-t-2 border-dashed border-[var(--border)] space-y-2">
                      <p className="label-mono text-[9px] text-center opacity-40 tracking-[0.2em]">TOOLS_STACK</p>
                      <div className="grid grid-cols-3 gap-2">
                        {exp.tech.map((t, j) => (
                          <div
                            key={j}
                            title={t.name}
                            className="flex flex-col items-center gap-1.5 p-2 bg-[var(--bg-main)] border border-[var(--border)] border-dashed group/tool hover:border-[var(--accent)] transition-all"
                          >
                            <img
                              src={t.logo}
                              alt={t.name}
                              className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 group-hover/tool:grayscale-0 transition-all"
                            />
                            <span className="font-mono text-[7px] font-black uppercase text-[var(--text-muted)] text-center leading-tight line-clamp-2 group-hover:text-[var(--text-heading)] group-hover/tool:text-[var(--accent)] transition-colors">
                              {t.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="lg:col-span-3 space-y-8">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-[var(--text-heading)] uppercase tracking-tighter mb-2 italic">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-mono text-[var(--accent)] font-bold uppercase tracking-tight">
                      // {exp.company}
                    </p>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-4 text-lg text-[var(--text-body)] leading-tight font-medium">
                        <div className="w-1.5 h-6 bg-[var(--accent)] shrink-0 opacity-40"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Hardware Grid */}
      <Section id="skills" title="TECH_SPECS_CORE">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalSkills.map((cat, i) => (
            <motion.div key={i} className="tech-card p-8 group">
              <div className="flex items-center gap-4 mb-10 border-b-2 border-[var(--border)] pb-8 grayscale group-hover:grayscale-0 transition-all">
                <div className="w-12 h-12 bg-[var(--border)] flex items-center justify-center text-white">
                  <SkillCategoryIcon category={cat.category} />
                </div>
                <h3 className="text-xl font-black text-[var(--text-heading)] uppercase italic tracking-tighter">{cat.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-3 font-mono text-[10px] text-[var(--text-body)] font-bold uppercase bg-[var(--bg-main)] p-3 border border-[var(--border)] border-dashed">
                    <div className="w-1.5 h-1.5 bg-[var(--accent)]"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications - Blueprint Style */}
      <Section id="certifications" title="VALIDATED_PROTOCOLS">
        <div className="flex flex-wrap gap-4 mb-20">
          {certifications.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCertCategory(cat.category)}
              className={`px-10 py-4 font-mono text-xs font-black transition-all border-2 ${
                activeCertCategory === cat.category 
                ? 'bg-[var(--border)] text-white border-[var(--border)]' 
                : 'bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--accent)]'
              }`}
            >
              MODULE_{i+1}: {cat.category}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          key={activeCertCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {certifications.find(c => c.category === activeCertCategory)?.items.map((cert, j) => (
            <a 
              key={j} 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer" 
              className="tech-card p-6 flex flex-col items-center text-center gap-6 group hover:translate-y-[-4px]"
            >
              <div className="w-20 h-20 grayscale group-hover:grayscale-0 transition-all flex items-center justify-center p-3">
                <img src={cert.logo} alt={cert.issuer} className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[var(--text-heading)] mb-4 uppercase tracking-tighter leading-none line-clamp-3 h-9">
                  {cert.name}
                </h4>
                <div className="label-mono text-[9px] opacity-40">
                  {cert.issuer} // {cert.date}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </Section>

      {/* Education - Industrial Node */}
      <Section id="education" title="ACADEMIC_DATA">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {education.map((edu, i) => (
            <div key={i} className="tech-card p-12 relative group">
              <div className="absolute top-0 right-0 p-8 border-l-2 border-b-2 border-[var(--border)] font-mono text-[10px] font-black group-hover:bg-[var(--border)] group-hover:text-white transition-all">
                DEG_{i+1}
              </div>
              <div className="space-y-10">
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 shrink-0 bg-white p-4 border-2 border-[var(--border)] grayscale group-hover:grayscale-0 transition-all">
                    {edu.logo ? (
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                    ) : (
                      <GraduationCap className="w-12 h-12 text-[var(--border)]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--text-heading)] uppercase tracking-tighter italic">{edu.degree}</h3>
                    <p className="text-[var(--accent)] font-mono font-bold uppercase text-xs tracking-widest">{edu.school} // {edu.date}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {edu.bullets.map((bullet, j) => (
                    <div key={j} className="flex gap-3 text-sm font-medium items-center p-4 bg-[var(--bg-main)] border border-[var(--border)]">
                      <div className="w-2 h-2 bg-[var(--accent)]"></div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects - Operations Grid */}
      <Section id="projects" title="ACTIVE_OPERATIONS">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noreferrer" className="tech-card p-12 group block">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white border-2 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors flex items-center justify-center p-2">
                  {project.logo ? (
                    <img src={project.logo} alt={project.title} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                  ) : (
                    <Layout className="w-8 h-8 text-[var(--border)] group-hover:text-[var(--accent)] transition-colors" />
                  )}
                </div>
                <div className="px-4 py-1 border-2 border-[var(--border)] font-mono text-[10px] font-black uppercase text-[var(--text-muted)]">
                  OP_DATA_{i+1}
                </div>
              </div>
              <h3 className="text-4xl font-black text-[var(--text-heading)] uppercase tracking-tighter mb-6 group-hover:text-[var(--accent)] transition-all italic">
                {project.title}
              </h3>
              <p className="text-xl font-medium text-[var(--text-body)] leading-snug mb-10 opacity-70">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-10 border-t-2 border-[var(--border)] border-dashed">
                {project.tech.map((t, j) => (
                  <div key={j} className="flex items-center gap-3 font-mono text-[10px] font-black uppercase text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-colors">
                    <img src={t.logo} alt={t.name} className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all border border-[var(--border)]/10" />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

     {/* Contact - Master Connection Panel */}
      <Section id="contact">
        <div className="tech-card p-8 lg:p-14 text-center border-4 border-[var(--border)] bg-[var(--bg-main)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none p-10 grid grid-cols-12 gap-4">
             {Array.from({length: 48}).map((_, i) => (
               <div key={i} className="w-full h-1 border-t border-[var(--border)]"></div>
             ))}
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 bg-[var(--accent)] text-black font-mono font-black text-[10px] mb-6 uppercase tracking-[0.4em]">INIT_TRANSMISSION_SEQUENCE</div>
              <h2 className="text-5xl md:text-7xl font-black text-[var(--text-heading)] uppercase tracking-tighter mb-6 italic leading-none">
                Get Linked
              </h2>
              <p className="text-lg font-medium text-[var(--text-body)] leading-snug tracking-tight max-w-xl mx-auto opacity-80 uppercase">
                Actively reviewing infrastructure and systems administrator protocols. Ready for immediate deployment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`mailto:${personalInfo.email}`} className="btn-primary px-10 py-4 text-base font-black group w-full sm:w-auto">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                EXECUTE_CONNECT
              </a>
              <a 
                href="/IT_RalphAlday_CV.pdf" 
                download="IT_RalphAlday_CV.pdf"
                className="btn-secondary px-10 py-4 text-base font-black group w-full sm:w-auto"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download_CV
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer Industrial */}
      <footer className="py-8 border-t-4 border-[var(--border)] bg-[var(--bg-card)]">
        {/* Floating HUD */}
        <div className="fixed bottom-10 right-10 z-[100] hidden lg:block">
          <div className="tech-card bg-black p-4 border-2 border-[var(--accent)] shadow-[4px_4px_0px_0px_var(--accent)] w-64 scanline">
            <div className="flex items-center justify-between mb-4 border-b border-[var(--accent)]/30 pb-2">
              <span className="font-mono text-[8px] text-[var(--accent)] font-black uppercase">CORE::MONITOR</span>
              <Activity className="w-3 h-3 text-[var(--accent)] animate-pulse" />
            </div>
            <div className="space-y-2 font-mono text-[9px] text-[var(--accent)] uppercase">
              <div className="flex justify-between">
                <span>CPU_LOAD</span>
                <span className="text-white">{(Math.random() * 10).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span>MEM_ADDR</span>
                <span className="text-white">0x{Math.random().toString(16).substring(2, 10).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>BUF_STATE</span>
                <span className="text-green-400">OPTIMAL</span>
              </div>
              <div className="mt-4 pt-2 border-t border-[var(--accent)]/20 text-[7px] opacity-50 flex items-center gap-2">
                 <div className="w-1 h-1 bg-[var(--accent)] animate-ping"></div>
                 LISTENING_FOR_INPUT
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[var(--border)] flex items-center justify-center text-white font-mono font-black italic">R</div>
            <div className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-heading)]">
              {personalInfo.name} // CORE_ENG
            </div>
          </div>
          <div className="text-center font-mono text-[10px] font-black uppercase tracking-[0.5em] text-[var(--text-muted)] animate-pulse">
            ALDAY_OS_CONNECTION_ESTABLISHED
          </div>
          <div className="flex justify-center md:justify-end gap-10 items-center font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            <span>© 2026</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

