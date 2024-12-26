
<template>
  <section class="featured-products fade-in" v-bind:class="{'fade-in': isVisible}" ref="featuredProducts">
    <h2>Featured Products</h2>
    <div class="product-grid">
      <!-- Example of product card, repeat for each product -->
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image" :alt="product.name" loading="lazy" />
        </div>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price | currency }}</p>
        </div>
        <div class="product-hover">
          <button class="quick-view-btn" @click="viewProduct(product)">Quick View</button>
          <button class="add-to-cart-btn" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Quick Access Buttons -->
    <div class="quick-access">
      <router-link to="/shop" class="shop-all-btn">Shop All</router-link>
      <router-link to="/categories" class="browse-categories-btn">Browse Categories</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedProducts',
  data() {
    return {
      isVisible: false,
      products: [
        { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/200x200' },
        { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/200x200' },
        { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/200x200' },
        { id: 4, name: 'Product 4', price: 39.99, image: 'https://via.placeholder.com/200x200' },
        // { id: 5, name: 'Product 4', price: 39.99, image: 'https://via.placeholder.com/200x200' },
        // Add more products as needed
      ],
    };
  },
  methods: {
    viewProduct(product) {
      // Logic for viewing the product details
      console.log(`Viewing details for ${product.name}`);
    },
   
    addToCart(product) {
      // Logic for adding the product to the shopping cart
      console.log(`${product.name} added to cart!`);
    }
  }
};
</script>

<style scoped>
.featured-products {
  padding: 40px 30px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  font-size: 1.25rem;
  margin: 10px 0;
  font-weight: bold;
}

.price {
  font-size: 1.1rem;
  color: #ff6347;
  margin-top: 5px;
}

.product-hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  text-align: center;
}

.product-card:hover .product-hover {
  display: block;
}

.quick-view-btn,
.add-to-cart-btn {
  background-color: #ff6347;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 5px 0;
  font-weight: bold;
}

.quick-view-btn:hover,
.add-to-cart-btn:hover {
  background-color: #e53e3e;
}

.quick-access {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.shop-all-btn,
.browse-categories-btn {
  background-color: #ff6347;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.shop-all-btn:hover,
.browse-categories-btn:hover {
  background-color: #e53e3e;
}
/* Animation  */
/* Fade-In Animation */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Slide-Up Animation */
.slide-up {
  transform: translateY(50px);
  opacity: 0;
  animation: slideUp 1s forwards;
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}


@media screen and (max-width: 768px) {
  .product-card {
    box-shadow: none;
  }
  .quick-access {
    flex-direction: column;
  }
}
</style>
