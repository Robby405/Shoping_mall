<template>
	<div class="recommend">
		<div class="title">推荐商品</div>
		<div class="content">
			<div class="content_item" v-for="(item,index) in items" :key="index">
				<img src="@/assets/logo.png" alt="">
				<p class="name">高端奢侈品衣服衣服衣服</p>
				<div class="desc">
					<span class="price">￥1000</span>
					<span class="price_pre">￥1500</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: "recommend",
		data(){
			return{
				items: [1,2,3]
			};
		},
		mounted(){

		}
	};
</script>
<style lang="less" scoped>
.recommend{
	background: #eee;
	.title{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: gray;
		border-bottom: 1px solid #000;
		background: #fff;
	}
	.content{
		display: flex; //flex布局
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		.content_item{
			background: #fff;
			margin-bottom: 5px;
			width: 200px;
		}
		img{
			width: 100%;
			height: 200px;
		}
		.name{
			padding: 0 5px;
			font-size: 13px;
			.desc{
				padding: 0 5px;
				overflow: hidden;
				font-size: 13px;
				.price{
					color: red;
				}
				.price_pre{
					color: #8e8e8e;
					text-decoration: line-through;
				}
			}
		}
	}
}
</style>