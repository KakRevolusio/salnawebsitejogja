<template>
  <div>
    <!-- Hero Section with Background Image -->
    <div class="hero-section position-relative d-flex align-items-center justify-content-center" data-aos="fade-up">
      <div class="bg-image"></div>
      <div class="overlay"></div>
      <div class="position-relative text-white text-center">
        <h1 class="display-4 fw-bold mb-3">Kontak Kami</h1>
        <p class="lead mb-0">Hubungi kami untuk informasi lebih lanjut.</p>
      </div>
    </div>

    <!-- Map Section -->
    <div>
    <div class="container my-5" data-aos="fade-up" data-aos-delay="100">
      <div class="row">
        <div class="col-12">
          <div class="map-container rounded-4 shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!..."  width="100%"
              height="450"
              style="border:0;"
              allow="fullscreen"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- Contact Links Section -->
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card shadow-lg rounded-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card-body p-4">
              <h3 class="text-center mb-4">Hubungi Kami</h3>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <!-- WhatsApp -->
                <div class="col">
                  <a href="https://wa.me/082147840202" class="text-decoration-none contact-card">
                    <div class="contact-item h-100 p-3 rounded-4 bg-light">
                      <div class="d-flex flex-column align-items-center text-center">
                        <div class="contact-icon bg-success text-white mb-3">
                          <i class="bi bi-whatsapp"></i>
                        </div>
                        <h5 class="mb-2">WhatsApp</h5>
                        <p class="mb-0 text-muted">0821 4784 02Q2</p>
                      </div>
                    </div>
                  </a>
                </div>
                
                <!-- Email -->
                <div class="col">
                  <a href="mailto:salnaparfum@gmail.com" class="text-decoration-none contact-card">
                    <div class="contact-item h-100 p-3 rounded-4 bg-light">
                      <div class="d-flex flex-column align-items-center text-center">
                        <div class="contact-icon bg-danger text-white mb-3">
                          <i class="bi bi-envelope"></i>
                        </div>
                        <h5 class="mb-2">Email</h5>
                        <p class="mb-0 text-muted">salnaparfum@gmail.com</p>
                      </div>
                    </div>
                  </a>
                </div>

                <!-- Instagram -->
                <div class="col">
                  <a href="https://instagram.com/salnaofficialstore" class="text-decoration-none contact-card">
                    <div class="contact-item h-100 p-3 rounded-4 bg-light">
                      <div class="d-flex flex-column align-items-center text-center">
                        <div class="contact-icon bg-instagram text-white mb-3">
                          <i class="bi bi-instagram"></i>
                        </div>
                        <h5 class="mb-2">Instagram</h5>
                        <p class="mb-0 text-muted">@salnaofficialstore</p>
                      </div>
                    </div>
                  </a>
                </div>

                <!-- TikTok -->
                <div class="col">
                  <a href="https://tiktok.com/@salnaofficialstore" class="text-decoration-none contact-card">
                    <div class="contact-item h-100 p-3 rounded-4 bg-light">
                      <div class="d-flex flex-column align-items-center text-center">
                        <div class="contact-icon bg-dark text-white mb-3">
                          <i class="bi bi-tiktok"></i>
                        </div>
                        <h5 class="mb-2">TikTok</h5>
                        <p class="mb-0 text-muted">@salnaofficialstore</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  height: 400px;
  background-color: #f8f9fa;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/hero1.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.map-container {
  position: relative;
  width: 100%;
  height: 450px;
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  transition: transform 0.3s ease;
}

.contact-card {
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-card:hover .contact-icon {
  transform: scale(1.1);
}

.contact-item {
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.1);
}

.contact-card:hover .contact-item {
  background-color: #fff !important;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.bg-instagram {
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .hero-section {
    height: 350px;
  }
}

@media (max-width: 767.98px) {
  .hero-section {
    height: 300px;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .map-container {
    height: 350px;
  }
}

@media (max-width: 575.98px) {
  .hero-section {
    height: 250px;
  }
  
  .hero-section h1 {
    font-size: 1.75rem;
  }
  
  .map-container {
    height: 300px;
  }
}
</style>