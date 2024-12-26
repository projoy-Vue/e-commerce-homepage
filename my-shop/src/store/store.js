import { createStore } from 'vuex';
import productsData from '../data/products.json'; // Import product JSON
console.log(productsData);

const store = createStore({
  state: {
    products: [], // Holds the product list
    filteredProducts: [], // Holds the filtered product list
    cart: [], // Products added to the cart
    searchQuery: '',
    filters: {
      category: '',
      priceRange: [0, 100],
      inStock: true
    },
    sortOption: 'price'
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
      state.filteredProducts = products;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_FILTERS(state, filters) {
      state.filters = filters;
      console.log(state.filters);
    },
    SET_SORT_OPTION(state, option) {
      state.sortOption = option;
    },
    UPDATE_FILTERED_PRODUCTS(state) {
      let products = state.products;

      if (state.searchQuery) {
        products = products.filter(product =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      if (state.filters.category) {
        products = products.filter(product => product.category === state.filters.category);
      }

      if (state.filters.inStock) {
        products = products.filter(product => product.inStock === state.filters.inStock);
      }

      const [minPrice, maxPrice] = state.filters.priceRange;
      products = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

      if (state.sortOption === 'price') {
        products = products.sort((a, b) => a.price - b.price);
      } else if (state.sortOption === 'rating') {
        products = products.sort((a, b) => b.rating - a.rating);
      }

      state.filteredProducts = products;
    },
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    }
  },
  actions: {
    loadProducts({ commit }) {
      commit('SET_PRODUCTS', productsData); // Load products from JSON
    },
    updateFilteredProducts({ commit }) {
      commit('UPDATE_FILTERED_PRODUCTS');
    }
  },
  getters: {
    filteredProducts: state => state.filteredProducts,
    cart: state => state.cart,
    cartItemCount: state => state.cart.reduce((count, item) => count + item.quantity, 0)
  }
});

export default store;

