<template>
  <div class="score">
    <div class="data">      
      <h2>Result :</h2>
      <div :style="{ color: backgroundColor }">
        {{ nameOfCandidate }} you secured {{ securedScore }} of {{ totalScore }}
        score in {{ selectedLanguage }}. <br />
        {{ resultText }}
      </div>
    </div>
    <div class="submitBtn" v-on:click="clickToReview()">Click to Review</div>
    <div class="submitBtn" v-on:click="goHome()">Go to Home</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "score",
  data() {
    return {
      nameOfCandidate: this.$store.state.nameOfCandidate,
      selectedLanguage: this.$store.state.selectedLanguage,
      questionSet: [],
      totalScore: 0,
      correctScore: 0,
      backgroundColor: "white"
    };
  },
  created() {
    (this.questionSet = this.$store.getters.getQuestionSet),
      (this.totalScore = this.$store.getters.getQuestionSetLength);
  },
  computed: {
    securedScore() {
      this.questionSet.details.map((ele, index) => {
        if (ele.isAnswered && ele.userAnswer == ele.answer) {
          this.correctScore++;
        }
      });
      return this.correctScore;
    },
    resultText() {
      var percentage = (this.securedScore / this.totalScore) * 100;
      if (percentage < 35) {
        this.backgroundColor = "#B61308";
        return "oops.. sorry try one more time";
      } else if (percentage < 65) {
        this.backgroundColor = "#B6AB08";
        return "well tried but need more knowledge";
      } else {
        this.backgroundColor = "green";
        return "Oh great! you did it";
      }
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
      document.location.reload();
      this.$store.dispatch("goToHomedefault");
    },
    clickToReview(){
      this.$router.push({ name:'review', params: {score: this.correctScore, total: this.totalScore } });
    }
  }
};
</script>
<style scoped>
.score {
  text-align: center;
}
.data {
  font-size: 36px;
  margin: 40px auto;
}
</style>
