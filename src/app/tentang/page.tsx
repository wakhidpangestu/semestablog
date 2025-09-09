import { Metadata } from 'next';
import GlassCard from '@/components/GlassCard';
import { Beaker, Atom, Calculator, Dna, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang - SemestaBlog',
  description: 'Pelajari tentang SemestaBlog, proyek SemestaLabs.id untuk mempopulerkan sains dengan cara yang ramah.',
};

const features = [
  {
    icon: Atom,
    title: 'Physics',
    description: 'Jelajahi hukum fundamental yang mengatur alam semesta kita',
  },
  {
    icon: Beaker,
    title: 'Chemistry',
    description: 'Temukan dunia molekuler dan reaksi kimia',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Ungkap keindahan dan aplikasi konsep matematika',
  },
  {
    icon: Dna,
    title: 'Biology',
    description: 'Pahami proses kehidupan dan sistem biologis',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Tetap update dengan kemajuan teknologi terkini',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Tentang SemestaBlog
        </h1>
        <p className="text-xl text-white/80">
          Artikel sains ringkas dan inspiratif untuk pikiran yang ingin tahu
        </p>
      </div>

      {/* Mission Statement */}
      <GlassCard className="p-8 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">Misi Kami</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-4">
          SemestaBlog adalah proyek SemestaLabs.id yang didedikasikan untuk mempopulerkan sains dengan cara yang ramah dan mudah diakses. 
          Kami percaya bahwa pengetahuan ilmiah harus tersedia untuk semua orang, tanpa memandang latar belakang atau tingkat keahlian.
        </p>
        <p className="text-white/80 text-lg leading-relaxed">
          Tujuan kami adalah menjembatani kesenjangan antara riset ilmiah kompleks dan pemahaman publik dengan menghadirkan 
          penemuan terkini dan konsep fundamental dalam format yang menarik dan mudah dipahami.
        </p>
      </GlassCard>

      {/* What We Cover */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Apa yang Kami Bahas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, index) => (
            <GlassCard 
              key={index} 
              className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-72"
            >
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
      <GlassCard className="p-8 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">Pendekatan Kami</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">📝 Konten Ringkas</h3>
            <p className="text-white/80">
              Kami merangkum konsep ilmiah yang kompleks menjadi artikel yang mudah dipahami dan menarik, 
              menghargai waktu Anda sambil menyampaikan informasi dengan maksimal.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">🔬 Berdasarkan Bukti</h3>
            <p className="text-white/80">
              Semua konten kami didasarkan pada penelitian peer-reviewed dan konsensus ilmiah terkini, 
              memastikan akurasi dan keandalan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">🌍 Bahasa yang Mudah Dipahami</h3>
            <p className="text-white/80">
              Kami menggunakan bahasa yang jelas dan bebas jargon sambil tetap mempertahankan akurasi ilmiah, 
              membuat topik kompleks dapat dimengerti oleh semua orang.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">💡 Aplikasi Praktis</h3>
            <p className="text-white/80">
              Kami menyoroti aplikasi dan implikasi nyata dari penemuan ilmiah, 
              menunjukkan bagaimana sains memengaruhi kehidupan sehari-hari.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Team */}
      <GlassCard className="p-8 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">Tim Kami</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          SemestaBlog dibuat oleh tim yang bersemangat terdiri dari ilmuwan, pendidik, dan komunikator sains 
          yang memiliki tujuan bersama: membuat sains dapat diakses dan menarik bagi semua orang.
        </p>
        <p className="text-white/80 leading-relaxed">
          Kontributor kami termasuk peneliti, profesor, dan penggemar sains dari berbagai bidang, 
          masing-masing membawa keahlian dan perspektif unik untuk menciptakan konten yang komprehensif, akurat, dan menarik.
        </p>
      </GlassCard>

      {/* Contact CTA */}
      <GlassCard className="p-8 text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">Bergabung dengan Komunitas Kami</h2>
        <p className="text-white/80 mb-6">
          Punya pertanyaan, saran, atau ingin berkontribusi? Kami ingin mendengar dari Anda!
        </p>
        <a 
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full hover:bg-blue-400/40 hover:text-white transition-all duration-300 font-semibold"
        >
          Hubungi Kami
        </a>
      </GlassCard>
    </div>
  );
}
