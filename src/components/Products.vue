<template>
    <div class="container-md my-5">
        <div class="row">
            
            <div class="col-xl-10 col-lg-9 col-md-8 col-sm-7">
               
                <!-- Display Products -->
                <div class="d-flex flex-wrap justify-content-sm-between justify-content-center">
                    <div class="card mb-4 shadow-sm" v-for="product in filterProducts" :key="product.id">
                        <div class="card-img">
                            <img :src="product.image" class="card-img-top img-fluid" :alt="product.title">
                        </div>
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h4 class="card-title mb-3">{{formatProduct(product.title)}}</h4>
                                <p class="my-2">
                                    <span class="text-muted">Region: </span>
                                    <span class="text-capitalize">
                                        {{product.category}}
                                    </span>
                                </p>
                                <p class="my-2">
                                    <span class="text-muted">Price: </span>
                                    <span class="text-capitalize">
                                        <span v-if="product.price == 'NaN' || product.price == 'No Price Data'">
                                            No Price Data
                                        </span>
                                        <span v-else>
                                            <i class="fas fa-dollar-sign"></i>
                                            {{product.price}}
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <div class="d-inline-block mt-4">
                                <router-link :to="'/product/' + product.id" class="text-decoration-none">
                                    <button class="btn btn-warning btn-sm w-100 d-flex align-items-center justify-content-center">
                                        More Info
                                        <i class="fas fa-angle-double-right mx-1"></i>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products',
    data(){
        return{
            searchProduct: '',
            filterByCategory: '',
            sortByPrice: '',
            sortByRating: ''
        }
    },
    computed:{
        filterProducts(){
            return this.$store.state.transactions.filter(product => {
                return product.title.toLowerCase().includes(this.searchProduct.toLowerCase()) &&
                       this.capitalized(product.category).includes(this.capitalized(this.filterByCategory))
            })
        }
    },
    methods:{
        formatProduct(product){
            if(product){
                return product.slice(0,15) + '...'
            }else{
                return 'Undefined'
            }
        },
        eliminateDuplicatedCategories(products){
            let arr = []
            products.forEach(product => {
                arr.push(product.category)
            })
            return [...new Set(arr)];
        },
        capitalized(data){
            return data.charAt(0).toUpperCase() + data.slice(1)
        },
        sortProductsByPrice(products){
            this.sortByRating = ''
            if(this.sortByPrice == 'increasingOrder'){
                return products.sort((a, b) => a.price - b.price)
            }else if(this.sortByPrice == 'decreasingOrder'){
                return products.sort((a, b) => b.price - a.price)
            }
        },
        sortProductsByRating(products){
            this.sortByPrice = ''
            if(this.sortByRating == 'increasingOrder'){
                return products.sort((a, b) => a.rating.rate - b.rating.rate)
            }else if(this.sortByRating == 'decreasingOrder'){
                return products.sort((a, b) => b.rating.rate - a.rating.rate)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        width: 21.25rem;
        .card-img{
            height: 22.5rem;
            width: 100%;
            img{
                height: 100%;
                width: 100%;
                transform: scale(0.75);
            }
        }
    }
</style>