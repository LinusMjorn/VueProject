const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            books: [
                {title: "Name of the Wind", author: 'Patrick Rothfuss'},
                {title: "An Alloy of Law", author: 'Brandon Sanderson'},
                {title: "Mistborn", author: 'Brandon Sanderson'}

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