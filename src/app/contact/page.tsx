'use client';

import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import { Mail, MessageSquare, User, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-white/80">
          Have questions or suggestions? We&apos;d love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center space-x-3">
              <CheckCircle className="text-green-400" size={20} />
              <span className="text-green-300">
                Thank you! Your message has been received.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2 flex items-center space-x-2">
                <User size={18} />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/80 mb-2 flex items-center space-x-2">
                <Mail size={18} />
                <span>Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 mb-2 flex items-center space-x-2">
                <MessageSquare size={18} />
                <span>Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 transition-all resize-vertical"
                placeholder="Tell us what&apos;s on your mind..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-blue-300/30 border-t-blue-300 rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </GlassCard>

        {/* Contact Information */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-white/80 mb-4">
              We&apos;re always excited to connect with fellow science enthusiasts, educators, and curious minds.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail size={18} />
                <span>hello@semestalabs.id</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MessageSquare size={18} />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Contribute</h3>
            <p className="text-white/80 mb-4">
              Are you a scientist, researcher, or educator? We welcome guest contributions and collaborations.
            </p>
            <ul className="text-white/70 space-y-2">
              <li>• Submit article ideas</li>
              <li>• Share research findings</li>
              <li>• Suggest topics to cover</li>
              <li>• Report errors or improvements</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <p className="text-white/80 mb-4">
              Stay updated with the latest science articles and discoveries.
            </p>
            <div className="flex space-x-4">
              <button className="p-3 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors">
                Twitter
              </button>
              <button className="p-3 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors">
                LinkedIn
              </button>
              <a
                href="https://github.com/wakhidpangestu/semestablog"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors"
              >
                GitHub
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}