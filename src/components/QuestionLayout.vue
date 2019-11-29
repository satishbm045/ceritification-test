<template>
  <div class="qn-layout">
    <div class="heading">Mini Map</div>
    <div class="right-side">
      <div
        class="qn-no"
        v-for="(eachQuestionData, index) in questionSetData.details"
        :key="index"
      >
        <div
          class="number"
          :class="{
            done: eachQuestionData.isAnswered,
            active: isActive(index)
          }"
          v-on:click="setQuestionView(index)"
        >
          {{ index + 1 }}
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="submitBtn" v-on:click="submitTest()">Submit</div>
  </div>
</template>

<script>
import { commMixin } from "@/common/commonMixins.js";
export default {
  name: "QuestionLayout",
  mixins: [commMixin],
  methods: {
    isActive(index) {
      if (index == this.$store.state.viewQuestion) {
        return true;
      } else {
        return false;
      }
    },
    submitTest() {
      var ExistBtn = confirm("You wanted to submit the test");
      if (!ExistBtn) {
        return;
      }
      localStorage.enteredDetails = false;
      this.$router.push({ path: "/score" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix {
  clear: both;
}
.qn-layout .heading {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
}
.done {
  background: #ccccb3;
}
.qn-no {
  width: auto;
  float: left;
}
.qn-no .number {
  display: flex;
  justify-content: center;
  width: 50px;
  margin: 5px 5px;
  padding: 12px;
  border-radius: 50%;
  border: 1px solid #333;
  cursor: pointer;
}
.qn-no .number:hover {
  background: #333;
  color: #fff;
}
.qn-no .number.active {
  background: #555;
  color: #fff;
}
.qn-layout .submitBtn {
  margin: 30px auto;
}
</style>
