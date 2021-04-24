Vue.component('product' , {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
  
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
      <p>{{ sale }}</p>
      <p>shipp: {{ shipp }} </p>

      <ul>
        <h4>details</h4>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <ul>
        <h4>sizes</h4>
        <li v-for="size in sizes">{{ size }}</li>
      </ul>

      <div v-for="(variant, index) in variants" 
      :key="variant.varianId"
      class="color-box"
      :style="{backgroundColor: variant.variantColor}"
      v-on:click="update(index)">
      </div>
      
      <button v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabledButton: !inStock}">add to cart</button>
      
      <button @click="remove">
      Remove from cart
      </button>
      
      <div class="cart">
        <p>cart({{cart}})</p>
      </div>
    </div>  
    
  </div>
  `,
  data() {
    return { 
      product: 'Socks',
    brand: 'vue',
    seleact:0,
    details:['80% cotton' , '20% polyester' , 'gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green' ,
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        vqn:10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        vqn:0
      }
    ],
    sizes: ['S' , 'M' , 'L' , 'XL'],
    cart: 0,
    onSale: true
  }
},
  methods: {
    addToCart() {
      this.cart += 1
    },
    update(index) {
      this.seleact = index
    },
    remove() {
      if(this.cart > 0) {
        this.cart -=1
      }
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.seleact].variantImage
    },
    inStock() {
      return this.variants[this.seleact].vqn
    },
    sale() {
      if(this.onSale) {
        return this.brand + ' ' +this.product +' are on sale!'
      }
        return this.brand + ' ' +this.product +' are not on sale!'
    },
    shipp() {
      if (this.premium) {
        return "free"
      }
      return "2.99$"
    }
  }
}) 



var app = new Vue({
  el: '#app',
  data: {
    premium: false
  }
})