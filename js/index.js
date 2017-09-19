window.onload=function(){
//header开始
	let headerRight=document.getElementsByClassName('header-right')[0];
	// console.log(headerRight)
	let shijian1=headerRight.getElementsByClassName('shijian1')[0];
	// console.log(shijian1)
	let none1=headerRight.getElementsByClassName('none1')[0];
	// console.log(none1)
	shijian1.onmouseover=function(){
		shijian1.style.background='#fff';
		none1.style.display='block';
		
	}
	shijian1.onmouseout=function(){
		shijian1.style.background='none';
		none1.style.display='none';
	}


//侧导航开始
	let aside=document.getElementsByTagName('aside')[0];
	// console.log(aside)
	let lis=aside.getElementsByTagName('li');
	// console.log(lis)
	// 只有用第三种方法时,才不需要下一行代码
	let items=aside.getElementsByClassName('item');
	// console.log(items);
	
//第一种方法
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onmouseover=function(){
	// 		items[i].style.display='block';
	// 	}
	// 	lis[i].onmouseout=function(){
	// 		items[i].style.display='none';
	// 	}

// 第二种方法 
		// for(let i=0;i<lis.length;i++){
		// lis[i].onmouseover=function(){
		// 	items[i].className='item block';
		// }
		// lis[i].onmouseout=function(){
		// 	items[i].className='item';
		// }

//第三中方法 
		for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let item=this.getElementsByClassName('item')[0];	
			item.style.display='block';
		}
		lis[i].onmouseout=function(){
		let item=this.getElementsByClassName('item')[0];	
			item.style.display='none';
		}
	}

// btns开始
	let bannerbtnlist=document.getElementsByClassName('banner-btn-list')[0];
	let btnlis=bannerbtnlist.getElementsByTagName('li');
	// console.log(btnlis)
	let viewimg=document.getElementsByClassName('view-img')[0];
	let viewimgli=viewimg.getElementsByTagName('li');
// console.log(viewimgli)

//方法一	
// 默认第一个btn的颜色与边框显示
	let num=0;	
	btnlis[0].style.background='rgba(255,255,255,0.8)';
	for(let i=0;i<btnlis.length;i++){
		btnlis[i].onmouseover=function(){
			for(let i=0;i<viewimgli.length;i++){
				viewimgli[i].style.zIndex=1;
				btnlis[i].style.background='';
				
			}
			viewimgli[i].style.zIndex=2;
			btnlis[i].style.background='rgba(255,255,255,0.8)';
			num=i;
			}

	}

//图片自动轮播
	let t=setInterval(move,2000);
	
	function move(){
		num++;
		if(num==viewimgli.length){
			num=0;
		}
		for(let i=0;i<viewimgli.length;i++){
			viewimgli[i].style.zIndex=1;
			btnlis[i].style.background='#9D9890';
			
		}
		viewimgli[num].style.zIndex=2;
		btnlis[num].style.background='#fff';
		
	}


		
	//方法二 只操作两张图片(now默认第一张与下一张被点击的图)
	// let now=0;
	// btnlis[0].style.background='#fff';
	// for(let i=0;i<btnlis.length;i++){
	// 	btnlis[i].onmouseover=function(){
	// 		viewimgli[now].style.zIndex=1;
	// 		btnlis[now].style.background='';
	// 		viewimgli[i].style.zIndex=2;
	// 		btnlis[i].style.background='#fff';
	// 		now=i;
	// 		num=now;
	// 	}
	// }


//鼠标移入让轮播停止
	let view=$('.view')[0];

	view.onmouseenter=function(){
		clearInterval(t);
	}
	view.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	



}
