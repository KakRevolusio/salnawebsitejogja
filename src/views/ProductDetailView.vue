<template>
  <div>
    <div class="container my-5 pt-5"> <!-- Tambahkan pt-5 untuk memberikan jarak dengan navbar -->
      <div class="row">
  <div class="col-md-6" data-aos="fade-up">
    <div class="">
      <img :src="product.image" class="card-img-top img-fluid rounded shadow" alt="Product Image" style=" object-fit: cover;">
    </div>
  </div>
  <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div class="card h-100">
      <div class="card-body">
        <h1 class="card-title display-6">{{ product.name }}</h1> <!-- Mengubah display-4 menjadi display-6 agar lebih kecil -->
        <p class="card-text lead">{{ product.description }}</p>
        <p class="card-text h5 text-muted">{{ product.price }}</p> <!-- Mengubah h4 menjadi h5 agar lebih kecil -->
        <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#purchaseModal">
          Beli Sekarang
        </button>
      </div>
    </div>
  </div>
</div>

      <!-- Related Products Section -->
      <div class="container">
        <h2 class="text-center mb-5" data-aos="fade-up">Koleksi Parfum Kami</h2>
        </div>
        <section id="products" class="py-5">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div v-for="product in products" :key="product.id" class="col-12 col-md-6 col-lg-3" data-aos="fade-up">
            <router-link :to="`/product/${product.id}`" class="text-decoration-none">
              <div class="card h-100 product-card">
                <div class="card-img-wrapper">
                  <img :src="product.image" class="card-img-top" :alt="product.name">
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">{{ product.description }}</p>
                </div>
                
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
      </div><div class="row mt-5">
     
    </div>

    <!-- Modal -->
    <div class="modal fade" id="purchaseModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="purchaseModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="purchaseModalLabel">Pilih Metode Pembelian</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-grid gap-3">
              <!-- WhatsApp Button -->
              <a :href="getWhatsAppLink" class="btn btn-success btn-lg" target="_blank" @click="closeModal">
                <i class="bi bi-whatsapp me-2"></i>
                Beli via WhatsApp
              </a>
              
              <!-- Shopee Button -->
              <a :href="product.shopeeLink" class="btn btn-warning btn-lg" target="_blank" @click="closeModal">
                <i class="bi bi-shop me-2"></i>
                Beli di Shopee
              </a>
              
              <!-- Instagram Button -->
              <a :href="product.instagramLink" class="btn btn-danger btn-lg" target="_blank" @click="closeModal">
                <i class="bi bi-instagram me-2"></i>
                Beli via Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // Impor file CSS AOS
const bootstrap = window.bootstrap;

export default {
  props: ['id'],
  data() {
    return {
      product: null,
      products: [
        {
          id: 1,
          name: 'Black Opium',
          description: 'Aroma segar untuk pagi hari.',
          image: require('@/assets/produk5.webp'),
          price: 'Rp 750.000',
          shopeeLink: 'https://shopee.co.id/your-shop-link',
          instagramLink: 'https://instagram.com/your-instagram'
        },
        {
          id: 2,
          name: 'Parfum B',
          description: 'Aroma wangi untuk malam hari.',
          image: require('@/assets/produk6.webp'),
          price: 'Rp 850.000',
          shopeeLink: 'https://shopee.co.id/your-shop-link',
          instagramLink: 'https://instagram.com/your-instagram'
        },
        {
          id: 3,
          name: 'Parfum C',
          description: 'Aroma eksotis untuk acara khusus.',
          image: require('@/assets/produk7.webp'),
          price: 'Rp 950.000',
          shopeeLink: 'https://shopee.co.id/your-shop-link',
          instagramLink: 'https://instagram.com/your-instagram'
        },
      ]
    };
  },
  created() {
    this.product = this.products.find(p => p.id === parseInt(this.id));
  },
  computed: {
    getWhatsAppLink() {
      return `https://wa.me/6281234567890?text=Saya%20ingin%20membeli%20${this.product.name}`;
    },
    relatedProducts() {
      return this.products.filter(p => p.id !== parseInt(this.id));
    }
  },
  methods: {
    closeModal() {
      const modal = bootstrap.Modal.getInstance(document.getElementById('purchaseModal'));
      modal.hide();
    }
  },
  mounted() {
    AOS.init(); // Inisialisasi AOS
  }
};
</script>
<style scoped>

/* Hero Section */
.hero-section {
  background: url('@/assets/mokup6.webp') no-repeat center center/cover;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

/* Card Produk */
.product-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-10px);
}

.card-img-wrapper {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
}

.card-img-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .card-img-top {
  transform: scale(1.1);
}

.card-body {
  padding: 1.5rem;
  background-color: #f8f9fa;
}


.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.card-footer {
  background-color: #ffffff;
  border-top: 1px solid #e9ecef;
  padding: 1rem;
}

/* Tombol Beli */
.btn-light {
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #343a40;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.btn-light:hover {
  background-color: #343a40;
  color: #ffffff;
  border-color: #343a40;
}

/* Modal Styling */
.modal-content {
  border-radius: 15px;
  border: none;
}

.modal-header {
  border-bottom: 1px solid #dee2e6;
  padding: 1.5rem;
}

.modal-body {
  padding: 1.5rem;
}

.btn-lg {
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Custom button colors */
.btn-success {
  background-color: #25D366;
  border-color: #25D366;
}

.btn-warning {
  background-color: #EE4D2D;
  border-color: #EE4D2D;
  color: white;
}

.btn-danger {
  background-color: #E4405F;
  border-color: #E4405F;
}

.btn-success:hover,
.btn-warning:hover,
.btn-danger:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>