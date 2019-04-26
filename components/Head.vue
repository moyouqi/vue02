 <template>
     <div class="header">
         <div class="container">
           <a href="/"><img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"></a> 
           <nav>
            <ul class="nav-list">
              <li class="main-nav-list nav-item">
                <ul class="">
                   <li><router-link :to="{ name: 'main'}"  >首页</router-link></li>
                   <li><router-link :to="{ name: 'news'}"  >新闻</router-link></li>
                 </ul>
              </li>
              <li class="search nav-item">
                <form  role="search" class="search-form">
                  <input  type="search" maxlength="32" placeholder="搜索更新啦" class="search-input">
                  <img   src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt="搜索" class="search-icon">
                </form>
              </li>
              <li   class="nav-item auth">
                <span class="login">登录</span>
                <span class="register">注册</span>
              </li>
            </ul>
             
           </nav>
          </div>
     </div>
 </template>

 <script type="text/javascript">
import '../assets/style.scss'
 
     export default{
        data() {
            return {               
             
            }
        },
        methods:{
            
        },
        mounted(){
            
        }
     }
 </script>