window.onload=function(){
	var Awarp=document.getElementById('wrap'),
	Apic=document.getElementById('pic').getElementsByTagName('li'),
	Alist=document.getElementById('list').getElementsByTagName('li'),
	index=0,
	timer=null;
	timer=setInterval(autoPlay, 4000);
	Awarp.onmouseover=function(){
		clearInterval(timer);
	}
	Awarp.onmouseout=function(){
		timer=setInterval(autoPlay, 4000);
	}
	for(var i=0;i<Alist.length;i++){
	  Alist[i].onmouseover=function(){
		  clearInterval(timer);
		  index=this.innerText - 1;
		  changePic(index);
	  };
	};
	
	function autoPlay(){
		if(++index>=Apic.length) index=0;
		changePic(index)
	}
	function changePic (curIndex){
		for(var i=0;i<Apic.length;i++){
			Apic[i].style.display='none';
			Alist[i].className='';
		}
		Apic[curIndex].style.display='block';
		Alist[curIndex].className='on';
	}
} 

