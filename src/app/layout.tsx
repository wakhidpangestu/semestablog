import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import BottomNav from '@/components/BottomNav';
import Navbar from '@/components/Navbar';
import GridBackgroundWrapper from '@/components/GridBackgroundWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SemestaBlog - Concise, Inspiring Science Articles',
  description: 'SemestaBlog is a SemestaLabs.id project to popularize science in a friendly way.',
  keywords: ['science', 'physics', 'chemistry', 'mathematics', 'biology', 'technology'],
  authors: [{ name: 'SemestaLabs.id' }],
  openGraph: {
    title: 'SemestaBlog - Concise, Inspiring Science Articles',
    description: 'SemestaBlog is a SemestaLabs.id project to popularize science in a friendly way.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SemestaBlog - Concise, Inspiring Science Articles',
    description: 'SemestaBlog is a SemestaLabs.id project to popularize science in a friendly way.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <GridBackgroundWrapper>
              <Navbar />
              {/* Main Content */}
              <main className="flex-1 pt-20 md:pt-24 pb-20 md:pb-8">
                {children}
              </main>
              {/* Mobile Bottom Navigation */}
              <BottomNav />
              {/* Footer */}
              <footer className="border-t border-white/20 backdrop-blur-xl bg-white/5 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                  <p className="text-white/60 text-sm">
                    © {new Date().getFullYear()} — 
                    <a href="https://instagram.com/semestalabs.id" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors">SemestaLabs.id</a>
                  </p>
                  <div className="flex justify-center space-x-6 mt-4">
                    <Link href="/about" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                      About
                    </Link>
                    <Link href="/contact" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                      Contact
                    </Link>
                    <a href="https://github.com/wakhidpangestu/semestablog" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </footer>
            </GridBackgroundWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}