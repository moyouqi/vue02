 <template>
   <div id='app'>
    <my-home></my-home>
    <router-view></router-view> 
    {{msg}}
   </div>
 </template>

 <script type="text/javascript">
   
   export default {
    data(){
      return {
        msg:'我是一个组件',
        list:['11','222','333'],
      }
    },
    // methods:{
    //   function ZengJia(){
    //     alert('2222')

    //   }

    // }
   }
 </script>