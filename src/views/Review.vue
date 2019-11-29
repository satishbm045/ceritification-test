<template>
  <div class="review">
    <div class="qn-container"> 
      <div class="data" >
        <h1 style="text-align: center;">Review</h1>
        <h4>score : {{this.score}} of {{this.total}}</h4>
        <h4>{{ percentage }}% Correct</h4>
        <div
          class="each-qn"
          v-for="(eachQuestionData, index) in questionSetData.details"
          :key="index"
        >
          <div class="question">
            {{ index + 1 }}. {{ eachQuestionData.question }}
          </div>
          <div class="option-list">
            <div class="head">Options:</div>
            <div
              class="option"
              v-for="(option, index) in eachQuestionData.options"
              v-bind:key="index"
              :class="{'bg-green' : isBgGreen(option,eachQuestionData), 'bg-red' : isBgRed(option,eachQuestionData)}"
            >
              <input
                class="input"
                type="radio"
                v-model="eachQuestionData.userAnswer"
                :value="option"
                :id="'qn-' + index" disabled
              />
              <label :for="'qn-' + index">{{ option }}</label>
              <span v-if="eachQuestionData.userAnswer.length > 0 && eachQuestionData.userAnswer == option" style="float:right;">Selected Answer</span>
              <span v-else-if="option == eachQuestionData.answer && eachQuestionData.answer != eachQuestionData.userAnswer" style="float:right;">Correct Answer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { commMixin } from "@/common/commonMixins.js";
export default {
  name: "Review",
  props: ['score','total'],
  mixins: [commMixin],
  computed: {
    percentage(){
      return ((this.score / this.total) * 100).toFixed(0);
    }
  },
  methods: {
    isBgGreen(option,question){
      if(question.userAnswer == option && question.answer == question.userAnswer){
        return true;
      }else{
        if(option == question.answer && question.answer != question.userAnswer){
          return true;
        }
        return false;
      }
    },
    isBgRed(option,question){
      if(question.userAnswer == option && question.answer != question.userAnswer){
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>

<style >
.review .bg-green{
  background-color : #66ff66;
  color: #fff;
}
.review .bg-red{
  background-color: #ff4d4d;
  color: #fff;
}
.review .qn-container{
  margin: 60px 120px;
}
.review .qn-container .each-qn{
  padding-bottom: 40px; 
}
.review .option-list .head{
  margin: 5px 0px;
}
</style>