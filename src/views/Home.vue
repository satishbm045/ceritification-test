<template>
  <div class="home">
    <Entry msg="Welcome to Test"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import Entry from '@/components/Entry.vue'

  export default {
    name: 'home',
    components: {
      Entry
    }
  }
</script>
