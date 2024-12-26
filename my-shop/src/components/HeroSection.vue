<template>
    <section class="hero">
      <!-- Full-width background image -->
      <div class="hero-background">
        <img src="https://picsum.photos/536/354" alt="Hero Image" class="hero-img" loading="lazy" />
      </div>
  
      <!-- Promotional Banner -->
      <div class="promo-banner">
        <p class="promo-text">Limited Time Offer! Get 20% off on all Personalized Gifts</p>
        <router-link to="/shop" class="cta-btn">Shop Now</router-link>
      </div>
  
      <!-- Main Value Proposition -->
      <div class="value-proposition">
        <h1>Unique, Personalized Gifts for Every Occasion</h1>
        <p class="subheading">Find the perfect gift that speaks from the heart</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  
  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  }
  
  .promo-banner {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
  }
  
  .promo-text {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
  
  .cta-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ff6347;
    color: #fff;
    text-decoration: none;
    border-radius: 30px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .cta-btn:hover {
    background-color: #e53e3e;
  }
  
  .value-proposition {
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    padding-bottom: 10px;
  }
  
  .subheading {
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 0;
  }
  
  @media screen and (max-width: 768px) {
    .promo-banner {
      font-size: 1rem;
      padding: 8px 16px;
    }
  
    .cta-btn {
      padding: 8px 16px;
    }
  
    .value-proposition h1 {
      font-size: 2rem;
    }
  
    .value-proposition .subheading {
      font-size: 1rem;
    }
  }
  </style>
  