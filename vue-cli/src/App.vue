<template>
  <!-- ✔ template에는 반드시 태그가 하나만 있어야 한다 !! -->
  <div>
    <!-- {{str}} -->

    <!-- <app-header v-bind:프롭스속성이름="상위컴포넌트의데이터이름"/> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"
    />

  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  export default {
  // cli 부터는 data:{}로만 값을 넣으면 에러
  // 무조건 function(){ 
  //    return { 
  //
  //    }
  //  } 으로 return에 새로운 객체를 만들어야 한다. 
  data: function () {
    return{
      str: 'Header' 
    }
  },
  components: {
    'app-header': AppHeader
  },
  props:['propsdata'],
  methods:{
    renewStr : function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>