new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        word: "",
        collection: "",
        words:[]
    },
    methods: {
        Save() {
            console.log("Type a word" + this.word)
            this.words.push(this.word)
            console.log(this.words.toString())
            if(this.word == ""){
                this.collection = "No word"
            }
            else{
                this.collection = this.word
            }
        },
        Show() {
            this.collection=this.words.toString()
            if(this.words == ""){
                this.collection="No words"
            }
            else{
                this.collection = this.words
            }
        },
        Clear(){
            this.words=[]
            this.collection=[]
        }
    }
})