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
    
    // Simulasi pengiriman form
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset pesan sukses setelah 5 detik
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Hubungi Kami
        </h1>
        <p className="text-xl text-white/80">
          Punya pertanyaan atau saran? Kami ingin mendengar dari Anda!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Kontak */}
        <GlassCard className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all">
          <h2 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h2>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-400/20 rounded-xl flex items-center space-x-3">
              <CheckCircle className="text-green-400" size={20} />
              <span className="text-green-300">
                Terima kasih! Pesan Anda telah diterima.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2 flex items-center space-x-2">
                <User size={18} />
                <span>Nama</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/20 transition-all"
                placeholder="Nama lengkap Anda"
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
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/20 transition-all"
                placeholder="email.anda@contoh.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 mb-2 flex items-center space-x-2">
                <MessageSquare size={18} />
                <span>Pesan</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/20 transition-all resize-vertical"
                placeholder="Tulis apa yang ingin Anda sampaikan..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-blue-500/20 text-blue-300 border border-blue-400/20 rounded-full hover:bg-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-blue-300/30 border-t-blue-300 rounded-full animate-spin" />
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Kirim Pesan</span>
                </>
              )}
            </button>
          </form>
        </GlassCard>

        {/* Informasi Kontak */}
        <div className="space-y-6">
          <GlassCard className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all">
            <h3 className="text-xl font-bold text-white mb-4">Hubungi Kami</h3>
            <p className="text-white/80 mb-4">
              Kami selalu senang terhubung dengan penggemar sains, pendidik, dan orang-orang yang ingin tahu.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail size={18} />
                <span>hello@semestalabs.id</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MessageSquare size={18} />
                <span>Balasan dalam 24 jam</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all">
            <h3 className="text-xl font-bold text-white mb-4">Kontribusi</h3>
            <p className="text-white/80 mb-4">
              Apakah Anda ilmuwan, peneliti, atau pendidik? Kami menyambut kontribusi tamu dan kolaborasi.
            </p>
            <ul className="text-white/70 space-y-2">
              <li>• Kirim ide artikel</li>
              <li>• Bagikan hasil penelitian</li>
              <li>• Sarankan topik untuk dibahas</li>
              <li>• Laporkan kesalahan atau saran perbaikan</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all">
            <h3 className="text-xl font-bold text-white mb-4">Ikuti Kami</h3>
            <p className="text-white/80 mb-4">
              Tetap update dengan artikel sains dan penemuan terbaru.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://instagram.com/wakhidpangestu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-pink-500/20 text-pink-300 rounded-full hover:bg-pink-500/30 transition-colors whitespace-nowrap"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/in/wakhidpangestu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/30 transition-colors whitespace-nowrap"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/wakhidpangestu/semestablog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-500/20 text-gray-300 rounded-full hover:bg-gray-500/30 transition-colors whitespace-nowrap"
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
