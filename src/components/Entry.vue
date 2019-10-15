<template>
  <div class="entry">
    <h1>{{ msg }}</h1>
    <div class="inputBox">
      <div class="left">
         Name:
      </div>
      <div class="right">
        <input class="input" type="text" name="Name" id="name" required v-model="nameOfCandidate">
      </div>
    </div>
    <div class="inputBox" >      
      <div class="left">
        Language:
      </div>
      <div class="right">
        <select class="input" v-model="selectedLanguage" v-on:change="filterLanguage(selectedLanguage)">
          <option disabled selected>Select</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>Dot Net</option>
        </select>
      </div>
    </div>
    <div class="submitBtn" v-on:click="submitBtn">
      Enter The Test
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  props: {
    msg: String
  },
  data() {
    return {
      selectedLanguage: "Select",
      nameOfCandidate : '',
      questionSet: this.$store.state.storeData,
      filteredQuestionSet: ''
    }
  },
  created(){
    if(localStorage.enteredDetails == "true"){
      this.$router.push({path: 'test'});
    }
  },
  methods: {
    filterLanguage(language){
      this.filteredQuestionSet = this.questionSet.data.filter(eachSet => eachSet.type.toLowerCase() == language.toLowerCase());
    },
    submitBtn(){
      if(this.nameOfCandidate == '' || this.selectedLanguage.toLowerCase() == 'select'){
        alert("Enter the Required Details");
        return;
      }
      localStorage.enteredDetails = true;
      this.$store.commit("updateOfNameAndLanguage",{"selectedLanguage":this.selectedLanguage,"nameOfCandidate":this.nameOfCandidate})
      this.$store.commit("updateQuestionSet",this.filteredQuestionSet[0]);
      this.$router.push({path: 'test'});
    }
  }
}
</script>

<style>
.entry{
  margin: 40px auto;
  max-width: 400px;
  border: 1px solid #000;
  padding: 20px;
}
.entry h1{
  text-align: center;
  padding: 30px 0px;
}
.entry .inputBox{
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
}
.entry .inputBox .left{
  width: 30%;
}
.entry .inputBox .right{
  width: 70%;
}
.entry .inputBox .input{
  width: 100%;
  height: 30px;
}
.submitBtn{
  text-align: center;
  margin: 10px auto;
  width: 150px;
  background: #555;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}
.submitBtn:hover{
  background: #333;
}
</style>