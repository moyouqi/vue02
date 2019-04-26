<template>
	<div class="main container" id="main">
		<div class="mian-content">
			<div class="mian_subject">
				<ul class="main_list">
					<li class="item" v-for="item in list">
						<router-link :to="{name:'deails'}" class="main_box"> 
							<div class="main_info">
								<ul class="main_info_row meta-list">
									<li class="item post">{{item.classname}}</li>
									<li class="item username clickable">
										<div class="user-popover-box">
										 <a  href="/user/5bd7bd2cf265da0ad63c15bb"  >{{item.author}}</a>
										</div>
									</li>
									<li class="item">{{item.posttime}}</li>
									<li class="item tag">
										<a href="/" class="tag">架构</a><a href="/" class="tag">JVM</a>
									</li>
								</ul>
								<div class="main_info_row title-row">
									<a href="/"  class="title">{{item.title}}</a>
								</div>
								<ul class="main_info_row action-list">
									<li class="item like clickable">
										<a class="title-box">
											<img  src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" class="icon">
											<span  class="count">1</span>
										</a>
									</li>
									<li class="item comment clickable">
										<a  href="" rel="" class="title-box"><img src=" " class="icon"><span  class="count">{{item.hits}}</span></a>
									</li> 
								</ul>
							</div>
							<div class="main_img">
								<img src="https://user-gold-cdn.xitu.io/2019/4/24/16a4eb74c2b3ce02?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1">
							</div>
						</router-link>
					</li>
					 
					 
				</ul>
			</div>
			<div class="mian_side"> 
				    <div class="header">
				        <div class="title">
				            <span >热门标签 </span>
				        </div>
				        <div class="right">
				            <a href="/"  class="tag-link" >查看全部 </a>
				        </div>
				    </div>
				    <div class="content">
				        <div class="tag-list">
				            <a href="/" class="tag"  >  架构 </a>
				            <a href="/" class="tag" > 开源 </a>
				            <a href="/" class="tag" >  算法 </a>
				            <a href="/"class="tag" >  GitHub </a>
				            <a href="/" class="tag" > 面试 </a>
				            <a href="/"  class="tag" > 代码规范 </a>
				            <a href="/" class="tag" > 产品 </a>
				            <a href="/"  class="tag" > 掘金翻译计划 </a>
				        </div>
				    </div>
				</div>
			</div>
		</div>
		 
	</div>
</template>
<script type="text/javascript">
	import Axios from 'axios'
	export default {
		data(){
			return{

				msg:'首页qq',
				list:[]
			}
		},
		methods:{
			getdata(){
			  var api = 'http://moyouqi1.gz01.bdysite.com/api/api_news.php?cid='+this.list.id ;
			     //  var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
				Axios.get(api).then((response)=>{
                        console.log(response);
                        this.list=response.data;
                        //注意this指向 

                    },function(err){

                            console.log(err);

                    })
			}

		},
		mounted(){
			this.getdata();
		}
	}
</script>