window.onload=function(){

	//banner  渐入渐出
	var oDiv=document.getElementById('bandiv');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	var oOl=oDiv.getElementsByTagName('ol')[0];
	var aBtn=oOl.children;
	var oPrev=oDiv.getElementsByTagName('a')[0];
	var oNext=oDiv.getElementsByTagName('a')[1];
	var iNow=0;
	var timer=0;

	oDiv.onmouseover=function(){
		oPrev.style.display='block';
		oNext.style.display='block';
		clearInterval(timer);
	};
	oDiv.onmouseout=function(){
		oPrev.style.display='none';
		oNext.style.display='none';
		clearInterval(timer);
		timer=setInterval(tick,1000)
	};
	for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				iNow=this.index;
				tab();
			}
	}
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
			startMove(aLi[i],{opacity:0})
		}
		aBtn[iNow].className='banon';
		startMove(aLi[iNow],{opacity:1})
	};
	clearInterval(timer);
	function tick(){
		iNow++;
		if(iNow==aBtn.length){
			iNow=0;
		}
		tab();
	};
	tick();
	timer=setInterval(tick,1000);
	oPrev.onclick=function(){
		iNow--;
		if(iNow==-1){
			iNow=aBtn.length-1;
		}
		tab();
	};
	oNext.onclick=function(){
		iNow++;
		if(iNow==aBtn.length){
			iNow=0;
		}
		tab();
	};
		//input 框提示文字消失
	var oSbtn=document.getElementById('searchtxt');
	oSbtn.onfocus=function(){
		if(oSbtn.value=='牛仔打造校园'){
			oSbtn.value='';
			oSbtn.style.color='#000';
		}
	};
	oSbtn.onblur=function(){
		if(oSbtn.value==''){
			oSbtn.value='牛仔打造校园';
			oSbtn.style.color='#ccc';
		}
	};

	//导航栏 吸顶
	var oNav1=document.getElementById('nav');
	var oNav2=document.getElementById('nav2');
	var oNavT=oNav1.offsetTop;
	window.onscroll=function(){
		var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		if(oNavT<=scrollT){
			oNav1.style.position='fixed';
			oNav2.style.display='block';
		}else{
			oNav1.style.position='';
			oNav2.style.display='none';
		}
	};

	//选项卡+蒙版

	var oBox=document.getElementById('goodshop_b');
	var aUlgood=oBox.getElementsByTagName('ul');
	var oBb=oBox.getElementsByClassName('goodbtn')[0];
	var aSpan=oBb.children;
	for(var i=0;i<aSpan.length;i++){
		(function(index){
			aSpan[i].onclick=function(){
				for(var i=0;i<aSpan.length;i++){
					aSpan[i].className='';
					aUlgood[i].className="gooddiv clearfix";
				}
				this.className='active';
				aUlgood[index].className="gooddiv goodshow clearfix";
			};
		})(i)
		
	}

	var aMouse=oBox.getElementsByClassName('goodct');
	
	for(var i=0;i<aMouse.length;i++){
		aMouse[i].onmouseover=function(){
			var oBack=this.getElementsByClassName('mengban')[0];
			oBack.style.display='block';

			var aA=this.getElementsByTagName('a');
			for(var i=0;i<aA.length;i++){
			aA[i].onmouseover=function(){
				if(this.innerHTML=='已关注'){
					this.innerHTML='取消关注';
					this.style.background='#ffffff';
					this.style.color='black';
				}
				if(this.innerHTML=='去逛街'){
					this.style.background='#ffffff';
					this.style.color='black';
				}
			};
			aA[i].onmouseout=function(){
				if(this.innerHTML=='取消关注'){
					this.innerHTML='已关注';
					this.style.background='';
					this.style.color='#ffffff';
				}
				if(this.innerHTML=='去逛街'){
					this.style.background='';
					this.style.color='#ffffff';
				}
			};
		}
		};
		aMouse[i].onmouseout=function(){
			var oBack=this.getElementsByClassName('mengban')[0];
			oBack.style.display='none';
		};
	}

	;(function(){
		var oOl=document.getElementById('lianlist');
		var timer=null;
		var iNow=0;
		tick();
		function tick(){
			iNow+=30;
			if(iNow==90){
				iNow=0;
			}
			oOl.style.top=-iNow+'px';
		};
		timer=setInterval(tick,1000);
	})()
	


}