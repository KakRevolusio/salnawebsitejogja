<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="container">
        <h1 data-aos="fade-up">Produk Unggulan Kami</h1>
        <p data-aos="fade-up" data-aos-delay="100">Temukan aroma yang sempurna untuk setiap momen.</p>
      </div>
    </div>

    <!-- Daftar Produk -->
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
                <div class="card-footer">
                  <button class="btn btn-light w-100" @click.stop.prevent="openPurchaseModal(product)">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Purchase Modal -->
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
              <a :href="selectedProduct?.shopeeLink || '#'" class="btn btn-warning btn-lg" target="_blank" @click="closeModal">
                <i class="bi bi-shop me-2"></i>
                Beli di Shopee
              </a>
              
              <!-- Instagram Button -->
              <a :href="selectedProduct?.instagramLink || '#'" class="btn btn-danger btn-lg" target="_blank" @click="closeModal">
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
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Parfum A',
          description: 'Aroma segar untuk pagi hari.',
          image: require('@/assets/produk5.webp'),
          shopeeLink: 'https://shopee.co.id/',
          instagramLink: 'https://www.instagram.com/salnaofficialstore'
        },
        {
          id: 2,
          name: 'Parfum B',
          description: 'Aroma wangi untuk malam hari.',
          image: require('@/assets/produk6.webp'),
          shopeeLink: 'https://shopee.co.id/',
          instagramLink: 'https://www.instagram.com/salnaofficialstore'
        },
        {
          id: 3,
          name: 'Parfum C',
          description: 'Aroma eksotis untuk acara khusus.',
          image: require('@/assets/produk7.webp'),
          shopeeLink: 'https://shopee.co.id/',
          instagramLink: 'https://www.instagram.com/salnaofficialstore'
        },
      ],
      selectedProduct: null,
      modal: null
    };
  },
  computed: {
    getWhatsAppLink() {
      if (!this.selectedProduct) return '#';
      return `https://wa.me/6285155351238?text=Saya%20ingin%20membeli%20${encodeURIComponent(this.selectedProduct.name)}%20dengan%20detail%20sebagai%20berikut:%0A- Nama:%20[Nama Anda]%0A- Alamat:%20[Alamat Anda]%0A- Metode Pembayaran:%20[Metode Pembayaran]`;
    }
  },
  mounted() {
    this.initializeModal();
  },
  methods: {
    initializeModal() {
      this.modal = new window.bootstrap.Modal(document.getElementById('purchaseModal'));
    },
    openPurchaseModal(product) {
      this.selectedProduct = product;
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    }
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