export const commMixin={    
    data() {
        return {
        questionSetData : [],
        }
    },
    mounted(){        
        this.questionSetData= this.$store.getters.getQuestionSet;
    },
    methods: {
        setQuestionView(index){
            this.$store.commit("updateViewQuestion",index);
        }
    }
}