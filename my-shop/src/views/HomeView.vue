<template>
  <div class="home">
   <HeroSection />
   <FeaturedProducts/>
   <SpecialOffers/>
   <Testimonials/>
  
  </div>
</template>
<script>
import FeaturedProducts from "@/components/featured-products.vue";
import HeroSection from "@/components/HeroSection.vue";
import SpecialOffers from "@/components/special-offers.vue";
import Testimonials from "@/components/Testimonials.vue";
export default {
  name: "HomeView",
  components: {
    HeroSection,
    FeaturedProducts,
    SpecialOffers,
    Testimonials,
  },
};

</script>
