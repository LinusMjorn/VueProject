const app = Vue.createApp({
    data(){
        return {
            url: "http://www.google.com", 
            showBooks: true,
            books: [
                {title: "Name of the Wind", author: 'Patrick Rothfuss', img:'assets/1.jpg'},
                {title: "An Alloy of Law", author: 'Brandon Sanderson', img:'assets/2.jpg'},
                {title: "Mistborn", author: 'Brandon Sanderson', img:'assets/3.jpg'}

            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
     
    }
    
})

app.mount('#app') 