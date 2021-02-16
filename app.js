const app = Vue.createApp({
    data(){
        return {
            title: "The Final Empire",
            age: 45,
            author: "Brandon Sanderson"

        }
    },
    methods:{
        changeTitle(title){
            this.title = title
        }
    }
    
})

app.mount('#app') 