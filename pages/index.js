import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedLogo from '../components/AnimatedLogo';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ProjectCard = ({ title, description, tags, link, color, caseStudyLink }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="project-card"
      style={{ 
        background: 'rgba(255, 255, 255, 0.03)', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '24px', 
        padding: '2.5rem',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '5px', 
        background: `linear-gradient(90deg, ${color}, transparent)` 
      }} />
      
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: 0 }}>{title}</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              color: '#fff', 
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontSize: '0.75rem', 
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <p style={{ color: '#aaa', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
        {description}
      </p>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        {caseStudyLink ? (
          <Link href={caseStudyLink} legacyBehavior>
            <motion.a 
              whileHover={{ x: 5 }}
              style={{ 
                color: color, 
                fontWeight: '700', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              View Project 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
          </Link>
        ) : (
          link && (
            <motion.a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              style={{ 
                color: color, 
                fontWeight: '700', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                fontSize: '1.1rem'
              }}
            >
              View Project 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
          )
        )}

        {caseStudyLink && link && (
          <motion.a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            style={{ 
              color: '#fff', 
              fontWeight: '600', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              fontSize: '1.0rem',
              textDecoration: 'none',
              opacity: 0.8,
              cursor: 'pointer'
            }}
          >
            Live App
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
               <polyline points="15 3 21 3 21 9"></polyline>
               <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </motion.a>
        )}
      </div>

      {!link && !caseStudyLink && (
        <span style={{ color: '#666', fontStyle: 'italic' }}>Coming Soon</span>
      )}
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen flex flex-col" style={{ overflowX: 'hidden' }}>
      <Head>
        <title>Rock Vegas | Creative Web Development</title>
        <meta name="description" content="AI driven apps, automation and bespoke web solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      {/* Background Elements */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>
      
      {/* Massive Logo Background */}
      <motion.div 
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          width: '500vw',
          height: '500vw',
          zIndex: 0,
          opacity: 0.08,
          pointerEvents: 'none',
          filter: 'blur(80px)', // <--- EDIT BLUR HERE
        }}
        animate={{ 
          rotate: 360, // Full 360° rotation
          scale: [1, 1.5, 1], // Pulse: normal → bigger → normal
          x: ['-50%', '-40%', '-60%', '-50%'], // Horizontal: center → slight right → slight left → center (keep -50% for true center)
          y: ['-50%', '-60%', '-40%', '-50%'], // Vertical: center → slight up → slight down → center (keep -50% for true center)
        }}
        transition={{ 
          rotate: { duration: 120, repeat: Infinity, ease: "linear" }, // Rotation speed (seconds)
          scale: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, // Pulse speed
          x: { duration: 40, repeat: Infinity, ease: "easeInOut" }, // Horizontal movement speed
          y: { duration: 35, repeat: Infinity, ease: "easeInOut" } // Vertical movement speed
        }}
      >
        <Image src="/rockvegas-logo-220.svg" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
      </motion.div>

      <div className="bg-grid"></div>

      {/* Sparkles */}
      <div className="sparkles-container">
        {[...Array(20)].map((_, i) => {
          // Use index-based values instead of Math.random() to avoid hydration mismatch
          const top = ((i * 37) % 100);
          const left = ((i * 53) % 100);
          const delay = (i * 0.3) % 5;
          const duration = 3 + ((i * 0.5) % 4);
          return (
            <div key={i} className="sparkle" style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }} />
          );
        })}
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container main-nav"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AnimatedLogo />
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:truedaz@gmail.com?subject=Rockvegas.co.uk%20Enquiry&body=Hi%2C%0A%0A&importance=High" 
          className="btn" 
          style={{ padding: '10px 24px', fontSize: '0.95rem' }}
        >
          Get in Touch
        </motion.a>
      </motion.nav>

      <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ 
            minHeight: '80vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <motion.div variants={fadeInUp}>
            <span style={{ 
              display: 'inline-block', 
              padding: '8px 16px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '50px', 
              fontSize: '0.9rem', 
              fontWeight: '600', 
              marginBottom: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              Creative Web Development Agency
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: '800', lineHeight: '1', marginBottom: '2rem', letterSpacing: '-2px' }}>
            We Build the <br />
            <span className="gradient-text" style={{ display: 'inline-block', filter: 'drop-shadow(0 0 20px rgba(121, 40, 202, 0.4))' }}>Future of Web</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} style={{ fontSize: '1.4rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
            Specialising in AI driven apps, automation, and building bespoke solutions for corporate and individual needs.
          </motion.p>
          
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px' }}>
            <motion.a 
              href="#projects" 
              className="btn" 
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(121, 40, 202, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              style={{ fontSize: '1.1rem', padding: '16px 40px' }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Mission Statement */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '10rem', padding: '4rem 0' }}
        >
          <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '300', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.4' }}>
            We have a thirst for learning and sharing knowledge to <span className="gradient-text" style={{ fontWeight: '700' }}>progress humanity.</span>
          </p>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: '10rem' }}>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '4rem', textAlign: 'center' }}
          >
            Selected Works
          </motion.h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <ProjectCard 
              title="Learning Journey"
              description="A locally stored, question-driven educational platform aligned with the UK National Curriculum. Features self-paced learning, automated progress tracking, and mastery analytics to help students love learning."
              tags={['EdTech', 'React', 'Automation', 'UK Curriculum']}
              link="https://learning-journey-app-plum.vercel.app/"
              color="#ff0080"
            />

            <ProjectCard 
              title="Trading Journey"
              description="Comprehensive AI trading platform to compare different large language models' trading performance. Collect realtime market data and analytics."
              tags={['AI Trading', 'LLM', 'Realtime Data', 'Analytics']}
              link="https://trading-journey-eight.vercel.app/"
              caseStudyLink="/case-studies/trading-journey"
              color="#0070f3"
            />

            <ProjectCard 
              title="More Coming Soon"
              description="We have many more exciting projects in the pipeline, pushing the boundaries of what's possible with AI and web technologies."
              tags={['AI', 'Innovation', 'Future']}
              color="#7928ca"
            />
          </div>
        </section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            padding: '6rem 2rem', 
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '30px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '4rem'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Ready to start your project?</h2>
          <p style={{ color: '#aaa', marginBottom: '3rem', fontSize: '1.2rem' }}>Let us build something incredible together.</p>
          <motion.a 
            href="mailto:truedaz@gmail.com?subject=Rockvegas.co.uk%20Enquiry&body=Hi%2C%0A%0A&importance=High" 
            className="btn" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ fontSize: '1.2rem', padding: '20px 48px' }}
          >
            truedaz@gmail.com
          </motion.a>
        </motion.section>

      </main>

      <footer style={{ textAlign: 'center', padding: '3rem', color: '#666', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>&copy; {new Date().getFullYear()} Rock Vegas. All rights reserved.</p>
      </footer>
    </div>
  );
}