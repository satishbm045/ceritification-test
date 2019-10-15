<template>
  <div class="test-page">
    <TestHead />
    <div class="box">
      <div class="left-box">
        <TestComponent />
      </div>
      <div class="right-box">
        <QuestionLayout />
      </div>
    </div>
  </div>
</template>

<script>
import TestComponent from '@/components/TestComponent.vue'
import QuestionLayout from '@/components/QuestionLayout.vue'
import TestHead from '@/components/TestHead.vue'

export default {
  name: 'test',
  components: {
    TestComponent,
    QuestionLayout,
    TestHead
  }
}
</script>

<style>
.test-page{
  padding: 0px;
}
.box{
  display: flex;
  padding: 20px 40px;
}
.box .left-box{
  width: 75%;
}
.box .right-box{
  width: 25%
}
.test-page .top{
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