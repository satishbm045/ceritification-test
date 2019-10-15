<template>
    <div class="top" v-if="checkShowScore">
        <div class="heading">      
            Hi {{nameOfCandidate}}!
        </div>
        <div class="Timer" id="timer">{{settime}}:00</div>
    </div>
</template>

<script>
export default {
  name: 'TestHead',
  data() {
    return {
      nameOfCandidate: this.$store.state.nameOfCandidate,
      selectedLanguage: this.$store.state.selectedLanguage,
      showScoreComponent: false,
      settime: this.$store.getters.getQuestionSetLength
    }
  },
  mounted(){
    var self = this;
     setTimeout(function () {self.countdown(self.settime)},1000);
  },
  computed:{
    checkShowScore(){
      if(this.showScoreComponent){
        this.$router.push({path:'/score'});
        return false;
      }else{
        return true;
      }
    }
  },
  methods:{
    countdown(minutes) {
      var self = this;
      var seconds = 60;
      var mins = minutes
      function tick() {
          var counter = document.getElementById("timer");
          var current_minutes = mins-1
          seconds--;
          counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
          if( seconds > 0 ) {
            setTimeout(tick, 1000);
          } else {
              if(mins > 1){
                setTimeout(function () { self.countdown(mins - 1); }, 1000);
              }else{
                alert("Your Time is completed");
                localStorage.enteredDetails = false;
                self.showScoreComponent = true;
              }
          }
      }
      tick();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test .top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #333;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  padding: 10px;
}
</style>
