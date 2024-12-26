<template>
    <section class="testimonials">
      <h2>What Our Customers Are Saying</h2>
      
      <div class="carousel-container">
        <div class="carousel" :style="carouselStyle">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-content">
              <img :src="testimonial.customerPhoto" alt="Customer Photo" class="customer-photo" />
              <div class="testimonial-text">
                <p class="quote">"</p>
                <p class="testimonial">{{ testimonial.text }}</p>
                <p class="quote">"</p>
                <p class="customer-name">{{ testimonial.customerName }}</p>
                <p class="product-name">{{ testimonial.productName }}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="prev-btn" @click="prevSlide">Prev</button>
        <button class="next-btn" @click="nextSlide">Next</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            customerName: "John Doe",
            productName: "Personalized Coffee Mug",
            text: "I absolutely love this mug! It was exactly what I was looking for and makes my mornings even better.",
            customerPhoto: "https://via.placeholder.com/100",
            productPhoto: "https://via.placeholder.com/300x200",
          },
          {
            customerName: "Jane Smith",
            productName: "Custom Jewelry",
            text: "The custom necklace I ordered is stunning! Great craftsmanship, and it arrived on time. Highly recommend!",
            customerPhoto: "https://via.placeholder.com/100",
            productPhoto: "https://via.placeholder.com/300x200",
          },
          {
            customerName: "Michael Brown",
            productName: "Handmade Wooden Watch",
            text: "Amazing product! The attention to detail is unbelievable. It’s my new favorite accessory!",
            customerPhoto: "https://via.placeholder.com/100",
            productPhoto: "https://via.placeholder.com/300x200",
          }
        ],
        currentIndex: 0
      };
    },
    computed: {
      carouselStyle() {
        return {
          transform: `translateX(-${this.currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        };
      }
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .testimonials {
    padding: 50px 0;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: bold;
  }
  
  .carousel-container {
    position: relative;
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .testimonial-card {
    min-width: 100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .customer-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
  }
  
  .testimonial-text {
    font-size: 1rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .quote {
    font-size: 2rem;
    color: #ff6347;
    margin: 0;
  }
  
  .customer-name {
    font-weight: bold;
    margin-top: 10px;
    font-size: 1.2rem;
  }
  
  .product-name {
    font-size: 1rem;
    color: #888;
  }
  
  button {
    background-color: #ff6347;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #e53e3e;
  }
  
  .prev-btn {
    left: 0;
  }
  
  .next-btn {
    right: 0;
  }
  
  @media screen and (max-width: 768px) {
    .carousel-container {
      width: 100%;
    }
  
    .testimonial-card {
      padding: 10px;
    }
  
    .testimonial-text {
      font-size: 0.9rem;
    }
  }
  </style>
  