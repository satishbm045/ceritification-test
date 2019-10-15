<template>
    <div class="score" :style="{color:backgroundColor}">
        <div class="data">
            {{nameOfCandidate}} you secured {{securedScore}}/{{totalScore}} score in {{selectedLanguage}}. <br />
            {{resultText}} 
        </div>
        <div class="submitBtn" v-on:click="goHome()">Go to Home</div>
    </div>
</template>

<script>
// @ is an alias to /src

  export default {
    name: 'score',
    data(){
        return{
            nameOfCandidate: this.$store.state.nameOfCandidate,
            selectedLanguage: this.$store.state.selectedLanguage,
            questionSet:[], 
            totalScore: 0,
            correctScore: 0,
            backgroundColor: 'white'
        }
    },
    created(){
        this.questionSet= this.$store.getters.getQuestionSet, 
        this.totalScore= this.$store.getters.getQuestionSetLength
    },
    computed:{
        securedScore(){
            this.questionSet.details.map((ele,index)=>{
                if(ele.isAnswered && ele.userAnswer == ele.answer){
                    this.correctScore++;
                }
            })
            return this.correctScore;
        },
        resultText(){
            var percentage = this.securedScore/this.totalScore*100;
            if(percentage < 35){
                this.backgroundColor = "red";
                return "oops.. sorry try one more time";
            }else if(percentage < 65){
                this.backgroundColor = "yellow";
                return "Well tried but need more knowledge";
            }else{
                this.backgroundColor = "green";
                return "Oh great! you did it";
            }
        }
    },
    methods:{
        goHome(){
            this.$router.push({path: '/'});
            document.location.reload();
            this.$store.dispatch("goToHomedefault");
        }
    }

  }
</script>
<style scoped>
    .score{
        text-align: center;
    }
    .data{
        font-size: 36px;
        margin: 40px auto;
    }
</style>
