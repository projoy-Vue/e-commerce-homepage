<template>
    <section class="product-grid">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <div class="product-image">
          <img :src="product.image" alt="Product" />
        </div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">
            ${{ product.price }}
            <span v-if="product.discount">({{ product.discount }}% off)</span>
          </p>
          <p class="product-rating">⭐ {{ product.rating }} ({{ product.reviews }} reviews)</p>
        </div>
        <div class="product-actions">
          <button>Add to Cart</button>
          <button>Add to Wishlist</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        filteredProducts: [
          {
            id: 1,
            name: "Product 1",
            image: "https://via.placeholder.com/300",
            price: 100,
            discount: 20,
            rating: 4.5,
            reviews: 120,
          },
          {
            id: 2,
            name: "Product 2",
            image: "https://via.placeholder.com/300",
            price: 50,
            discount: null,
            rating: 4.0,
            reviews: 80,
          },
          {
            id: 3,
            name: "Product 3",
            image: "https://via.placeholder.com/300",
            price: 75,
            discount: 10,
            rating: 4.2,
            reviews: 100,
          },
            {
                id: 4,
                name: "Product 4",
                image: "https://via.placeholder.com/300",
                price: 120,
                discount: null,
                rating: 4.8,
                reviews: 150,
            },
            {
                id: 5,
                name: "Product 5",
                image: "https://via.placeholder.com/300",
                price: 90,
                discount: 15,
                rating: 4.3,
                reviews: 110,
            },
            {
                id: 6,
                name: "Product 6",
                image: "https://via.placeholder.com/300",
                price: 80,
                discount: null,
                rating: 4.1,
                reviews: 90,
            },
            {
                id: 7,
                name: "Product 7",
                image: "https://via.placeholder.com/300",
                price: 70,
                discount: 5,
                rating: 4.4,
                reviews: 105,
            },
            {
                id: 8,
                name: "Product 8",
                image: "https://via.placeholder.com/300",
                price: 110,
                discount: null,
                rating: 4.7,
                reviews: 130,
            },
            {
                id: 9,
                name: "Product 9",
                image: "https://via.placeholder.com/300",
                price: 95,
                discount: 10,
                rating: 4.6,
                reviews: 125,
            },
            {
                id: 10,
                name: "Product 10",
                image: "https://via.placeholder.com/300",
                price: 65,
                discount: 8,
                rating: 4.2,
                reviews: 95,
            },
          // Add more products here
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  .product-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    transition: box-shadow 0.3s;
  }
  .product-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .product-image img {
    width: 100%;
    border-radius: 8px;
  }
  .product-info {
    margin-top: 1rem;
    text-align: center;
  }
  .product-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  </style>
  