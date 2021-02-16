const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: "The Final Empire",
            age: 45,
            author: "Brandon Sanderson",
            x:0,
            y:0

        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(ev,data) {
            console.log(ev,ev.type)
            if (data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        }
     
    }
    
})

app.mount('#app') 