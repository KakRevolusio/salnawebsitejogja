<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo2.png" alt="logo" class="logo-img">
      </a>
      
      <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <i class="bi bi-list"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">
              <i class="bi bi-house-door"></i> Beranda
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" active-class="active">
              <i class="bi bi-bag"></i> Produk
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">
              <i class="bi bi-info-circle"></i> Tentang Kami
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active">
              <i class="bi bi-envelope"></i> Kontak Kami
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
.navbar {
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.navbar-scrolled .nav-link {
  color: #333 !important;
}

.navbar-scrolled .nav-link:hover,
.navbar-scrolled .nav-link.active {
  color: #007bff !important;
}

.logo-img {
  height: 40px;
  width: auto;
  transition: all 0.3s ease;
}

.navbar-scrolled .logo-img {
  height: 35px;
}

.nav-link {
  color: white !important;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  margin: 0 0.2rem;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.nav-link i {
  margin-right: 0.3rem;
  font-size: 1.1rem;
}

.nav-link:hover,
.nav-link.active {
  color: #007bff !important;
  background: rgba(255, 255, 255, 0.1);
}

.navbar-scrolled .nav-link:hover,
.navbar-scrolled .nav-link.active {
  background: rgba(0, 123, 255, 0.1);
}

.custom-toggler {
  border: none;
  padding: 0.25rem 0.5rem;
  background: transparent;
}

.custom-toggler i {
  color: white;
  font-size: 1.8rem;
}

.navbar-scrolled .custom-toggler i {
  color: #333;
}

/* Mobile Responsive Styles */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background: white;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    color: #333 !important;
  }

  .nav-link:hover,
  .nav-link.active {
    background: rgba(0, 123, 255, 0.1);
    color: #007bff !important;
  }

  .navbar-nav {
    padding: 0.5rem 0;
  }

  .nav-item {
    margin: 0.2rem 0;
  }
}
</style>