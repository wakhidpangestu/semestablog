import { Metadata } from 'next';
import GlassCard from '@/components/GlassCard';
import { Beaker, Atom, Calculator, Dna, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About - SemestaBlog',
  description: 'Learn about SemestaBlog, a SemestaLabs.id project to popularize science in a friendly way.',
};

const features = [
  {
    icon: Atom,
    title: 'Physics',
    description: 'Explore the fundamental laws that govern our universe',
  },
  {
    icon: Beaker,
    title: 'Chemistry',
    description: 'Discover the molecular world and chemical reactions',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Uncover the beauty and applications of mathematical concepts',
  },
  {
    icon: Dna,
    title: 'Biology',
    description: 'Understand life processes and biological systems',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Stay updated with cutting-edge technological advances',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About SemestaBlog
        </h1>
        <p className="text-xl text-white/80">
          Concise, inspiring science articles for curious minds
        </p>
      </div>

      {/* Mission Statement */}
      <GlassCard className="p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-4">
          SemestaBlog is a SemestaLabs.id project dedicated to popularizing science in a friendly and accessible way. 
          We believe that scientific knowledge should be available to everyone, regardless of their background or expertise level.
        </p>
        <p className="text-white/80 text-lg leading-relaxed">
          Our goal is to bridge the gap between complex scientific research and public understanding by presenting 
          cutting-edge discoveries and fundamental concepts in an engaging, easy-to-understand format.
        </p>
      </GlassCard>

      {/* What We Cover */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">What We Cover</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} className="p-6 text-center">
              <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Our Approach */}
      <GlassCard className="p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">📝 Concise Content</h3>
            <p className="text-white/80">
              We distill complex scientific concepts into digestible, engaging articles that respect your time 
              while delivering maximum value.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">🔬 Evidence-Based</h3>
            <p className="text-white/80">
              All our content is grounded in peer-reviewed research and current scientific consensus, 
              ensuring accuracy and reliability.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">🌍 Accessible Language</h3>
            <p className="text-white/80">
              We use clear, jargon-free language while maintaining scientific accuracy, making complex 
              topics understandable for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">💡 Practical Applications</h3>
            <p className="text-white/80">
              We highlight real-world applications and implications of scientific discoveries, 
              showing how science impacts daily life.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Team */}
      <GlassCard className="p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          SemestaBlog is created by a passionate team of scientists, educators, and science communicators 
          who share a common goal: making science accessible and exciting for everyone.
        </p>
        <p className="text-white/80 leading-relaxed">
          Our contributors include researchers, professors, and science enthusiasts from various fields, 
          each bringing their unique expertise and perspective to create comprehensive, accurate, and 
          engaging content.
        </p>
      </GlassCard>

      {/* Contact CTA */}
      <GlassCard className="p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-white/80 mb-6">
          Have questions, suggestions, or want to contribute? We&apos;d love to hear from you!
        </p>
        <a 
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-colors"
        >
          Get in Touch
        </a>
      </GlassCard>
    </div>
  );
}