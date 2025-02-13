<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="container">
        <h1 class="hero-title" data-aos="fade-up">
          <span class="highlight">PT Salsabila </span> Saputra Sinaed
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
          Menciptakan Momen Tak Terlupakan Melalui Aroma Premium yang Memukau
        </p>
       
      </div>
    </div>

    <!-- Mengapa Memilih Kami -->
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6" data-aos="fade-right">
          <img :src="aboutImage" class="img-fluid rounded about-image" alt="Tentang Kami">
        </div>
        <div class="col-md-6" data-aos="fade-left" data-aos-delay="100">
          <h2 class="section-title">Mengapa Memilih Kami?</h2>
          <p class="section-description">Kami menghadirkan keunggulan dalam setiap tetes parfum yang kami ciptakan.</p>
          <div class="features-list">
            <div class="feature-item">
              <i class="fas fa-gem feature-icon"></i>
              <div>
                <h4>Kualitas Premium</h4>
                <p>Bahan alami berkualitas tinggi dari seluruh dunia</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fas fa-flask feature-icon"></i>
              <div>
                <h4>Inovasi Modern</h4>
                <p>Teknologi terkini dalam pengembangan aroma</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fas fa-award feature-icon"></i>
              <div>
                <h4>Pengakuan Global</h4>
                <p>Dipercaya oleh pelanggan di seluruh dunia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Visi & Misi -->
   <div class="vision-mission-section">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6" data-aos="fade-left">
        <div class="vision-content">
          <h2 class="section-title">Visi & Misi</h2>
          <div class="vision-item">
            <i class="fas fa-eye vision-icon"></i>
            <h3>Visi</h3>
            <p>Menjadi pemimpin global dalam industri parfum dengan inovasi berkelanjutan dan kualitas tanpa kompromi.</p>
          </div>
          <div class="vision-item">
            <i class="fas fa-bullseye vision-icon"></i>
            <h3>Misi</h3>
            <ul>
              <li>Menghadirkan aroma premium dengan standar tertinggi</li>
              <li>Menginspirasi melalui kreativitas dan inovasi</li>
              <li>Memberikan pengalaman berkesan bagi setiap pelanggan</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6" data-aos="fade-right">
        <img :src="visionImage" class="img-fluid rounded" alt="Visi & Misi">
      </div>
    </div>
  </div>
</div>
  <!-- Profil Perusahaan -->
<div class="company-profile-section">
  <div class="container">
    <h2 class="section-title text-center" data-aos="fade-up">Profil Perusahaan</h2>
    <div class="row align-items-center">
      <!-- Gambar di sebelah kiri -->
      <div class="col-md-6" data-aos="fade-right">
        <div class="company-image">
          <img src="@/assets/logo1.webp" alt="Company Profile" class="img-fluid">
        </div>
      </div>
      
      <!-- Teks di sebelah kanan -->
      <div class="col-md-6" data-aos="fade-left">
        <div class="company-info">
          <div class="profile-card mb-4">
            <i class="fas fa-history profile-icon"></i>
            <h3>Sejarah</h3>
            <p>PT Salsabila Saputra Sinaed hadir dengan semangat menghadirkan aroma yang tak hanya memikat, tetapi juga membangkitkan kepercayaan diri. Dengan brand Salna, kami menawarkan beragam pilihan parfum berkualitas tinggi yang dirancang khusus untuk memanjakan indera penciuman. Aroma unik kami, yang terinspirasi dari keindahan alam dan tren terkini, mampu meningkatkan self-value setiap individu. Tak hanya itu, kami juga berkomitmen untuk menyediakan produk dengan harga terjangkau tanpa mengorbankan kualitas, sehingga parfum Salna dapat dinikmati oleh semua kalangan.

Visi kami adalah menjadi pemimpin pasar parfum di Indonesia dengan menghadirkan inovasi aroma yang unik dan berkualitas tinggi. Melalui brand Salna, kami ingin menciptakan kesan mewah dan elegan yang dapat diakses oleh semua lapisan masyarakat. Dengan fokus pada kebutuhan pelanggan, kami terus berinovasi untuk menciptakan parfum yang tidak hanya menyenangkan, tetapi juga memberikan manfaat bagi kesehatan dan kesejahteraan. Kami percaya bahwa parfum adalah lebih dari sekadar wewangian, tetapi juga sebuah ekspresi diri.</p>
          </div>
       
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Tim Kami -->
    <div class="hero-section">
      <div class="container">
        <h1 class="hero-title" data-aos="fade-up">
          <span class="highlight">Nikmati Keharuman </span> Speanjang Hari
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
          Salna Parfum menghadirkan wangi mewah yang tahan lama, dirancang untuk menemani Anda sepanjang hari.
        </p>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutImage: require('@/assets/mokup5.webp'),
      visionImage: require('@/assets/mokup1.webp'),
      teamMember1: require('@/assets/mokup2.webp'),
      teamMember2: require('@/assets/mokup4.webp'),
      teamMember3: require('@/assets/mokup3.webp'),
    };
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/mokup2.webp') no-repeat center center/cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.highlight {
  color: #ffd700;
}

/* About Section */
.about-image {
  max-width: 80%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
}

.section-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.features-list {
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-size: 2rem;
  color: #007bff;
  margin-right: 1rem;
}

/* Vision & Mission Section */
.vision-mission-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.vision-content {
  padding: 2rem;
}

.vision-item {
  margin-bottom: 2rem;
}

.vision-icon {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 1rem;
}

/* Company Profile Section */
.company-profile-section {
  padding: 5rem 0;
}

.profile-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px);
}

.profile-icon {
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 1.5rem;
}

/* Team Section */
.team-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-image-wrapper {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
}

.team-image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-content {
  padding: 1.5rem;
  text-align: center;
}

.social-links {
  margin-top: 1rem;
}

.social-links a {
  color: #666;
  margin: 0 0.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #007bff;
}
.company-profile-section {
  padding: 60px 0;
}

.company-image {
  margin-bottom: 30px;
}

.company-info {
  padding-left: 20px;
}

.profile-card {
  margin-bottom: 30px;
}

.profile-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #f8f9fa; /* Sesuaikan dengan warna tema Anda */
}

/* Untuk layar mobile */
@media (max-width: 768px) {
  .company-info {
    padding-left: 0;
    margin-top: 30px;
  }
}


@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .feature-item {
    flex-direction: column;
    text-align: center;
  }
  
  .feature-icon {
    margin-bottom: 1rem;
  }
  
  .team-card {
    margin-bottom: 2rem;
  }
}
</style>