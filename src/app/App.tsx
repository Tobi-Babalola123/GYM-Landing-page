import React, { useState, useEffect, useRef } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { 
  Dumbbell, 
  Users, 
  Trophy, 
  Clock, 
  CreditCard, 
  MapPin,
  Award,
  Target,
  Zap,
  Heart,
  Calendar,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  Check,
  Menu,
  X
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const featuresRef = useRef(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const classesRef = useRef(null);
  const classCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pricingRef = useRef(null);
  const pricingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const trainerRef = useRef(null);
  const lifestyleRef = useRef(null);
  const lifestyleCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.from(heroTextRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
      });

      // Hero buttons animation
      gsap.from(heroButtonsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });

      // Hero background parallax
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 150,
        ease: 'none'
      });

      // Feature cards stagger animation
      if (featureCardsRef.current.length > 0) {
        gsap.from(featureCardsRef.current, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 80,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Class cards horizontal scroll animation
      if (classCardsRef.current.length > 0) {
        gsap.from(classCardsRef.current, {
          scrollTrigger: {
            trigger: classesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: 100,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Pricing cards animation with scale
      if (pricingCardsRef.current.length > 0) {
        gsap.from(pricingCardsRef.current, {
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          scale: 0.8,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: 'back.out(1.4)'
        });
      }

      // Trainer section split animation
      gsap.from('.trainer-image', {
        scrollTrigger: {
          trigger: trainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.trainer-content', {
        scrollTrigger: {
          trigger: trainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
      });

      // Lifestyle cards animation
      if (lifestyleCardsRef.current.length > 0) {
        gsap.from(lifestyleCardsRef.current, {
          scrollTrigger: {
            trigger: lifestyleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 80,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Section titles animation
      gsap.utils.toArray('.section-title').forEach((title: any) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out'
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Dumbbell className={`w-8 h-8 mr-2 ${isScrolled ? 'text-[#1F7A63]' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Apex Performance Club
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#company" className={isScrolled ? 'text-gray-700 hover:text-[#1F7A63] transition-colors' : 'text-white hover:text-[#8ED081] transition-colors'}>
                Company
              </a>
              <a href="#classes" className={isScrolled ? 'text-gray-700 hover:text-[#1F7A63] transition-colors' : 'text-white hover:text-[#8ED081] transition-colors'}>
                Classes
              </a>
              <a href="#lifestyle" className={isScrolled ? 'text-gray-700 hover:text-[#1F7A63] transition-colors' : 'text-white hover:text-[#8ED081] transition-colors'}>
                Lifestyle
              </a>
              <a href="#membership" className={isScrolled ? 'text-gray-700 hover:text-[#1F7A63] transition-colors' : 'text-white hover:text-[#8ED081] transition-colors'}>
                Membership
              </a>
              <a href="#contact" className={isScrolled ? 'text-gray-700 hover:text-[#1F7A63] transition-colors' : 'text-white hover:text-[#8ED081] transition-colors'}>
                Contact
              </a>
              <Button 
                className="bg-[#1F7A63] hover:bg-[#166350] text-white"
              >
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 bg-white shadow-lg">
              <div className="flex flex-col space-y-4">
                <a href="#company" className="text-gray-700 hover:text-[#1F7A63] px-4">Company</a>
                <a href="#classes" className="text-gray-700 hover:text-[#1F7A63] px-4">Classes</a>
                <a href="#lifestyle" className="text-gray-700 hover:text-[#1F7A63] px-4">Lifestyle</a>
                <a href="#membership" className="text-gray-700 hover:text-[#1F7A63] px-4">Membership</a>
                <a href="#contact" className="text-gray-700 hover:text-[#1F7A63] px-4">Contact</a>
                <div className="px-4">
                  <Button className="w-full bg-[#1F7A63] hover:bg-[#166350] text-white">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758875569612-94d5e0f1a35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB0cmFpbmluZyUyMGd5bSUyMGZpdG5lc3N8ZW58MXx8fHwxNzczNDM2OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
          ref={heroRef}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight" ref={heroTextRef}>
            Transform Your Body In A Community That Pushes You To Be Your Best.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Train with expert coaches, access world-class facilities, and stay motivated with a supportive fitness community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" ref={heroButtonsRef}>
            <Button 
              size="lg"
              className="bg-[#1F7A63] hover:bg-[#166350] text-white px-8 py-6 text-lg"
            >
              Join Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1F7A63] px-8 py-6 text-lg"
            >
              View Memberships
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="company" className="py-20 bg-gray-50" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 section-title">
            Why Apex Performance?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => featureCardsRef.current[0] = el}>
              <div className="w-16 h-16 bg-[#8ED081]/20 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-[#1F7A63]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">State-of-the-Art Facilities</h3>
              <p className="text-gray-600">
                Access premium equipment and cutting-edge training technology designed to maximize your results.
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => featureCardsRef.current[1] = el}>
              <div className="w-16 h-16 bg-[#8ED081]/20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#1F7A63]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Coaching</h3>
              <p className="text-gray-600">
                Train with certified professionals who are dedicated to helping you achieve your fitness goals.
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => featureCardsRef.current[2] = el}>
              <div className="w-16 h-16 bg-[#8ED081]/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#1F7A63]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Dynamic Group Classes</h3>
              <p className="text-gray-600">
                Join energizing group sessions from HIIT to yoga, designed for all fitness levels.
              </p>
            </Card>

            {/* Feature Card 4 */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => featureCardsRef.current[3] = el}>
              <div className="w-16 h-16 bg-[#8ED081]/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#1F7A63]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">All-in-One Convenience</h3>
              <p className="text-gray-600">
                Everything you need under one roof - gym, cafe, spa, and more for complete wellness.
              </p>
            </Card>

            {/* Feature Card 5 */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => featureCardsRef.current[4] = el}>
              <div className="w-16 h-16 bg-[#8ED081]/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#1F7A63]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Extended Hours</h3>
              <p className="text-gray-600">
                Train on your schedule with 24/7 access to our facilities for ultimate flexibility.
              </p>
            </Card>

            {/* Feature Card 6 */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => featureCardsRef.current[5] = el}>
              <div className="w-16 h-16 bg-[#8ED081]/20 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-[#1F7A63]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Membership</h3>
              <p className="text-gray-600">
                Choose from monthly, quarterly, or annual plans that fit your lifestyle and budget.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-white" ref={classesRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 section-title">
            Explore Our Wide Range Of Classes
          </h2>
          
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6 min-w-max px-4">
              {[
                { name: 'HIIT', image: 'https://images.unsplash.com/photo-1662386392754-c0fe8e9dc7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxISUlUJTIwdHJhaW5pbmclMjB3b3Jrb3V0fGVufDF8fHx8MTc3MzQzNjk4NHww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Core Strength', image: 'https://images.unsplash.com/photo-1765302741884-e846c7a178df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JlJTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzMzNDA1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Kettlebell', image: 'https://images.unsplash.com/photo-1710814824560-943273e8577e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXR0bGViZWxsJTIwZXhlcmNpc2UlMjB3b3Jrb3V0fGVufDF8fHx8MTc3MzQzNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Strength Training', image: 'https://images.unsplash.com/photo-1770493895453-4f758c40d11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZHVtYmJlbGxzfGVufDF8fHx8MTc3MzM4NzM2OHww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Abs & Conditioning', image: 'https://images.unsplash.com/photo-1769196603011-8f1b5041cf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnMlMjBjb25kaXRpb25pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc3MzQzNjk4Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Factory Camp', image: 'https://images.unsplash.com/photo-1758875570256-6510adffb1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib290Y2FtcCUyMHRyYWluaW5nJTIwZ3JvdXB8ZW58MXx8fHwxNzczNDM2OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Yoga Flow', image: 'https://images.unsplash.com/photo-1597106647727-7ceaffd1abf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZmxvdyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzczNDM2OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Zumba', image: 'https://images.unsplash.com/photo-1759375201813-572504b6ba9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6dW1iYSUyMGRhbmNlJTIwZml0bmVzc3xlbnwxfHx8fDE3NzMzNjM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Step Cardio', image: 'https://images.unsplash.com/photo-1582049864843-b80ae123e9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVwJTIwYWVyb2JpY3MlMjBjYXJkaW98ZW58MXx8fHwxNzczNDM2OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Physiotherapy', image: 'https://images.unsplash.com/photo-1768508236664-3f294aaf7d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzM0MDU5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Spin Club', image: 'https://images.unsplash.com/photo-1760031670160-4da44e9596d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluJTIwY3ljbGluZyUyMGNsYXNzfGVufDF8fHx8MTc3MzQzNjk4OHww&ixlib=rb-4.1.0&q=80&w=1080' },
              ].map((classItem, idx) => (
                <div 
                  key={idx}
                  className="relative w-80 h-96 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0"
                  ref={el => classCardsRef.current[idx] = el}
                >
                  <img 
                    src={classItem.image} 
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{classItem.name}</h3>
                    <a href="#" className="flex items-center text-[#8ED081] hover:text-[#7BC070] transition-colors">
                      Explore Class <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="membership" className="py-20 bg-gray-50" ref={pricingRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 section-title">
            Find Your Perfect Plan
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Choose the membership option that best fits your lifestyle and fitness goals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Monthly Plan */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-all bg-white" ref={el => pricingCardsRef.current[0] = el}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Monthly</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">₦75,000</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to gym equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">All day access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Group fitness classes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Guest passes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Locker access</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-[#1F7A63] border-2 border-[#1F7A63] hover:bg-[#1F7A63] hover:text-white">
                Get Started
              </Button>
            </Card>

            {/* Quarterly Plan - Most Popular */}
            <Card className="p-8 rounded-2xl shadow-xl bg-[#1F7A63] text-white relative transform md:scale-105" ref={el => pricingCardsRef.current[1] = el}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#8ED081] text-[#1F7A63] px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">₦210,000</span>
                  <span className="text-gray-200 ml-2">/ quarter</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#8ED081] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Access to gym equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#8ED081] mr-3 mt-0.5 flex-shrink-0" />
                  <span>All day access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#8ED081] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Group fitness classes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#8ED081] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Guest passes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#8ED081] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Locker access</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-[#1F7A63] hover:bg-gray-100">
                Get Started
              </Button>
            </Card>

            {/* Yearly Plan */}
            <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-all bg-white" ref={el => pricingCardsRef.current[2] = el}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Yearly</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">₦720,000</span>
                  <span className="text-gray-600 ml-2">/ year</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to gym equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">All day access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Group fitness classes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Guest passes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#1F7A63] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Locker access</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-[#1F7A63] border-2 border-[#1F7A63] hover:bg-[#1F7A63] hover:text-white">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Trainer Section */}
      <section className="py-20 bg-white" ref={trainerRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl trainer-image">
              <img 
                src="https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzM0MjIxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Personal Trainers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="trainer-content">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Need A Coach To Mentor You?
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Our certified personal trainers are dedicated to helping you reach your fitness goals. With personalized workout plans, nutritional guidance, and continuous support, you'll have everything you need to succeed.
              </p>
              <p className="text-gray-700 text-lg mb-8">
                Whether you're new to fitness or looking to break through a plateau, our expert coaches will design a program tailored specifically to your needs, keeping you motivated and accountable every step of the way.
              </p>
              <Button className="bg-[#1F7A63] hover:bg-[#166350] text-white px-8 py-6 text-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle / Amenities Section */}
      <section id="lifestyle" className="py-20 bg-gray-50" ref={lifestyleRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 section-title">
            More Than Just A Gym
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Experience a complete wellness lifestyle with our premium amenities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cafe */}
            <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => lifestyleCardsRef.current[0] = el}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1633777050410-4dc5d0b23166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaGVhbHRoeSUyMHNtb290aGllc3xlbnwxfHx8fDE3NzM0MzY5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Apex Cafe"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Apex Cafe</h3>
                <p className="text-gray-600 mb-4">
                  Refuel with nutritious smoothies, healthy meals, and premium coffee. Our cafe offers everything you need for optimal performance.
                </p>
                <a href="#" className="flex items-center text-[#1F7A63] hover:text-[#166350] font-medium">
                  Learn More <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </div>
            </Card>

            {/* Barbershop */}
            <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => lifestyleCardsRef.current[1] = el}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMzQ1NzU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Apex Barbershop"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Apex Barbershop</h3>
                <p className="text-gray-600 mb-4">
                  Look your best with our professional grooming services. Expert cuts and styling to complement your fitness transformation.
                </p>
                <a href="#" className="flex items-center text-[#1F7A63] hover:text-[#166350] font-medium">
                  Learn More <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </div>
            </Card>

            {/* Recovery Spa */}
            <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white" ref={el => lifestyleCardsRef.current[2] = el}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1700522924565-9fad1c05469e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwcmVjb3Zlcnl8ZW58MXx8fHwxNzczNDM2OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Apex Recovery Spa"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Apex Recovery Spa</h3>
                <p className="text-gray-600 mb-4">
                  Accelerate recovery with massage therapy, sauna, and wellness treatments designed for peak performance.
                </p>
                <a href="#" className="flex items-center text-[#1F7A63] hover:text-[#166350] font-medium">
                  Learn More <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#8ED081]">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Lifestyle */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#8ED081]">Lifestyle</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apex Cafe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apex Barbershop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apex Recovery Spa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#8ED081]">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#classes" className="text-gray-400 hover:text-white transition-colors">Classes</a></li>
                <li><a href="#membership" className="text-gray-400 hover:text-white transition-colors">Membership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#8ED081]">Support</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-[#8ED081]" />
                  <a href="mailto:info@apexperformance.com" className="text-gray-400 hover:text-white transition-colors">
                    info@apexperformance.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-[#8ED081]" />
                  <a href="tel:+234-800-APEX-GYM" className="text-gray-400 hover:text-white transition-colors">
                    +234-800-APEX-GYM
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-[#8ED081] mt-1 flex-shrink-0" />
                  <span className="text-gray-400">
                    123 Fitness Boulevard,<br />Victoria Island, Lagos
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Dumbbell className="w-6 h-6 mr-2 text-[#8ED081]" />
                <span className="font-bold">Apex Performance Club</span>
              </div>
              
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-[#8ED081] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#8ED081] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#8ED081] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              
              <p className="text-gray-400 text-sm">
                © 2026 Apex Performance Club. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
