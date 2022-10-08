const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            image: 'https://i.postimg.cc/Y9YKdC0w/socks-green.jpg',
            product: 'Socks',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: 'https://i.postimg.cc/Y9YKdC0w/socks-green.jpg'},
                {id: 2235, color: 'blue', image: 'https://i.postimg.cc/BbMKWb1k/socks-blue.jpg'}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})