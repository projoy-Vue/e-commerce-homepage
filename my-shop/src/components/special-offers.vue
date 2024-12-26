<template>
  <section class="special-offers">
    <h2>Special Offers</h2>

    <!-- Deals of the Week -->
    <div class="deals-of-the-week">
      <h3>Deals of the Week</h3>
      <div class="product-grid">
      <div class="deal-card" v-for="deal in weeklyDeals" :key="deal.id">
        <img :src="deal.image" :alt="deal.name" />
        <div class="deal-info">
          <h4>{{ deal.name }}</h4>
          <p class="deal-price">{{ deal.price | currency }}</p>
          <div class="deal-timer">
            <p>Expires in: <span>{{ timeLeft(deal.endTime) }}</span></p>
          </div>
        </div>
        <div class="product-options">
          <div class="one">
          <label for="size">Size:</label>
          <select v-model="deal.selectedSize">
            <option v-for="size in deal.availableSizes" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>
          <button class="shop-now-btn" @click="addToCart(deal)">Shop Now</button>
        </div>
      </div>
    </div>
    </div>

    <!-- Limited Edition -->
    <div class="limited-edition">
      <h3>Limited Edition</h3>
      <div class="product-grid">
      <div class="product-card" v-for="product in limitedEdition" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <div class="product-info">
          <h4>{{ product.name }}</h4>
          <p class="product-price">{{ product.price | currency }}</p>
          <div class="product-options">
            <label for="color">Color:</label>
            <select v-model="product.selectedColor">
              <option v-for="color in product.availableColors" :key="color" :value="color">{{ color }}</option>
            </select>
          </div>
          <button class="buy-now-btn" @click="addToCart(product)">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpecialOffers',
  data() {
    return {
      weeklyDeals: [
        {
          id: 1,
          name: '50% Off Summer Collection',
          price: 29.99,
          image: 'https://via.placeholder.com/300x200',
          endTime: new Date().getTime() + 86400000, // 1 day from now
          availableSizes: ['S', 'M', 'L', 'XL'],
          selectedSize: 'M'
        },
        {
          id: 2,
          name: 'Buy 1 Get 1 Free on Accessories',
          price: 15.99,
          image: 'https://via.placeholder.com/300x200',
          endTime: new Date().getTime() + 43200000, // 12 hours from now
          availableSizes: ['One Size'],
          selectedSize: 'One Size'
        },
        {
          id: 3,
          name: '30% Off Winter Jackets',
          price: 49.99,
          image: 'https://via.placeholder.com/300x200',
          endTime: new Date().getTime() + 172800000, // 2 days from now
          availableSizes: ['S', 'M', 'L', 'XL'],
          selectedSize: 'L'
        },
        {
          id: 4,
          name: '20% Off Footwear',
          price: 39.99,
          image: 'https://via.placeholder.com/300x200',
          endTime: new Date().getTime() + 259200000, // 3 days from now
          availableSizes: ['US 6', 'US 7', 'US 8', 'US 9'],
          selectedSize: 'US 8'
        }
      ],
      limitedEdition: [
        {
          id: 1,
          name: 'Custom Gold Bracelet',
          price: 199.99,
          image: 'https://via.placeholder.com/300x200',
          availableColors: ['Gold', 'Silver', 'Rose Gold'],
          selectedColor: 'Gold'
        },
        {
          id: 2,
          name: 'Limited Edition Watch',
          price: 499.99,
          image: 'https://via.placeholder.com/300x200',
          availableColors: ['Black', 'Blue', 'Green'],
          selectedColor: 'Black'
        },
        {
          id: 3,
          name: 'Designer Sunglasses',
          price: 99.99,
          image: 'https://via.placeholder.com/300x200',
          availableColors: ['Brown', 'Black', 'Tortoise'],
          selectedColor: 'Brown'
        },
        {
          id: 4,
          name: 'Handcrafted Leather Bag',
          price: 299.99,
          image: 'https://via.placeholder.com/300x200',
          availableColors: ['Brown', 'Black', 'Tan'],
          selectedColor: 'Brown'
        }
      
      ]
    };
  },
  methods: {
    timeLeft(endTime) {
      const timeDifference = endTime - new Date().getTime();
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      return `${hours}h ${minutes}m ${seconds}s`;
    },
    addToCart(product) {
      // Logic for adding product to the cart, including size/color selection
      console.log(`${product.name} added to cart with ${product.selectedSize || product.selectedColor}`);
    }
  }
};
</script>

<style scoped>
.special-offers {
  padding: 40px 40px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
}

.deals-of-the-week,
.limited-edition {
  margin-bottom: 40px;
}
.product-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.deal-card,
.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  padding: 15px;
}

.deal-card:hover,
.product-card:hover {
  transform: translateY(-10px);
}

.deal-card img,
.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.deal-info,
.product-info {
  padding: 15px;
}

.deal-info h4,
.product-info h4 {
  font-size: 1.25rem;
  margin: 10px 0;
  font-weight: bold;
  text-align: left;
}

.deal-price,
.product-price {
  font-size: 1.1rem;
  color: #ff6347;
  margin-top: 5px;
  text-align: left;
}

.deal-timer p {
  font-size: 1rem;
  color: #888;
  margin-top: 5px;
  text-align: left;
}

.deal-timer span {
  font-weight: bold;
  color: #ff6347;
  
}

.product-options {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 10px; */

}

.product-options select {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #ff6347;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e53e3e;
}

@media screen and (max-width: 768px) {
  .deal-card,
  .product-card {
    width: 100%;
    margin-bottom: 20px;
    box-shadow: none;
  }
}
</style>
