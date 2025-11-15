import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import ArchitecturalText from './components/ArchitecturalText'
import TiltedCard from './components/TiltedCard'
import SlidingPanel from './components/SlidingPanel'
import Beams from './components/Beams'
import CurvedLoop from './components/CurvedLoop'
import StudioCard from './components/StudioCard'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const projects = [
  {
    title: 'Modern Residence',
    description: 'A minimalist home that blurs the boundaries between indoor and outdoor spaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    slug: 'modern-residence',
  },
  {
    title: 'Commercial Complex',
    description: 'A dynamic commercial space with fluid geometries and natural light integration.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    slug: 'commercial-complex',
  },
  {
    title: 'Cultural Center',
    description: 'A cultural hub that serves as a gathering place for the community.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    slug: 'cultural-center',
  },
  {
    title: 'Urban Tower',
    description: 'A vertical living solution that maximizes space and views.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
    slug: 'urban-tower',
  },
  {
    title: 'Rural Retreat',
    description: 'A peaceful escape that harmonizes with its natural surroundings.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    slug: 'rural-retreat',
  },
  {
    title: 'Educational Facility',
    description: 'An innovative learning environment designed to inspire creativity.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop',
    slug: 'educational-facility',
  },
]

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="relative h-screen overflow-hidden">
          {/* Geometric Grid Overlay */}
          <div className="absolute inset-0 grid-overlay opacity-30" />
          
          {/* Navigation in Hero Section */}
          <Navigation />
          
          {/* Hero Content - Fixed at Top */}
          <div className="absolute top-0 left-0 right-0 z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24 md:pt-32">
            <ArchitecturalText variant="h1" className="text-white mb-3 sm:mb-4 leading-[0.9]">
              Architectural
              <br />
              Excellence
            </ArchitecturalText>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-4"
            >
              Modern design inspired by contemporary architecture.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Where form meets function in spatial harmony.
            </motion.p>
          </div>

          {/* Curved Loop Animation - At Absolute Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="max-w-6xl mx-auto">
              <CurvedLoop
                marqueeText="Design ✦ Innovation ✦ Craftsmanship ✦ Sustainability ✦ Excellence ✦"
                speed={2}
                curveAmount={0}
                direction="left"
                interactive={true}
                className="text-white"
              />
            </div>
          </div>
        </section>

        {/* About Architect Section */}
        <section id="about" className="py-16 sm:py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <ArchitecturalText variant="h1" className="text-white -mt-[5px]">
                About
              </ArchitecturalText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* Architect Image with Tilted Card */}
              <div className="relative flex justify-center md:justify-center md:pl-8 h-[300px] sm:h-[350px] md:h-[400px]">
                <div className="w-full max-w-sm h-full">
                  <TiltedCard
                    imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                    altText="Architect"
                    captionText="Lead Architect"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="absolute inset-0 bg-black/40 flex items-end p-4 sm:p-6 rounded-[15px]">
                        <div>
                          <h3 className="text-white text-lg sm:text-xl font-display font-bold mb-2">
                            Lead Architect
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm">
                            Licensed Architect • 15+ Years Experience
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>

              {/* Architect Info */}
              <div className="h-auto md:h-[400px] flex flex-col">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-2">
                    Lead Architect
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm mb-6 sm:mb-8">
                    Licensed Architect • 15+ Years Experience
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-auto">
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    A visionary architect with over 15 years of experience in creating
                    innovative spaces that blend functionality with aesthetic excellence.
                    Specializing in contemporary design, sustainable architecture,
                    and transformative urban planning.
                  </p>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    Each project is approached with meticulous attention to detail,
                    ensuring that every space tells a story through spatial relationships,
                    material choices, and the careful consideration of how people
                    experience and move through space.
                  </p>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    With a deep understanding of both traditional craftsmanship and
                    cutting-edge technology, the work bridges the gap between timeless
                    architectural principles and modern innovation. Every design
                    decision is informed by context, climate, and the unique needs
                    of those who will inhabit the spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <ArchitecturalText variant="h1" className="text-white">
                Projects
              </ArchitecturalText>
            </div>

            {/* Blueprint-style Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {projects.map((project) => (
                <div key={project.slug} className="h-[300px] sm:h-[350px] md:h-[400px]">
                  <TiltedCard
                    imageSrc={project.image}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="absolute inset-0 bg-black/40 flex items-end p-4 sm:p-6 rounded-[15px]">
                        <div>
                          <h3 className="text-white text-lg sm:text-xl font-display font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Section */}
        <section id="studio" className="py-16 sm:py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <ArchitecturalText variant="h1" className="text-white">
                Studio
              </ArchitecturalText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" style={{ perspective: '1000px' }}>
              <StudioCard delay={0.1} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8 h-full flex flex-col">
                <h2 className="text-xl sm:text-2xl font-display font-semibold mb-4 sm:mb-6 text-white">
                  Philosophy
                </h2>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    Every space tells a story. We design with intention, creating
                    narratives through form, light, and materiality that resonate
                    with those who inhabit our buildings.
                  </p>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    We celebrate materials for what they are. Concrete, steel,
                    glass, and wood are used authentically, revealing their
                    inherent beauty and structural logic.
                  </p>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    Our approach to architecture is rooted in a deep respect for
                    context, climate, and the unique needs of each project. We believe
                    that great architecture emerges from the careful balance between
                    innovation and tradition, between bold vision and practical
                    functionality.
                  </p>
                </div>
              </StudioCard>

              <StudioCard delay={0.2} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8 h-full flex flex-col">
                <h2 className="text-xl sm:text-2xl font-display font-semibold mb-4 sm:mb-6 text-white">
                  Approach
                </h2>
                <div className="space-y-4 sm:space-y-6 flex-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-semibold mb-2 text-white">
                      Research & Analysis
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                      Deep understanding of site, context, and program requirements
                      forms the foundation of every project. We conduct thorough
                      research to ensure our designs respond meaningfully to their
                      environment and purpose.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-semibold mb-2 text-white">
                      Concept Development
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                      We explore multiple design directions, always seeking the
                      most elegant and functional solution. Through iterative
                      refinement, we develop concepts that are both innovative
                      and deeply rooted in architectural principles.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-semibold mb-2 text-white">
                      Refinement & Detailing
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                      The magic is in the details. We obsess over every junction,
                      every material transition, every moment of human interaction.
                      This meticulous attention ensures that our buildings achieve
                      both aesthetic excellence and lasting quality.
                    </p>
                  </div>
                </div>
              </StudioCard>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 md:py-32 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <ArchitecturalText variant="h1" className="text-white mb-4 sm:mb-6">
                Contact
              </ArchitecturalText>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-white/90"
              >
                Let's discuss your next architectural project.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-2"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8 lg:p-12">
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-lg sm:text-xl font-display font-semibold mb-3 sm:mb-4 text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@archstudio.com"
                      className="text-white/90 hover:text-white transition-colors block text-sm sm:text-base break-all"
                    >
                      hello@archstudio.com
                    </a>
                  </motion.div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-lg sm:text-xl font-display font-semibold mb-3 sm:mb-4 text-white">
                      Phone
                    </h3>
                    <a
                      href="tel:+15551234567"
                      className="text-white/90 hover:text-white transition-colors block text-sm sm:text-base"
                    >
                      +1 (555) 123-4567
                    </a>
                  </motion.div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="text-lg sm:text-xl font-display font-semibold mb-3 sm:mb-4 text-white">
                      Location
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      123 Architecture Street
                      <br />
                      Design City, DC 12345
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App

