<template>
    <div id="app">
        aaa
        <el-button @click="a()"></el-button>
    </div>
</template>

<script>



    export default {
        name: "login",
        methods:{
            a(){
                alert(1)
                this.$router.push({ name: 'improtExcel'})
            }
        }



    }
</script>

<style scoped>

</style>