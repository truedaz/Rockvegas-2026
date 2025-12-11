import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function TradingJourneyCaseStudy() {
  return (
    <div className="min-h-screen flex flex-col" style={{ overflowX: 'hidden', background: '#050505', color: '#fff' }}>
      <Head>
        <title>Trading Journey | Case Study | Rock Vegas</title>
        <meta name="description" content="Case study of Trading Journey - an AI trading platform." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      {/* Navigation */}
      <nav className="container" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Rock Vegas</span>
        </Link>
        <Link href="/" className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>Back to Home</Link>
      </nav>

      <main className="container" style={{ padding: '2rem 2rem 6rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        
        {/* Hero Header */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ marginBottom: '5rem', textAlign: 'center', paddingTop: '2rem' }}
        >
            <div style={{ marginBottom: '2rem', display: 'inline-block' }}>
                <Image 
                    src="/images/case-studies/trading-journey/logo.png" 
                    alt="Trading Journey Logo" 
                    width={784} 
                    height={578} 
                    style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '24px' }} 
                />
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                Trading Journey
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: '#aaa', marginBottom: '2rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                Comprehensive AI trading platform comparing LLM performance with realtime market data.
            </p>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                {['AI Trading', 'LLM', 'Realtime Data', 'Analytics', 'Next.js'].map(tag => (
                    <span key={tag} style={{ 
                        background: 'rgba(255,255,255,0.05)', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '8px 16px', 
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        color: '#ccc'
                    }}>{tag}</span>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <a href="https://trading-journey-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>
                    Visit Live Site
                </a>
            </div>
        </motion.section>

        {/* Overview */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '6rem' }}
        >
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                Trading Journey is an advanced experimental platform designed to analyze and compare the trading performance of various Large Language Models (LLMs). 
                In a rapidly evolving financial landscape, understanding how different AI models interpret market signals is crucial.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                The platform ingests real-time market data and applies sophisticated analytics to visualize trading decisions, portfolio performance, and risk metrics across different AI agents.
            </p>
        </motion.section>

        {/* Screenshots */}
        <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Interface & Features</h2>
            
            <div style={{ marginBottom: '5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0070f3', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#0070f3', borderRadius: '50%', display: 'inline-block' }}></span>
                    Dashboard Overview
                </h3>
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                    <Image src="/images/case-studies/trading-journey/Dashboard.png" alt="Trading Journey Dashboard" width={1920} height={1080} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <p style={{ marginTop: '1.5rem', color: '#888', fontSize: '1rem', lineHeight: '1.6' }}>
                    The main dashboard provides a high-level view of market status, active agents, and overall system health. It serves as the command center for monitoring multiple LLM trading strategies simultaneously.
                </p>
            </div>

            <div style={{ marginBottom: '5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0070f3', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#0070f3', borderRadius: '50%', display: 'inline-block' }}></span>
                    Market Analysis
                </h3>
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                    <Image src="/images/case-studies/trading-journey/Analysis.png" alt="Market Analysis" width={1920} height={1080} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <p style={{ marginTop: '1.5rem', color: '#888', fontSize: '1rem', lineHeight: '1.6' }}>
                    Deep dive analysis tools allow users to evaluate market trends using technical indicators and AI-generated insights. This view helps in correlating market movements with AI decision-making patterns.
                </p>
            </div>

            <div style={{ marginBottom: '5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0070f3', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#0070f3', borderRadius: '50%', display: 'inline-block' }}></span>
                    Model Comparison
                </h3>
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                    <Image src="/images/case-studies/trading-journey/Compare.png" alt="Model Comparison" width={1920} height={1080} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <p style={{ marginTop: '1.5rem', color: '#888', fontSize: '1rem', lineHeight: '1.6' }}>
                    A dedicated comparison view to benchmark different LLMs against each other. Users can analyze ROI, drawdown, and trade frequency to determine which model performs best under specific market conditions.
                </p>
            </div>

             <div style={{ marginBottom: '5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0070f3', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#0070f3', borderRadius: '50%', display: 'inline-block' }}></span>
                    Trade History
                </h3>
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                    <Image src="/images/case-studies/trading-journey/Trades.png" alt="Trade History" width={1920} height={1080} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <p style={{ marginTop: '1.5rem', color: '#888', fontSize: '1rem', lineHeight: '1.6' }}>
                    Detailed logs of every executed trade, including entry/exit points, profit/loss, and the reasoning provided by the AI agent at the time of the trade.
                </p>
            </div>
        </section>

        {/* Footer CTA */}
        <section style={{ textAlign: 'center', marginTop: '4rem', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Interested in AI Trading?</h2>
            <a href="https://trading-journey-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
                Launch Trading Journey
            </a>
        </section>

      </main>
    </div>
  );
}
