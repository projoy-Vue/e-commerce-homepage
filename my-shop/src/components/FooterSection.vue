<template>
    <footer class="footer">
      <div class="footer-content">
        <!-- Quick Links -->
        <div class="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/customer-service">Customer Service</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/shipping">Shipping Policies</a></li>
            <li><a href="/returns">Return & Exchange</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
  
        <!-- Social Media -->
        <div class="social-media">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="https://www.instagram.com" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
  
        <!-- Payment Methods -->
        <div class="payment-methods">
          <h3>We Accept</h3>
          <div class="payment-icons">
            <img src=" https://" alt="PayPal" class="payment-icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_2021_logo.svg" alt="Visa" class="payment-icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/MasterCard_logo.svg" alt="Mastercard" class="payment-icon" />
          </div>
        </div>
      </div>
  
      <!-- Copyright Info -->
      <div class="footer-bottom">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .quick-links,
  .social-media,
  .payment-methods {
    width: 30%;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    margin: 10px 0;
  }
  
  ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  ul li a:hover {
    text-decoration: underline;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .social-icon {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-icon:hover {
    color: #ff6347;
  }
  
  .payment-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .payment-icon {
    width: 50px;
    height: auto;
  }
  
  .footer-bottom {
    margin-top: 30px;
    font-size: 0.9rem;
    color: #bbb;
  }
  
  @media screen and (max-width: 768px) {
    .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    
    }
  
    .quick-links,
    .social-media,
    .payment-methods {
      width: 100%;
      margin-bottom: 20px;
    }
  
    .footer-bottom {
      text-align: center;
    }
  }
  </style>
  