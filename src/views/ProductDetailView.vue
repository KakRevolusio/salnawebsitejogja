<template>
  <div>
    <div class="container my-5 pt-5"> <!-- Tambahkan pt-5 untuk memberikan jarak dengan navbar -->
      <div class="row">
        <div class="col-md-6" data-aos="fade-up">
          <img :src="product.image" class="img-fluid product-image rounded shadow" alt="Product Image"> <!-- Tambahkan kelas product-image -->
        </div>
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <h1 class="display-4">{{ product.name }}</h1>
          <p class="lead">{{ product.description }}</p>
          <p class="h4 text-muted">{{ product.price }}</p>
          <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#purchaseModal">
            Beli Sekarang
          </button>
        </div>
      </div>

      <!-- Related Products Section -->
      <div class="row mt-5">
        <div class="col-12">
          <h2 class="mb-4">Produk Lainnya</h2>
        </div>
        <div class="row justify-content-center">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="col-md-4 mb-4">
            <router-link :to="'/product/' + relatedProduct.id" class="text-decoration-none">
              <div class="card h-100" data-aos="fade-up">
                <img :src="relatedProduct.image" class="card-img-top" :alt="relatedProduct.name">
                <div class="card-body">
                  <h5 class="card-title">{{ relatedProduct.name }}</h5>
                  <p class="card-text">{{ relatedProduct.description }}</p>
                  <p class="card-text"><strong>{{ relatedProduct.price }}</strong></p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
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
<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';

/* Custom styles */
.display-4 {
  font-weight: bold;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.rounded {
  border-radius: 0.5rem !important;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Tambahkan kelas baru untuk gambar produk */
.product-image {
  max-width: 70%; /* Mengurangi ukuran gambar */
  margin: 0 auto; /* Pusatkan gambar */
  display: block;
}
</style>