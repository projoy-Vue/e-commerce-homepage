<template>
    <header class="header">
      <!-- Logo Section -->
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
        <h1 class="brand-name">EcoLuxe Haven</h1>
      </div>
  
      <!-- Hamburger Menu for Mobile -->
      <div class="hamburger" @click="toggleMenu" v-if="isMobile">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
  
      <!-- Navigation Bar -->
      <nav class="navigation" :class="{ 'nav-active': menuOpen }">
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
  
      <!-- Search Bar -->
      <div class="search-bar" :class="{ 'search-active': showSuggestions }">
        <input
          type="text"
          placeholder="Search products..."
          v-model="searchQuery"
          @focus="toggleSuggestions(true)"
          @blur="toggleSuggestions(false)"
          @input="filterSuggestions"
        />
        <button @click="searchProducts">Search</button>
  
        <!-- Search Suggestions Dropdown -->
        <div v-if="showSuggestions && filteredSuggestions.length" class="suggestions">
          <ul>
            <li v-for="(suggestion, index) in filteredSuggestions" :key="index">{{ suggestion }}</li>
          </ul>
        </div>
      </div>
  
      <!-- Cart and Login/Sign Up Buttons -->
      <div class="auth-cart">
        <button class="cart-icon" @click="goToCart">
            <i class="fa fa-shopping-cart"></i>

          <span class="cart-count">{{ cartItems }}</span>
        </button>
        <button @click="goToLogin" class="login-btn">Login</button>
        <button @click="goToRegister" class="register-btn">Sign Up</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '', // for the search bar
        cartItems: 3,     // assuming there are 3 items in the cart
        suggestions: ['Gift Sets', 'Eco-friendly Products', 'Handmade Jewelry', 'Sustainable Clothing', 'Personalized Gifts'], // example suggestions
        filteredSuggestions: [], // filtered suggestions based on user input
        showSuggestions: false, // toggle search suggestion box
        menuOpen: false, // toggle navigation menu
        isMobile: false, // flag to detect mobile view
      };
    },
    mounted() {
      // Detect mobile screens
      this.isMobile = window.innerWidth <= 768;
  
      // Listen for window resize to adjust layout
      window.addEventListener('resize', this.checkMobile);
    },
    beforeDestroy() {
      // Cleanup the resize event listener
      window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
      checkMobile() {
        this.isMobile = window.innerWidth <= 768;
        if (!this.isMobile && this.menuOpen) {
          this.menuOpen = false;
          console.log('Closing menu on desktop view');
        }
      },
      // Handle search functionality
      searchProducts() {
        if (this.searchQuery) {
          console.log(`Searching for: ${this.searchQuery}`);
          // You can implement the actual search functionality here
        }
      },
      filterSuggestions() {
        if (this.searchQuery.length > 0) {
          this.filteredSuggestions = this.suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        } else {
          this.filteredSuggestions = [];
        }
      },
      toggleSuggestions(value) {
        this.showSuggestions = value;
      },
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      goToCart() {
        // Navigate to cart page
        this.$router.push('/cart');
      },
      goToLogin() {
        // Navigate to login page
        this.$router.push('/login');
      },
      goToRegister() {
        // Navigate to register page
        this.$router.push('/register');
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 10;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .brand-name {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .navigation .nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  
  .navigation .nav-links li a {
    text-decoration: none;
    font-size: 1rem;
    color: #333;
    transition: color 0.3s ease;
  }
  
  .navigation .nav-links li a:hover {
    color: #007bff;
  }
  
  .search-bar {
    position: relative;
    display: flex;
    gap: 10px;
  }
  
  .search-bar input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
    transition: all 0.3s ease;
  }
  
  .search-bar button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .search-bar .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    z-index: 1000;
  }
  
  .search-bar .suggestions ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .search-bar .suggestions li {
    padding: 0.8rem;
    cursor: pointer;
  }
  
  .search-bar .suggestions li:hover {
    background-color: #f5f5f5;
  }
  
  .auth-cart {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .cart-icon {
    position: relative;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .cart-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: red;
    color: white;
    padding: 2px 8px;
    font-size: 0.8rem;
    border-radius: 50%;
  }
  
  .login-btn, .register-btn {
    padding: 0.5rem 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-btn:hover, .register-btn:hover {
    background-color: #218838;
  }
  
  .search-active input {
    width: 250px;
  }
  
  /* Hamburger Menu Styles */
  .hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .hamburger i {
    color: #333;
  }
  
  /* Mobile View - Toggle Menu */
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .navigation {
      width: 100%;
      display: none;
      flex-direction: column;
      gap: 15px;
      background-color: #fff;
      position: absolute;
      top: 60px;
      left: 0;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      padding: 1rem;
    }
  
    .navigation.nav-active {
      display: flex;
    }
  
    .navigation .nav-links {
      flex-direction: column;
      gap: 10px;
    }
  
    .hamburger {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
        
    }
  
    .navigation .nav-links li a {
      font-size: 1.2rem;
    }
  
    .search-bar {
      display: none;
      width: 100%;
      margin-top: 10px;
    }
  
    .auth-cart {
      margin-top: 10px;
      justify-content: space-between;
      width: 100%;
    }
    .auth-cart .cart-icon {
      font-size: 1.8rem;
    }
  }
  </style>
  