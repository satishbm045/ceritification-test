<template>
  <div class="test">
    <div class="qn-container">
      <div class="each-qn" v-for="(eachQuestionData,index) in questionSetData.details" :key="index">
        <div class="data" v-if="viewQuestion == index">
          <div class="qn-heading">Question {{index+1}} of {{questionSetData.details.length}}: </div>
          <div class="question">{{index+1}}. {{eachQuestionData.question}}</div>
          <div class="option-list">
            <div class="head">Options:</div>
            <div class="option" v-for='(option, index) in eachQuestionData.options' v-bind:key="index" v-on:change="optionChange(eachQuestionData)">
              <input class="input" type="radio" v-model="eachQuestionData.userAnswer" :value="option" :id="'qn-'
              +index">
              <label :for="'qn-'+index">{{option}}</label>
            </div>
          </div>
          <div class="Btn">
            <div class="submitBtn back" v-if="index > 0" v-on:click="setQuestionView(index-1)">
              Back
            </div>
            <div class="submitBtn next" v-if="index < questionSetData.details.length-1" v-on:click="setQuestionView(index+1)">
              Next
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      questionSetData : [],
      view: 0,
      nameOfCandidate: this.$store.state.nameOfCandidate,
      selectedLanguage: this.$store.state.selectedLanguage
    }
  },
  created(){
    if(localStorage.enteredDetails == "false"){
      this.$router.push({path: '/'});
    }
  },
  mounted: function () {
    this.questionSetData= this.$store.getters.getQuestionSet;
  },
  computed:{
    viewQuestion(){
        return this.$store.state.viewQuestion;
    }
  },
  methods: {
    setQuestionView(index){
      this.$store.commit("updateViewQuestion",index);
    },
    optionChange(selectedQn){
      updateStore(this,selectedQn);
    }
  }
}
function updateStore(prmThis,selectedQn){  
  if(selectedQn.userAnswer == selectedQn.answer){
    prmThis.questionSetData.userScore++;
    prmThis.$store.commit("updateQuestionSet",prmThis.questionSetData);
  }else{
    if(selectedQn.isAnswered){
      prmThis.questionSetData.userScore--;
    }
    prmThis.$store.commit("updateQuestionSet",prmThis.questionSetData);
  }
  if(selectedQn.userAnswer != ''){
    selectedQn.isAnswered = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Btn{
  display: block;
  margin-top: 20px; 
}
.Btn .submitBtn{
    display: inline-block;
    padding: 10px;
    background: #666;
    color: #fff;
    width: 100px;
    text-align: center;
    cursor: pointer;
}
.Btn .submitBtn:hover{
  background: #444;
}
.Btn .next{
  float: right;
}
.qn-container{
  margin: 0px 100px 0px 50px;
}
.qn-container .qn-heading{
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
}
.question{
  padding: 15px 20px;
  background: #555;
  color: #fff;
}
.option-list .head{
  margin: 20px 0px;
  font-size: 18px;
}
.option-list .option{
  padding: 10px;
}
.option-list .option .input{
  cursor: pointer;
}
.option-list .option label{
  cursor: pointer;
  margin-left: 10px;
}
</style>
