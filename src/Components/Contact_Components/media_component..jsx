import React, { useState, useEffect } from 'react';

const cssStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500&display=swap');


body {
  font-family: 'Inter', sans-serif;
}

.friendly-feed-container {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Subtle floating elements */
.floating-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.shape {
  position: absolute;
  opacity: 0.1;
  animation: gentleFloat 12s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  border-radius: 20px;
  top: 60%;
  right: 15%;
  animation-delay: 3s;
}

.shape-3 {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  border-radius: 12px;
  bottom: 30%;
  left: 20%;
  animation-delay: 6s;
}

@keyframes gentleFloat {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  50% { 
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.15;
  }
}

.feed-content {
  position: relative;
  z-index: 1;
  padding: 3rem 2rem;
}

.header-section {
  text-align: center;
  margin-bottom: 3rem;
}

.main-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.8rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: subtleGlow 4s ease-in-out infinite;
}

@keyframes subtleGlow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.1); }
}

.subtitle {
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Posts Grid */
.posts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.post-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.post-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 25px rgba(0, 0, 0, 0.1),
    0 10px 10px rgba(0, 0, 0, 0.04);
}

/* Unique shapes for different posts */
.post-card:nth-child(3n+1) {
  border-radius: 24px 24px 8px 24px;
}

.post-card:nth-child(3n+2) {
  border-radius: 8px 24px 24px 24px;
}

.post-card:nth-child(3n+3) {
  border-radius: 24px 8px 24px 24px;
}

/* Subtle gradient borders */
.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  border-radius: inherit;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.post-card:hover::before {
  opacity: 0.6;
}

.post-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: brightness(1.05) contrast(1.05);
}

.post-card:hover .post-image img {
  transform: scale(1.08);
}

/* Gentle overlay effect */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(139, 92, 246, 0.1) 50%,
    rgba(6, 182, 212, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.post-card:hover .image-overlay {
  opacity: 1;
}

.post-body {
  padding: 1.5rem;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.user-avatar {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  color: white;
  margin-right: 0.8rem;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
}

.user-avatar::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: gentleShimmer 3s infinite;
}

@keyframes gentleShimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.username {
  font-family: 'Fira Code', monospace;
  color: #3b82f6;
  font-weight: 500;
  font-size: 0.95rem;
}

.post-text {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.post-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(226, 232, 240, 0.6);
}

.action-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #64748b;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
}

.action-item:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  transform: translateY(-1px);
}

.action-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.action-item:hover .action-icon {
  transform: scale(1.1);
}

.likes { color: #ef4444; }
.likes:hover { 
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.comments { color: #3b82f6; }
.comments:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
}

.shares { color: #10b981; }
.shares:hover {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}

/* Entrance animations */
.post-card {
  opacity: 0;
  transform: translateY(30px);
  animation: slideInGentle 0.6s ease-out forwards;
}

.post-card:nth-child(1) { animation-delay: 0.1s; }
.post-card:nth-child(2) { animation-delay: 0.2s; }
.post-card:nth-child(3) { animation-delay: 0.3s; }
.post-card:nth-child(4) { animation-delay: 0.4s; }
.post-card:nth-child(5) { animation-delay: 0.5s; }
.post-card:nth-child(6) { animation-delay: 0.6s; }

@keyframes slideInGentle {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Subtle pulse indicator */
.activity-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: gentlePulse 2s ease-in-out infinite;
}

@keyframes gentlePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .feed-content {
    padding: 2rem 1rem;
  }
  
  .main-title {
    font-size: 2.2rem;
  }
  
  .posts-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .post-body {
    padding: 1.2rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.9rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .post-image {
    height: 180px;
  }
  
  .post-body {
    padding: 1rem;
  }
}

/* Accessibility improvements */
.post-card:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .post-card,
  .post-image img,
  .action-item,
  .floating-shapes * {
    animation: none;
    transition: none;
  }
}
`;

const friendlyPosts = [
  {
    id: 1,
    username: 'sarah_designs',
    text: 'Just launched our new design system! 🎨 Clean, accessible, and developer-friendly. So excited to share this with the team!',
    likes: 1247,
    comments: 89,
    shares: 34,
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=300&fit=crop',
    avatar: 'SD'
  },
  {
    id: 2,
    username: 'mike_frontend',
    text: 'CSS Grid makes responsive layouts so much easier! 📱💻 Here\'s a quick tip that saved me hours of debugging.',
    likes: 892,
    comments: 156,
    shares: 67,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop',
    avatar: 'MF'
  },
  {
    id: 3,
    username: 'alex_ux',
    text: 'User research findings are in! 📊 Our new onboarding flow increased completion rates by 35%. Users love the simplified steps.',
    likes: 1534,
    comments: 203,
    shares: 89,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    avatar: 'AX'
  },
  {
    id: 4,
    username: 'team_backend',
    text: 'API performance optimization complete! ⚡ Response times improved by 60%. The database indexing really paid off.',
    likes: 2103,
    comments: 134,
    shares: 178,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    avatar: 'TB'
  },
  {
    id: 5,
    username: 'emma_product',
    text: 'Feature release day! 🚀 Our collaborative workspace is now live. Can\'t wait to see how teams use it to create amazing things.',
    likes: 1876,
    comments: 245,
    shares: 156,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
    avatar: 'EP'
  },
  {
    id: 6,
    username: 'dev_community',
    text: 'Open source contribution milestone reached! 🎉 Thanks to all 500+ contributors who made this project possible. Community rocks!',
    likes: 3247,
    comments: 189,
    shares: 234,
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop',
    avatar: 'DC'
  }
];

const FriendlyTechFeed = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = cssStyles;
    document.head.appendChild(styleSheet);
    
    setMounted(true);

    return () => {
      const existingStyle = document.querySelector('style');
      if (existingStyle && existingStyle.innerText.includes('.friendly-feed-container')) {
        existingStyle.remove();
      }
    };
  }, []);

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  if (!mounted) return <div>Loading...</div>;

  return (
    <div className="friendly-feed-container">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="feed-content">
        <div className="header-section">
          <h1 className="main-title">Our Team Updates</h1>
          <p className="subtitle">Sharing progress, celebrating wins, and building together</p>
        </div>

        <div className="posts-container">
          {friendlyPosts.map((post, index) => (
            <article key={post.id} className="post-card">
              <div className="activity-indicator"></div>
              
              <div className="post-image">
                <img 
                  src={post.image} 
                  alt={`Update from ${post.username}`}
                  loading="lazy"
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="post-body">
                <div className="user-info">
                  <div className="user-avatar">
                    {post.avatar}
                  </div>
                  <div className="username">@{post.username}</div>
                </div>
                
                <div className="post-text">
                  {post.text}
                </div>
                
                <div className="post-actions">
                  <div className="action-item likes">
                    <svg className="action-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>{formatCount(post.likes)}</span>
                  </div>
                  
                  <div className="action-item comments">
                    <svg className="action-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21,6C21,4.89 20.11,4 19,4H5A2,2 0 0,0 3,6V14A2,2 0 0,0 5,16H16L21,21V6Z"/>
                    </svg>
                    <span>{formatCount(post.comments)}</span>
                  </div>
                  
                  <div className="action-item shares">
                    <svg className="action-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
                    </svg>
                    <span>{formatCount(post.shares)}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendlyTechFeed;