import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const heroRef = useRef(null);

  // Mock portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Bali Love Story",
      category: "cinematic",
      thumbnail: "https://placehold.co/400x600/1a1a1a/ffffff?text=Bali+Love+Story",
      video: " https://player.vimeo.com/video/937548274 ",
      description: "A romantic AI-generated short film shot in Bali using Veo 3. Captured the essence of love and nature with cinematic color grading.",
      tools: ["Veo 3", "Kling AI", "Runway"],
      duration: "1:45"
    },
    {
      id: 2,
      title: "Neon Dreams Music Video",
      category: "music",
      thumbnail: "https://placehold.co/400x600/000000/ffdd00?text=Neon+Dreams",
      video: " https://player.vimeo.com/video/937548274 ",
      description: "Cyberpunk-inspired music video for indie artist. Used generative AI to create surreal cityscapes and morphing visuals.",
      tools: ["Kling AI", "Midjourney", "After Effects"],
      duration: "3:20"
    },
    {
      id: 3,
      title: "Luxury Watch Ad",
      category: "product",
      thumbnail: "https://placehold.co/400x600/000000/ffffff?text=Luxury+Watch",
      video: " https://player.vimeo.com/video/937548274 ",
      description: "High-end product animation showcasing watch details with macro AI generation and realistic lighting.",
      tools: ["Veo 3", "Cinema 4D", "Runway"],
      duration: "0:30"
    },
    {
      id: 4,
      title: "Horror Short: The Whisper",
      category: "horror",
      thumbnail: "https://placehold.co/400x600/000000/8b0000?text=The+Whisper",
      video: " https://player.vimeo.com/video/937548274 ",
      description: "Award-winning horror short created entirely with AI. Atmospheric tension and jump scares generated through prompt engineering.",
      tools: ["Kling AI", "Veo 3", "Sound Design AI"],
      duration: "2:15"
    },
    {
      id: 5,
      title: "Tech Startup UGC",
      category: "ugc",
      thumbnail: "https://placehold.co/400x600/000000/00ffcc?text=Tech+UGC",
      video: " https://player.vimeo.com/video/937548274 ",
      description: "Vertical content series for social media. Authentic user-generated style with professional polish.",
      tools: ["Veo 3", "CapCut AI", "Runway"],
      duration: "0:25"
    },
    {
      id: 6,
      title: "Logo Morph Animation",
      category: "morphs",
      thumbnail: "https://placehold.co/400x600/000000/ff6b6b?text=Logo+Morph",
      video: " https://player.vimeo.com/video/937548274 ",
      description: "From sketch to final logo through seamless AI morphing. Showcased brand evolution in seconds.",
      tools: ["Midjourney", "Runway", "After Effects"],
      duration: "0:18"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'cinematic', label: 'Cinematic Trailers' },
    { key: 'music', label: 'AI Music Videos' },
    { key: 'product', label: 'Product Ads' },
    { key: 'ugc', label: 'UGC/Vertical Content' },
    { key: 'morphs', label: '3D Morphs & VFX' },
    { key: 'horror', label: 'Horror Shorts' },
    { key: 'commercial', label: 'Commercial Projects' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const testimonials = [
    {
      quote: "This blew my mind — it looks like a $20k ad for a $400 budget!",
      author: "Jordan, startup founder",
      image: "https://placehold.co/80x80/333/fff?text=J"
    },
    {
      quote: "I’ve never seen AI look this cinematic. My music video came out like a Netflix trailer.",
      author: "Indie artist",
      image: " https://placehold.co/80x80/333/fff?text=IA"
    },
    {
      quote: "His storytelling, style, and direction are next-level. Highly recommended.",
      author: "Charles F.",
      image: " https://placehold.co/80x80/333/fff?text=CF"
    }
  ];

  const processSteps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      ),
      title: "Brief",
      description: "You send the idea, vision, and requirements"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,18.5C8.41,18.5 5.5,15.59 5.5,12S8.41,5.5 12,5.5 18.5,8.41 18.5,12 15.59,18.5 12,18.5M12,2C6.48,2 2,6.48 2,12S6.48,22 12,22 22,16.52 22,11.04C22,6.9 18.84,3.5 14.7,3.1V5.18C17.56,5.78 19.7,8.3 19.7,11.04C19.7,14.96 16.42,18.07 12.5,18.07C8.58,18.07 5.3,14.96 5.3,11.04C5.3,7.12 8.38,3.93 12.3,3.93H12.5V2H12M12,7V12L16,14L16.7,12.8L13.5,11V7H12Z" />
        </svg>
      ),
      title: "Concept",
      description: "Get style draft + creative direction"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
        </svg>
      ),
      title: "Production",
      description: "AI generation + professional editing"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      ),
      title: "Delivery",
      description: "Final cut with sound, text, effects"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'pricing', 'testimonials', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openProjectModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setCurrentProject(null), 300);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-yellow-400">Tajudeen</span> Isa
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'pricing', 'testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-yellow-400 ${
                    activeSection === item ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800">
              <div className="px-6 py-4 space-y-4">
                {['home', 'about', 'portfolio', 'pricing', 'testimonials', 'process', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize py-2 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
          <img 
            src=" https://placehold.co/1920x1080/1a1a1a/ffffff?text=Cinematic+AI+Background" 
            alt="Cinematic AI" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Light Ray Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-1 h-96 bg-gradient-to-b from-transparent via-yellow-400 to-transparent transform -rotate-12"></div>
          <div className="absolute top-40 right-20 w-1 h-80 bg-gradient-to-b from-transparent via-yellow-400 to-transparent transform rotate-12"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up">
            Exciting <span className="text-yellow-400">AI Videos</span> That Tell Your Story.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Movie Trailers • Commercials • Music Videos • 3D Product Ads • UGC + More
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-lg"
            >
              See My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors text-lg"
            >
              Get A Quote
            </button>
            <button 
              onClick={() => openProjectModal(portfolioItems[0])}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-lg"
            >
              Watch Showreel
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <img 
                  src=" https://placehold.co/400x500/333/fff?text=Tajudeen+Isa" 
                  alt="Tajudeen Isa" 
                  className="w-full max-w-md rounded-lg shadow-2xl border-2 border-gray-800"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <p className="text-lg leading-relaxed text-gray-300 italic">
                  "Hi, I’m Tajudeen Isa, a creative AI director turning brands, songs, and stories into cinematic experiences.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mt-4">
                  Using Veo 3, Kling AI, and a custom AI workflow, I craft stunning visuals that break the scroll and captivate audiences — on screens big and small. I work with global clients, indie artists, and brands who want their stories told with soul."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Tools I Master</h3>
                <div className="flex flex-wrap gap-2">
                  {['Veo 3', 'Kling AI', 'Runway', 'Midjourney', 'After Effects', 'Cinema 4D'].map((tool) => (
                    <span key={tool} className="bg-gray-900 px-3 py-1 rounded-full text-sm border border-gray-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Breakthrough Projects</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• "Bali Love Story" - Romantic AI Short Film</li>
                  <li>• Fashion Trailers for Luxury Brands</li>
                  <li>• Morphic Logo Animations</li>
                  <li>• Award-Winning Horror Shorts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My AI Creations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI-generated videos that push the boundaries of what's possible
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 capitalize ${
                  selectedCategory === category.key
                    ? 'bg-yellow-400 text-black font-semibold'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => openProjectModal(item)}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-800">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-black/80 px-2 py-1 rounded">{item.duration}</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm capitalize">{item.category.replace('-', ' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional AI video production at accessible rates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold text-yellow-400">$150</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10–15s Vertical AI Video
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1 revision
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Simple concept + music sync
                </li>
              </ul>

              <button className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">
                Choose Starter
              </button>
            </div>

            {/* Pro Package */}
            <div className="bg-gray-900 rounded-2xl p-8 border-2 border-yellow-400 relative hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold text-yellow-400">$400</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30–60s Cinematic Video
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Trailer-style editing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom sound + concept
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2 revisions
                </li>
              </ul>

              <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Choose Pro
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold text-yellow-400">$800+</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 2 minutes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Voiceover, music, and SFX
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Storyboarding
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-scene AI generation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  3+ revisions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Licensing included
                </li>
              </ul>

              <button className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">
                Choose Premium
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
              Need something custom? <span className="ml-2 font-semibold">Let's Talk</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it – hear from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                  </div>
                </div>
                <blockquote className="text-lg italic text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Review Screenshots */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Fiverr Review</h3>
              <div className="bg-black rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium">Client Name</div>
                    <div className="text-sm text-gray-400">5 stars • July 2024</div>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  "Outstanding quality! The AI video looked so professional, people thought we spent thousands. Fast delivery and great communication."
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Upwork Feedback</h3>
              <div className="bg-black rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium">Creative Director</div>
                    <div className="text-sm text-gray-400">5 stars • June 2024</div>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  "Tajudeen has an incredible eye for cinematic detail. His AI videos have a human touch that's rare. Will definitely hire again!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, transparent process from idea to final video
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  
                  <div className="ml-8 bg-gray-900 rounded-2xl p-8 border border-gray-800 flex-1">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Epic</h2>
            <p className="text-xl text-gray-300">
              Ready to bring your vision to life with AI-powered video?
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400">
                    <option>Select project type</option>
                    <option>Cinematic Trailer</option>
                    <option>Music Video</option>
                    <option>Product Ad</option>
                    <option>UGC Content</option>
                    <option>3D Animation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Budget Range</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400">
                    <option>Select budget range</option>
                    <option>$150 - $300</option>
                    <option>$300 - $600</option>
                    <option>$600 - $1,000</option>
                    <option>$1,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Deadline</label>
                <input
                  type="date"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tell Me About Your Project</label>
                <textarea
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 resize-none"
                  placeholder="Describe your vision, goals, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors"
              >
                Let's Create Something Epic
              </button>
            </form>

            <div className="mt-8 text-center text-gray-400">
              <p>Or connect directly:</p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="hover:text-yellow-400 transition-colors">Fiverr Profile</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Upwork Profile</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Calendly Booking</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-yellow-400">Tajudeen</span> Isa
            </div>
            <p className="text-gray-400 mb-6">
              Turning visions into cinematic AI masterpieces
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">YouTube</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Vimeo</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">LinkedIn</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Tajudeen Isa. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {showModal && currentProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden">
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video bg-gray-900">
              <iframe
                src={currentProject.video}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{currentProject.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{currentProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.tools.map((tool) => (
                  <span key={tool} className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700">
                    {tool}
                  </span>
                ))}
              </div>

              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Commission This Style
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animate-fade-in {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default App;