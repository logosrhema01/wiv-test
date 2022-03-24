<template>
    <div class="container-md my-5">
        <div class="row">
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <!-- Filter by categories -->
                <select class="form-select py-2 shadow-sm text-capitalize mb-4" v-model="filterByCategory">
                    <option value="">All Grapes</option>
                    <option :value="product" v-for="product in eliminateDuplicatedCategories($store.state.products)" :key="product.id">
                        {{product}}
                    </option>
                </select>
                <!-- Sort by prices -->
                <select class="form-select py-2 shadow-sm mb-4" v-model="sortByPrice" @change="sortProductsByPrice($store.state.products)">
                    <option value="" disabled>Sort By Price</option>
                    <option value="increasingOrder">Increasing Order</option>
                    <option value="decreasingOrder">Decreasing Order</option>
                </select>
            </div>
            
            <div class="col-xl-10 col-lg-9 col-md-8 col-sm-7">
                <!-- Search Products -->
                <div class="input-group mb-4 shadow-sm">
                    <span class="input-group-text bg-white" id="basic-addon1">
                        <i class="fas fa-search"></i>
                    </span>
                    <input type="text" class="form-control py-2" placeholder="Search for a product..." aria-label="Username" aria-describedby="basic-addon1" v-model="searchProduct">
                </div>
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
                                    <span class="text-muted">Grape: </span>
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
	        <div class="d-flex justify-content-center">
		<nav aria-label="Products Pagination">
		    <ul class="pagination">
			<li class="page-item">
			    <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
			</li>
			<li class="page-item" v-for="pageNumber in pages.slice(page-1, page+5)">
			    <button type="button" class="btn btn-primary" v-if="page === pageNumber" disabled> {{pageNumber}} </button>
			    <button type="button" class="page-link" v-else @click="page=pageNumber"> {{pageNumber}} </button>
			</li>
			<li class="page-item">
			    <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
			</li>
		    </ul>
		</nav>	
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
	    page: 1,
	    pages: [],
	    perPage: 10,
	    products: [],
            sortByRating: ''
        }
    },
    watch: { 
	filterProducts(){
		this.setPages()
	}
    },
    computed:{
        filterProducts(){
            return this.paginate(this.$store.state.products.filter(product => {
                return product.title.toLowerCase().includes(this.searchProduct.toLowerCase()) &&
                       this.capitalized(product.category).includes(this.capitalized(this.filterByCategory))
            }))
        }
    },
    methods:{
	setPages(){
		let numberOfPages = Math.ceil(this.$store.state.products.length / this.perPage);
		for (let index = 1; index <= numberOfPages; index++) {
			this.pages.push(index);
		}
	},
	paginate (products) {
		let page = this.page;
		let perPage = this.perPage;
		let from = (page * perPage) - perPage;
		let to = (page * perPage);
		return  products.slice(from, to);
	},
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
