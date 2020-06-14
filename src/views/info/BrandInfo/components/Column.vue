<template>
  <el-table-column :label="this.label" :prop="this.result(this.prop)">

  </el-table-column>
</template>

<script>
  export default {
    name: "Column",
    data() {
      return {}

    },
    methods:{
      result(data) {
        return data
      }
    },
    computed: {

    },
    props: ['label', 'prop']
  }
</script>

<style scoped>

</style>
