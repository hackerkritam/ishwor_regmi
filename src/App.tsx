import React, { useState, useEffect } from 'react';
import { motion, useScroll, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Ticket as Cricket, Cpu, Briefcase, BookOpen, Wifi, Users, DollarSign, Building2, Calendar, Phone, Mail, MapPin, Menu, X, MessageSquare, ThumbsUp, Award, Play } from 'lucide-react';
import ishwor from './ishwor_regmi.jpg';
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const navItems = ['About', 'Vision', 'Video', 'Achievements', 'Testimonials', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-700 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
            
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-700' : 'text-white'}`}>Ishwor Regmi</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={isScrolled ? 'text-gray-600' : 'text-white'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-600 hover:text-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Ishwor Regmi</h1>
              <p className="text-xl md:text-2xl mb-2">Candidate for FSU President</p>
              <p className="text-lg opacity-90">THA079BCE058 • Bachelor in Civil Engineering</p>
              <p className="text-lg opacity-90 mb-6">4th Semester • Thapathali Campus, Kathmandu</p>
              <motion.a
                href="#contact"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Campaign
              </motion.a>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={ishwor}
                alt="Campus"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-700 mr-3" />
                  <h2 className="text-3xl font-bold">About the Candidate</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 mb-4">
                      As an independent candidate for the Free Student Union (FSU) election, I am committed to bringing positive change to our campus. With a strong academic background and a deep understanding of student needs, I aim to create an environment that fosters both academic excellence and personal growth.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Election Date: Chaitra 5, 2081 BS
                    </p>
                    <div className="flex items-center space-x-4">
                      <motion.span
                        className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Award className="w-4 h-4 mr-2" /> Independent Candidate
                      </motion.span>
                      <motion.span
                        className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" /> Student-First Approach
                      </motion.span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={ishwor}
                      alt="Campus Life"
                      className="rounded-lg shadow-md"
                    />
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-4">Our Vision</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                We are committed to transforming our campus experience through these key initiatives that focus on academic excellence, infrastructure improvement, and student welfare.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cricket className="w-6 h-6" />,
                  title: "Cricket Net at Balkhu Ground",
                  description: "Establishing a vibrant cricket practice facility where passion meets practice."
                },
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Effective Microprocessor Lab",
                  description: "Creating a modern lab environment fostering innovation and hands-on learning."
                },
                {
                  icon: <Briefcase className="w-6 h-6" />,
                  title: "Managed Internships",
                  description: "Ensuring valuable experience with thoughtful attendance consideration."
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Financial Transparency",
                  description: "Annual financial report publication for complete transparency."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Empowered Clubs",
                  description: "Autonomous power to departmental and regional clubs."
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Monthly Talk Sessions",
                  description: "Regular CR assembly, meetings, and fund management."
                },
                {
                  icon: <Wifi className="w-6 h-6" />,
                  title: "Strong WiFi Coverage",
                  description: "Ensuring reliable internet connectivity in every classroom."
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Updated Library",
                  description: "Sufficient new syllabus books in the library."
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Student Voice",
                  description: "Regular forums for students to share their concerns and ideas."
                }
              ].map((item, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    className="bg-white rounded-lg p-6 shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4 text-blue-700">
                      {item.icon}
                      <h3 className="text-xl font-semibold ml-3">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Campaign Video</h2>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://youtube/79GJ3XQwe_U?si=RP_ZUMSBLQE5_jlA"
                  title="Campaign Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-8 text-center">
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Full Video
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Past Achievements</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Academic Excellence",
                    description: "Maintained top academic performance while actively participating in student affairs",
                    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
                  },
                  {
                    title: "Community Service",
                    description: "Led multiple community service initiatives benefiting local communities",
                    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                  },
                  {
                    title: "Leadership",
                    description: "Successfully organized various technical and cultural events on campus",
                    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Ayussma Adhikari",
                    role: "Civil Engineering Student",
                    text: "Ishwor has always been a voice for student rights and academic excellence. His vision for our campus is exactly what we need."
                  },
                  {
                    name: "Aayush shah ",
                    role: "Student Representative",
                    text: "His commitment to transparency and student welfare makes him the perfect candidate for FSU President."
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="w-6 h-6 text-blue-700 mr-3" />
                      <p className="text-gray-600">+ +977 986-6140598</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="w-6 h-6 text-blue-700 mr-3" />
                      <p className="text-gray-600">ishwor.regmi@gmail.com</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-6 h-6 text-blue-700 mr-3" />
                      <p className="text-gray-600">Thapathali Campus, Kathmandu</p>
                    </motion.div>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={4}
                        required
                      ></textarea>
                    </motion.div>
                    <motion.button
                      type="submit"
                      className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 mr-2" />
                  <h2 className="text-2xl font-bold">Vote for Progress</h2>
                </div>
                <p className="text-blue-200">
                  Together, let's build a better future for our campus community.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Campus Address</h3>
                <p className="text-blue-200">
                  Institute of Engineering<br />
                  Thapathali Campus<br />
                  Kathmandu, Nepal
                </p>
              </motion.div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center">
              <p className="text-blue-200">© 2024 Ishwor Regmi Campaign. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;