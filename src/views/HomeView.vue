<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section position-relative">
      <div class="container h-100 d-flex align-items-center justify-content-center">
        <div class="text-center" data-aos="fade-up">
          <h1 class="display-3 fw-bold mb-4">SALNA</h1>
          <p class="lead mb-4">Rasakan Sentuhan Kemewahan di Setiap Aroma</p>
          <a href="#products" class="btn btn-outline-light btn-lg px-5">
            Lihat Selengkapnya <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <section id="products" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5" data-aos="fade-up">Koleksi Parfum Kami</h2>
        <div class="row g-4">
          <div v-for="product in products" :key="product.id" class="col-12 col-md-6 col-lg-3" data-aos="fade-up">
            <div class="card h-100 product-card">
              <div class="card-img-wrapper">
                <img :src="product.image" class="card-img-top" :alt="product.name">
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <router-link to="/products" class="nav-link" active-class="active">
                  <a href="#" class="btn btn-outline-dark">
                  <i class="bi bi-bag-plus me-2"></i>Lihat Detail
                </a>
            </router-link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6" data-aos="fade-right">
            <img src="@/assets/mokup3.webp" alt="Product Features" class="img-fluid rounded shadow">
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <h2 class="mb-4">Keunggulan Produk Kami</h2>
            <div class="feature-item mb-4">
              <i class="bi bi-star-fill text-warning me-2"></i>
              <h4>Kualitas Premium</h4>
              <p>Dibuat dengan bahan berkualitas tinggi untuk aroma yang tahan lama</p>
            </div>
            <div class="feature-item mb-4">
              <i class="bi bi-droplet-fill text-primary me-2"></i>
              <h4>Aroma Eksklusif</h4>
              <p>Dikembangkan oleh parfumier terbaik untuk menciptakan aroma yang unik</p>
            </div>
            <div class="feature-item">
              <i class="bi bi-award-fill text-success me-2"></i>
              <h4>Sertifikasi Internasional</h4>
              <p>Telah mendapatkan sertifikasi keamanan internasional</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section py-5">
      <div class="container">
        <h2 class="text-center mb-5 text-white" data-aos="fade-up">Apa Kata Mereka Tentang SALNA Parfum</h2>
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="testimonial-card">
                <p class="mb-4">"Güncel özellikle sağlamak üzereki bilgileri."</p>
                <div class="d-flex align-items-center">
                  <i class="bi bi-person-circle fs-1 me-3"></i>
                  <div>
                    <h5 class="mb-0">Lika Sandanya</h5>
                    <small class="text-muted">Customer</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial-card">
                <p class="mb-4">"Mühenyi parfum kurkenig ve maziyet kabul edilmiş ve bunları iletişimdeki belirtilen kişisel, bütün ve burada geliştirilmesi."</p>
                <div class="d-flex align-items-center">
                  <i class="bi bi-person-circle fs-1 me-3"></i>
                  <div>
                    <h5 class="mb-0">Celeste Bleu</h5>
                    <small class="text-muted">Customer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Kamula Al-Kurkenig', description: 'Mühenyi parfum herhindirliğini parfum kurkenig ve maziyet kabul edilmiş.', image: require('@/assets/produk1.webp') },
        { id: 2, name: 'Alyon Katda Katas', description: 'Kazdan herhangi bir plan numarasını anlam sırasınına katılır.', image: require('@/assets/produk2.webp') },
        { id: 3, name: 'Dusan Nagae', description: 'Basın arasında sonra standart programından "Bundan gaya" farklı olabilir.', image: require('@/assets/produk3.webp') },
        { id: 4, name: 'Yadre Arbar', description: 'Aroma yang Membentuk Identitas Anda.', image: require('@/assets/produk4.webp') },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/hero1.webp') no-repeat center center/cover;
  height: 100vh;
  color: white;
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-img-wrapper {
  overflow: hidden;
  height: 250px;
}

.card-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.features-section {
  background-color: #f8f9fa;
}

.features-section img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.features-section img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.feature-item {
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.feature-item:hover {
  background-color: white;
}

.testimonials-section {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('@/assets/mokup6.webp') no-repeat center center/cover;
  color: white;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 800px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
  }

  .card-img-wrapper {
    height: 200px;
  }

  .testimonial-card {
    padding: 1rem;
  }

  .features-section .row {
    flex-direction: column;
  }

  .features-section img {
    margin-bottom: 2rem;
  }

  .feature-item {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }

  .features-section h2 {
    font-size: 1.8rem;
  }

  .feature-item h4 {
    font-size: 1.2rem;
  }

  .feature-item p {
    font-size: 0.9rem;
  }
}
</style>