import { Post } from '@/types';

// Tambahkan data baru ke array posts utama
export const posts: Post[] = [
  {
    id: "1",
    slug: "quantum-entanglement-explained",
    title: "Quantum Entanglement: Fenomena Aksi Jarak Jauh yang Misterius",
    excerpt: "Jelajahi fenomena menakjubkan quantum entanglement dan implikasinya untuk fisika modern serta teknologi masa depan.",
    content: `# Quantum Entanglement: Fenomena Aksi Jarak Jauh yang Misterius

Quantum entanglement adalah salah satu fenomena paling menarik dalam mekanika kuantum, yang oleh Einstein disebut sebagai "aksi aneh dari kejauhan". Fenomena ini terjadi ketika partikel-partikel saling terhubung sehingga keadaan kuantum masing-masing tidak bisa dijelaskan secara terpisah.

## Apa itu Quantum Entanglement?

Ketika dua partikel menjadi terentang, pengukuran pada satu partikel akan langsung memengaruhi partikel lainnya, tidak peduli seberapa jauh jaraknya. Koneksi instan ini tampak bertentangan dengan prinsip lokalitas, yang menyatakan bahwa objek hanya dipengaruhi oleh lingkungan terdekatnya.

## Paradoks EPR

Pada tahun 1935, Einstein, Podolsky, dan Rosen (EPR) mengajukan eksperimen pemikiran untuk menantang kelengkapan mekanika kuantum. Mereka berpendapat bahwa mekanika kuantum tidak lengkap karena memungkinkan aksi instan dari jarak jauh, yang bertentangan dengan relativitas khusus.

## Teorema Bell dan Verifikasi Eksperimen

Teorema John Stewart Bell tahun 1964 memberikan cara untuk menguji apakah quantum entanglement benar-benar menunjukkan korelasi non-lokal. Eksperimen selanjutnya, terutama oleh Alain Aspect pada 1980-an, membuktikan bahwa quantum entanglement nyata dan alam memang menunjukkan korelasi non-lokal.

## Aplikasi dalam Teknologi Modern

Quantum entanglement memiliki aplikasi praktis seperti:

- Quantum Computing: Qubit yang terentang dapat melakukan komputasi paralel
- Quantum Cryptography: Saluran komunikasi yang sangat aman
- Quantum Teleportation: Transfer keadaan kuantum
- Quantum Sensing: Pengukuran presisi tinggi

## Masa Depan Teknologi Kuantum

Seiring pemahaman dan pemanfaatan quantum entanglement berkembang, kita semakin dekat dengan internet kuantum dan komputer kuantum yang dapat merevolusi dunia komputasi dan komunikasi.

Quantum entanglement tetap menjadi salah satu aspek paling indah dan misterius dari alam semesta, menantang intuisi klasik kita dan membuka pintu bagi teknologi revolusioner.`,
    author: "Surya Dwi R.",
    date: "2025-09-02T10:00:00Z",
    category: "Physics",
    tags: ["quantum mechanics", "entanglement", "physics", "technology"],
    heroImage: "/images/quantum-entanglement.png",
    trendingScore: 95
  },
  {
    id: "2",
    slug: "crispr-gene-editing-revolution",
    title: "CRISPR: Revolusi Pengeditan Gen yang Mengubah Dunia Medis",
    excerpt: "Pelajari bagaimana teknologi CRISPR-Cas9 merevolusi rekayasa genetika dan potensinya untuk menyembuhkan penyakit genetik.",
    content: `# CRISPR: Revolusi Pengeditan Gen yang Mengubah Dunia Medis

CRISPR-Cas9 telah menjadi salah satu alat paling kuat dalam biologi modern, menawarkan presisi luar biasa dalam pengeditan gen. Teknologi revolusioner ini mengubah cara kita menangani penyakit genetik dan memahami kehidupan.

## Memahami CRISPR-Cas9

CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) adalah mekanisme pertahanan alami yang ditemukan pada bakteri. Ilmuwan telah mengadaptasi sistem ini menjadi alat yang dapat diprogram untuk mengedit DNA dengan presisi tinggi.

### Cara Kerja

1. Guide RNA: Mengarahkan enzim Cas9 ke urutan DNA target
2. Cas9 Enzyme: Bertindak sebagai gunting molekuler untuk memotong DNA
3. Repair Mechanism: Sistem perbaikan alami sel memperbaiki potongan DNA, memungkinkan modifikasi yang presisi

## Aplikasi Medis

Teknologi CRISPR menjanjikan pengobatan untuk berbagai kondisi:

- Sickle Cell Disease: Mengoreksi mutasi genetik penyebab penyakit
- Cancer Treatment: Merekayasa sel imun agar lebih efektif melawan tumor
- Inherited Blindness: Mengembalikan penglihatan dengan memperbaiki cacat genetik
- Muscular Dystrophy: Berpotensi memulihkan fungsi otot

## Pertimbangan Etis

Kekuatan CRISPR menimbulkan pertanyaan etis penting:

- Haruskah kita mengedit embrio manusia?
- Apa konsekuensi jangka panjang dari modifikasi genetik?
- Bagaimana memastikan akses terapi gen yang adil?

## Terobosan Terkini

Uji klinis terbaru menunjukkan keberhasilan luar biasa dalam mengobati pasien sickle cell disease dan beta-thalassemia, beberapa pasien bahkan tidak lagi membutuhkan transfusi.

## Masa Depan Pengeditan Gen

Seiring teknologi CRISPR terus berkembang, kita dapat mengharapkan:

- Alat pengeditan yang lebih presisi dengan efek samping minimal
- Aplikasi yang lebih luas di luar kesehatan manusia
- Integrasi dengan bioteknologi lain
- Solusi potensial untuk tantangan global seperti ketahanan pangan

CRISPR adalah perubahan paradigma di dunia medis, menawarkan harapan untuk mengobati penyakit genetik yang sebelumnya tak tersembuhkan, sekaligus menantang kita untuk mempertimbangkan implikasi etis dari menulis ulang kode kehidupan.`,
    author: "Surya Dwi R.",
    date: "2025-09-02T14:30:00Z",
    category: "Biology",
    tags: ["CRISPR", "gene editing", "medicine", "biotechnology"],
    heroImage: "/images/crispr.png",
    trendingScore: 88
  },
  {
    id: "3",
    slug: "artificial-intelligence-neural-networks",
  title: "Neural Networks: Bagaimana AI Belajar Berpikir",
  excerpt: "Menyelami dunia menarik artificial neural networks dan memahami bagaimana mesin belajar mengenali pola serta mengambil keputusan.",
  content: `# Neural Networks: Bagaimana AI Belajar Berpikir

Artificial neural networks adalah tulang punggung kecerdasan buatan modern, meniru cara otak biologis memproses informasi. Model komputasi ini telah merevolusi machine learning dan terus mendorong inovasi di berbagai bidang.

## Inspirasi Biologis

Neural networks terinspirasi dari struktur dan fungsi neuron biologis di otak. Seperti neuron yang berkomunikasi melalui sinapsis, neural networks menggunakan fungsi matematis untuk memproses dan mentransmisikan informasi.

### Komponen Kunci

- Neurons (Nodes): Unit pemrosesan dasar yang menerima, memproses, dan mentransmisikan informasi
- Weights: Nilai numerik yang menentukan kekuatan koneksi antar neuron
- Activation Functions: Fungsi matematis yang menentukan apakah neuron diaktifkan
- Layers: Kelompok neuron yang memproses informasi pada tingkat abstraksi berbeda

## Jenis Neural Networks

### Feedforward Networks
Tipe paling sederhana di mana informasi mengalir satu arah dari input ke output.

### Convolutional Neural Networks (CNNs)
Spesialisasi untuk memproses data berbentuk grid seperti gambar, menggunakan operasi konvolusi untuk mendeteksi fitur.

### Recurrent Neural Networks (RNNs)
Dirancang untuk menangani data berurutan dengan menyimpan memori input sebelumnya.

### Transformer Networks
Arsitektur terbaru yang mendukung large language models seperti GPT, menggunakan attention mechanism untuk memproses informasi.

## Proses Pembelajaran

Neural networks belajar melalui proses yang disebut backpropagation:

1. Forward Pass: Data input mengalir melalui jaringan untuk menghasilkan output
2. Loss Calculation: Menghitung perbedaan antara output prediksi dan aktual
3. Backward Pass: Error disebarkan kembali melalui jaringan
4. Weight Updates: Parameter jaringan disesuaikan untuk meminimalkan error

## Aplikasi di Dunia Nyata

Neural networks mendukung banyak teknologi yang kita gunakan sehari-hari:

- Image Recognition: Mengidentifikasi objek, wajah, dan scene dalam foto
- Natural Language Processing: Terjemahan bahasa dan generasi teks
- Autonomous Vehicles: Memproses data sensor untuk navigasi
- Medical Diagnosis: Menganalisis citra medis dan data pasien
- Recommendation Systems: Menyarankan konten berdasarkan preferensi pengguna

## Tantangan dan Batasan

Meskipun kuat, neural networks menghadapi beberapa tantangan:

- Black Box Problem: Sulit memahami bagaimana keputusan dibuat
- Data Requirements: Membutuhkan data training dalam jumlah besar
- Computational Resources: Konsumsi energi tinggi untuk training
- Bias and Fairness: Risiko mempertahankan bias dalam data training

## Masa Depan Neural Networks

Tren penelitian neural network yang muncul antara lain:

- Neuromorphic Computing: Hardware yang meniru struktur otak
- Few-Shot Learning: Belajar dari contoh minimal
- Explainable AI: Membuat keputusan neural network lebih dapat dimengerti
- Energy-Efficient Architectures: Mengurangi kebutuhan komputasi

Neural networks terus berkembang, mendekatkan kita pada artificial general intelligence sekaligus menimbulkan pertanyaan penting tentang kolaborasi manusia-mesin di masa depan.`,
    author: "Nagita Destiani",
    date: "2025-09-09T09:15:00Z",
    category: "Technology",
    tags: ["AI", "neural networks", "machine learning", "deep learning"],
    heroImage: "/images/neural-networks.png",
    trendingScore: 92
  },
  {
    id: "4",
    slug: "calculus-real-world-applications",
  title: "Calculus dalam Aksi: Aplikasi Dunia Nyata yang Tak Pernah Anda Duga",
  excerpt: "Temukan bagaimana kalkulus menggerakkan segalanya, dari kamera smartphone hingga misi luar angkasa, menjadikan matematika abstrak sangat praktis.",
  content: `# Calculus dalam Aksi: Aplikasi Dunia Nyata yang Tak Pernah Anda Duga

Kalkulus, yang sering dianggap sebagai matematika abstrak, sebenarnya adalah salah satu alat paling praktis dalam sains dan rekayasa. Dari smartphone di saku Anda hingga satelit yang mengorbit Bumi, kalkulus bekerja di balik layar untuk mewujudkan kehidupan modern.

## Fondasi Perubahan

Kalkulus pada dasarnya membahas perubahan dan gerak. Dikembangkan secara independen oleh Isaac Newton dan Gottfried Leibniz pada abad ke-17, kalkulus menyediakan kerangka matematika untuk memahami bagaimana besaran berubah seiring waktu dan ruang.

### Konsep Inti

- Derivatives: Mengukur laju perubahan (kemiringan, kecepatan, percepatan)
- Integrals: Menghitung akumulasi besaran (luas, volume, jarak total)
- Limits: Mendefinisikan perilaku tepat di batas dan tak hingga

## Keajaiban Rekayasa

### Kamera Smartphone
Kamera ponsel Anda menggunakan kalkulus untuk:
- Autofocus: Turunan membantu mengoptimalkan posisi lensa untuk gambar paling tajam
- Image Stabilization: Kalkulus memproses data sensor gerak untuk mengurangi goyangan tangan
- HDR Processing: Integral menggabungkan beberapa eksposur untuk pencahayaan optimal

### Keamanan Otomotif
Mobil modern mengandalkan kalkulus untuk:
- Anti-lock Braking Systems (ABS): Turunan memantau laju rotasi roda
- Airbag Deployment: Kalkulus menentukan waktu optimal berdasarkan gaya benturan
- Fuel Injection: Algoritma optimasi memaksimalkan efisiensi

## Aplikasi Medis

### Pencitraan Medis
- CT Scans: Inverse Radon transform (kalkulus integral) merekonstruksi citra 3D
- MRI: Fourier transform memproses data gelombang radio
- Ultrasound: Persamaan gelombang dan kalkulus menciptakan citra real-time

### Dosis Obat
Farmakokinetika menggunakan persamaan diferensial untuk memodelkan:
- Laju penyerapan obat
- Metabolisme dan eliminasi
- Jadwal dosis optimal

## Eksplorasi Luar Angkasa

### Mekanika Orbit
Kalkulus memungkinkan:
- Trajectory Planning: Optimasi jalur pesawat luar angkasa
- Gravity Assists: Memanfaatkan gravitasi planet untuk mempercepat pesawat
- Landing Calculations: Kontrol presisi saat pendaratan

### Teknologi GPS
GPS Anda bergantung pada:
- Relativistic Corrections: Persamaan Einstein melibatkan kalkulus tingkat lanjut
- Trilateration: Perhitungan geometris menggunakan sinyal dari beberapa satelit
- Error Minimization: Algoritma optimasi meningkatkan akurasi

## Ekonomi dan Keuangan

### Analisis Pasar
- Options Pricing: Persamaan Black-Scholes menggunakan kalkulus stokastik
- Risk Management: Turunan mengukur sensitivitas portofolio
- Economic Modeling: Persamaan diferensial menggambarkan dinamika pasar

### Optimasi Rantai Pasok
Perusahaan menggunakan kalkulus untuk:
- Manajemen inventaris
- Penjadwalan produksi
- Minimasi biaya

## Ilmu Lingkungan

### Pemodelan Iklim
- Weather Prediction: Persamaan diferensial parsial memodelkan dinamika atmosfer
- Ocean Currents: Persamaan dinamika fluida memprediksi pergerakan air
- Pollution Dispersion: Model melacak penyebaran polutan

### Energi Terbarukan
- Wind Turbine Design: Optimasi bentuk dan sudut baling-baling
- Solar Panel Efficiency: Memaksimalkan penangkapan energi sepanjang hari
- Grid Integration: Menyeimbangkan suplai dan permintaan secara real-time

## Komputer Grafis dan Gaming

### 3D Rendering
- Lighting Calculations: Integral menghitung pencahayaan realistis
- Animation: Turunan menciptakan kurva gerak yang halus
- Physics Simulation: Persamaan diferensial memodelkan perilaku objek realistis

### Virtual Reality
Sistem VR menggunakan kalkulus untuk:
- Pelacakan kepala dan prediksi gerak
- Interaksi fisika realistis
- Penempatan audio imersif

## Matematika yang Tak Terlihat

Kalkulus sangat tertanam dalam teknologi modern sehingga kita jarang menyadari kehadirannya. Setiap kali Anda:
- Menggunakan navigasi GPS
- Memotret dengan ponsel
- Streaming video online
- Mengecek prakiraan cuaca
- Menggunakan pengenalan suara

Anda sedang memanfaatkan kalkulus yang bekerja diam-diam di balik layar.

## Belajar Kalkulus Saat Ini

Memahami kalkulus membuka pintu ke:
- Karir teknik dan teknologi
- Data science dan machine learning
- Analisis keuangan dan pemodelan
- Riset dan penemuan ilmiah

Alat matematika yang dikembangkan berabad-abad lalu ini terus membentuk dunia modern, membuktikan bahwa matematika abstrak sering menjadi kebutuhan praktis di masa depan.`,
    author: "Surya Dwi R.",
    date: "2025-09-01T11:45:00Z",
    category: "Mathematics",
    tags: ["calculus", "applications", "engineering", "technology"],
    heroImage: "/images/calculus-applications.png",
    trendingScore: 78
  },
  {
    id: "5",
    slug: "periodic-table-modern-discoveries",
  title: "Melebihi 118: Pencarian Unsur Baru dalam Tabel Periodik",
  excerpt: "Jelajahi riset mutakhir yang mendorong batas tabel periodik dan pencarian unsur superberat.",
  content: `# Melebihi 118: Pencarian Unsur Baru dalam Tabel Periodik

Tabel periodik, salah satu pencapaian terbesar sains, terus berkembang seiring para peneliti mendorong batas fisika atom. Dengan 118 unsur yang telah dikonfirmasi, ilmuwan kini menjelajah wilayah tak dikenal, mencari unsur superberat yang hanya ada dalam sepersekian detik.

## Batas Terkini

Penambahan terbaru pada tabel periodik adalah unsur 113 (Nihonium), 115 (Moscovium), 117 (Tennessine), dan 118 (Oganesson), yang resmi dinamai pada 2016. Unsur superberat ini hanya ada sebentar sebelum meluruh menjadi unsur yang lebih ringan.

### Tantangan dalam Penciptaan Unsur

Menciptakan unsur baru membutuhkan:
- Particle Accelerators: Menumbukkan inti ringan dengan kecepatan luar biasa
- Precise Timing: Mendeteksi unsur yang mungkin hanya ada mikrodetik
- International Collaboration: Kolaborasi keahlian dari berbagai laboratorium
- Advanced Detection: Instrumen canggih untuk mengidentifikasi jejak peluruhan

## Pulau Stabilitas

Prediksi teoretis menyarankan adanya "pulau stabilitas" di sekitar unsur 114 (Flerovium) di mana unsur superberat mungkin memiliki waktu paruh lebih lama. Konsep ini, yang diajukan fisikawan nuklir, menyatakan kombinasi tertentu proton dan neutron menciptakan konfigurasi lebih stabil.

### Magic Numbers
Stabilitas nuklir meningkat jika inti mengandung "magic numbers" proton atau neutron:
- Magic numbers saat ini: 2, 8, 20, 28, 50, 82, 126
- Magic numbers superberat yang diprediksi: 114, 126, 184

## Upaya Riset Saat Ini

### GSI Helmholtz Centre (Jerman)
- Pemimpin riset sintesis unsur superberat
- Fasilitas ion beam canggih
- Kolaborasi tim internasional

### RIKEN (Jepang)
- Menemukan unsur 113 (Nihonium)
- Melanjutkan riset unsur 119 dan 120

### Joint Institute for Nuclear Research (Rusia)
- Pelopor penciptaan unsur superberat
- Kolaborasi dengan Lawrence Livermore National Laboratory

## Unsur 119 dan Seterusnya

Peneliti saat ini mencoba menciptakan:

### Unsur 119 (Ununennium)
- Akan menjadi unsur pertama di periode 8
- Diprediksi sangat tidak stabil
- Membutuhkan penembakan Berkelium-249 dengan Titanium-50

### Unsur 120 (Unbinilium)
- Diperkirakan memiliki waktu paruh sedikit lebih lama
- Dapat memberi wawasan tentang pulau stabilitas
- Upaya sintesis dengan berbagai kombinasi target-projektil

## Prediksi Teoretis

Model komputer canggih memprediksi sifat unsur yang belum ditemukan:

### Sifat Kimia
- Unsur 119: Mirip logam alkali
- Unsur 120: Karakteristik logam alkali tanah
- Unsur 121-126: Sifat logam transisi

### Sifat Fisik
- Densitas sangat tinggi
- Konfigurasi elektron unik
- Potensi ikatan kimia eksotik

## Aplikasi dan Implikasi

Meski unsur superberat saat ini belum punya aplikasi praktis karena waktu hidupnya sangat singkat, mereka memberi wawasan penting tentang:

### Fisika Nuklir
- Pemahaman gaya nuklir
- Batas stabilitas atom
- Efek mekanika kuantum pada inti berat

### Sains Fundamental
- Pengujian model teoretis
- Menjelajah batas materi
- Memahami proses nukleosintesis bintang

## Prospek Masa Depan

### Fasilitas Generasi Berikutnya
- Akselerator partikel lebih kuat
- Sistem deteksi lebih canggih
- Material target yang lebih baik

### Kemajuan Komputasi
- Prediksi teoretis lebih baik
- Strategi sintesis yang dioptimalkan
- Teknik analisis data yang ditingkatkan

## Dampak Filosofis

Pencarian unsur baru menimbulkan pertanyaan mendalam:
- Apa batas akhir materi?
- Bagaimana hukum fisika membatasi struktur atom?
- Apa yang bisa diajarkan unsur superberat tentang evolusi alam semesta?

## Tantangan ke Depan

Menciptakan unsur di atas 118 menghadapi hambatan besar:

### Tantangan Teknis
- Laju produksi sangat rendah (beberapa atom per minggu)
- Waktu paruh makin pendek seiring bertambahnya nomor atom
- Sulit dikarakterisasi secara kimia

### Kebutuhan Sumber Daya
- Fasilitas akselerator mahal
- Material target langka
- Koordinasi dan pendanaan internasional

## Perjalanan yang Berlanjut

Tabel periodik tetap menjadi karya yang terus berkembang, setiap unsur baru menambah pemahaman kita tentang struktur atom dan fisika nuklir. Meski aplikasi praktisnya mungkin masih jauh, pengetahuan fundamental dari riset ini terus memperluas pemahaman kita tentang dasar-dasar alam semesta.

Saat kita melangkah melampaui unsur 118, kita tidak sekadar menambah kotak baru di tabel periodik—kita sedang menjelajah batas materi itu sendiri, mendorong batas kemungkinan di alam semesta.`,
    author: "Surya Dwi R.",
    date: "2025-09-01T16:20:00Z",
    category: "Chemistry",
    tags: ["periodic table", "superheavy elements", "nuclear physics", "research"],
    heroImage: "/images/periodic-table-future.png",
    trendingScore: 85
  },
  {
    id: "11",
    slug: "quantum-computing-future",
    title: "Komputasi Kuantum: Masa Depan Teknologi",
    excerpt: "Pelajari bagaimana komputasi kuantum dapat mengubah cara kita memecahkan masalah kompleks di sains dan teknologi.",
    content: `# Komputasi Kuantum: Masa Depan Teknologi

Komputasi kuantum memanfaatkan prinsip-prinsip mekanika kuantum untuk memproses informasi dengan cara yang jauh lebih cepat daripada komputer klasik. Unit dasar informasi, qubit, bisa berada dalam beberapa keadaan sekaligus (superposisi) dan saling terkait melalui entanglement.

## Mengapa Komputasi Kuantum Penting?

- Memecahkan masalah optimasi kompleks: seperti logistik, rute transportasi, dan pengembangan material baru.
- Pengembangan obat dan material baru: simulasi molekuler jauh lebih cepat dan akurat.
- Keamanan siber: memungkinkan kriptografi kuantum yang lebih aman.
- Simulasi fisika dan kimia: mempercepat penelitian ilmiah yang memerlukan komputasi besar.

## Tantangan Saat Ini

- Dekohensi: qubit sangat sensitif terhadap lingkungan.
- Koreksi kesalahan kuantum: diperlukan algoritma canggih untuk mengurangi kesalahan.
- Biaya tinggi: perangkat keras dan infrastruktur masih mahal.

## Contoh Implementasi

- Google dan IBM: prototipe komputer kuantum berbasis superconducting qubit.
- D-Wave: fokus pada komputasi kuantum adiabatik untuk optimasi.
- Penelitian di universitas: simulasi molekul obat dan material baru.

## Kesimpulan

Komputasi kuantum masih dalam tahap awal, namun potensinya untuk merevolusi sains, teknologi, dan kehidupan sehari-hari sangat besar. Di masa depan, ini bisa menjadi fondasi internet kuantum dan komputasi super canggih.`,
    author: "Ara Panandhita",
    date: "2025-09-05T10:00:00Z",
    category: "Technology",
    tags: ["quantum computing", "technology", "innovation", "physics"],
    heroImage: "/images/quantum-computing.png",
    trendingScore: 89
  },
  {
    id: "12",
    slug: "dark-energy-universe",
    title: "Energi Gelap: Misteri Alam Semesta",
    excerpt: "Energi gelap menguasai sebagian besar alam semesta. Pelajari konsep, bukti, dan teori terbaru mengenai fenomena ini.",
    content: `# Energi Gelap: Misteri Alam Semesta

Energi gelap adalah komponen misterius yang menyebabkan percepatan ekspansi alam semesta. Meski tidak terlihat, efeknya dapat diukur melalui pergerakan galaksi dan observasi kosmologis.

## Bukti Keberadaan Energi Gelap

- Supernova Tipe Ia: mengamati percepatan ekspansi.
- Kurva rotasi galaksi: menunjukkan massa tak terlihat.
- Cosmic Microwave Background (CMB): distribusi energi dan materi di alam semesta.

## Teori Mengenai Energi Gelap

1. Kosmologikal Konstanta (Λ): energi ruang kosong konstan.
2. Modifikasi Gravitasi: alternatif hukum gravitasi Newton dan Einstein.
3. Quintessence: energi dinamis yang berubah seiring waktu.

## Implikasi

Energi gelap mempengaruhi:
- Formasi galaksi
- Evolusi alam semesta
- Teori fisika fundamental

## Kesimpulan

Energi gelap tetap menjadi salah satu misteri terbesar kosmologi modern, menantang pemahaman kita tentang fisika dan ruang-waktu. Memahami energi gelap bisa membuka jawaban tentang asal-usul dan masa depan alam semesta.`,
    author: "Hani Septiani",
    date: "2025-09-06T09:30:00Z",
    category: "Physics",
    tags: ["dark energy", "cosmology", "universe", "physics"],
    heroImage: "/images/dark-energy.png",
    trendingScore: 91
  },
  {
    id: "13",
    slug: "synthetic-biology-innovation",
    title: "Biologi Sintetis: Inovasi Membentuk Kehidupan",
    excerpt: "Biologi sintetis menggabungkan genetika dan teknologi untuk menciptakan solusi baru dalam kesehatan, energi, dan lingkungan.",
    content: `# Biologi Sintetis: Inovasi Membentuk Kehidupan

Biologi sintetis menggabungkan biologi molekuler, genetika, dan teknologi untuk merancang organisme baru atau sistem biologis dengan fungsi spesifik.

## Aplikasi Biologi Sintetis

- Obat dan terapi gen: produksi protein, vaksin, dan terapi kustom.
- Energi terbarukan: mikroorganisme yang menghasilkan biofuel.
- Lingkungan: bakteri pembersih limbah atau polutan.

## Contoh Nyata

- Produksi insulin melalui E. coli sintetis.
- Mikroalga untuk biofuel.
- Bakteri yang mendeteksi dan menetralkan logam berat.

## Tantangan dan Etika

- Biosafety: risiko pelepasan organisme ke lingkungan.
- Biosecurity: potensi penyalahgunaan.
- Etika: pertanyaan tentang "menciptakan kehidupan".

## Kesimpulan

Biologi sintetis menghadirkan peluang revolusioner di kesehatan, energi, dan lingkungan. Namun, pengawasan ilmiah dan regulasi etis sangat penting.`,
    author: "M. Irsya Ramadhan",
    date: "2025-09-07T11:00:00Z",
    category: "Biology",
    tags: ["synthetic biology", "genetics", "biotechnology", "innovation"],
    heroImage: "/images/synthetic-biology.png",
    trendingScore: 86
  },
  {
    id: "14",
    slug: "ai-in-education",
    title: "Kecerdasan Buatan dalam Pendidikan",
    excerpt: "Kecerdasan buatan (AI) mengubah cara belajar dan mengajar, memungkinkan pengalaman pendidikan yang personal dan adaptif.",
    content: `# Kecerdasan Buatan dalam Pendidikan

AI dapat mempersonalisasi pembelajaran, memberikan rekomendasi materi, dan menganalisis performa siswa untuk meningkatkan hasil belajar.

## Manfaat AI di Pendidikan

- Pembelajaran adaptif: sistem menyesuaikan materi sesuai kemampuan siswa.
- Analisis performa real-time: guru dapat memantau kemajuan siswa.
- Otomatisasi evaluasi: menghemat waktu dan meningkatkan akurasi.
- Simulasi interaktif: virtual reality untuk eksperimen.

## Tantangan

- Akses teknologi: tidak semua sekolah memiliki infrastruktur.
- Privasi data: perlindungan data siswa harus dijaga.
- Kesiapan guru: pelatihan teknologi diperlukan.

## Kesimpulan

AI membawa revolusi pembelajaran, memungkinkan pendidikan lebih personal, efisien, dan menarik. Tantangannya adalah memastikan teknologi digunakan secara etis dan merata.`,
    author: "Azhar Husein Mahmud",
    date: "2025-09-07T15:00:00Z",
    category: "Technology",
    tags: ["AI", "education", "learning", "technology"],
    heroImage: "/images/ai-in-education.png",
    trendingScore: 83
  },
  {
    id: "15",
    slug: "renewable-energy-future",
    title: "Energi Terbarukan: Masa Depan yang Berkelanjutan",
    excerpt: "Energi terbarukan menjadi kunci masa depan yang ramah lingkungan. Pelajari teknologi dan inovasi terbaru di bidang energi bersih.",
    content: `# Energi Terbarukan: Masa Depan yang Berkelanjutan

Energi terbarukan berasal dari sumber yang selalu tersedia, seperti matahari, angin, air, dan biomassa. Transisi ke energi bersih penting untuk mengurangi emisi karbon dan menjaga bumi.

## Jenis Energi Terbarukan

- Energi surya: panel fotovoltaik dan teknologi penyimpanan energi.
- Energi angin: turbin darat dan lepas pantai.
- Energi air: pembangkit listrik tenaga air dan gelombang.
- Bioenergi: biomassa, biogas, dan biofuel dari limbah organik.

## Inovasi dan Tantangan

- Penyimpanan energi: baterai efisien dan grid pintar.
- Integrasi: jaringan listrik yang stabil dan fleksibel.
- Biaya: penurunan biaya produksi dan perawatan.

## Kesimpulan

Energi terbarukan adalah kunci masa depan berkelanjutan, mendorong inovasi teknologi di berbagai sektor, dan mengurangi dampak lingkungan.`,
    author: "M. Arga Alfitrah",
    date: "2025-09-08T08:00:00Z",
    category: "Technology",
    tags: ["renewable energy", "sustainability", "green technology", "innovation"],
    heroImage: "/images/renewable-energy.png",
    trendingScore: 88
  }
];

// Jika Anda menggunakan penggabungan posts dan additionalPosts, tambahkan juga ke allPosts:
export const allPosts = [...posts /*, ...additionalPosts jika masih ada*/];

// Helper functions
export const getPostBySlug = (slug: string): Post | undefined => {
  return allPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): Post[] => {
  return allPosts.filter(post => post.category === category);
};

export const getTrendingPosts = (limit: number = 6): Post[] => {
  return allPosts
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, limit);
};

export const getLatestPosts = (limit: number = 6): Post[] => {
  return allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const searchPosts = (query: string): Post[] => {
  const lowercaseQuery = query.toLowerCase();
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};