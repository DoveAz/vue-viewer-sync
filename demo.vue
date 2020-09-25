<template>
  <div>
    <nav>
      <a></a>
      <a></a>
      <a></a>
      <a></a>
    </nav>


    <div id="a">a</div>
    <div id="b">b</div>
    <div id="c">c</div>
    <div id="d">d</div>


    <div id="bim"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:''
    }
  }
}
</script>

<style>
#bim{
  visibility: hidden;
  background-color: red;
}

#a{
  width: 400px;
  height: 200px;
}
#c{
  width: 600px;
  height: 600px;
  border-radius: 50%;
}
#c{
  width: 880px;
  height: 300px;
}
#d{
  width: 1000px;
  height: 100px;
}
</style>
