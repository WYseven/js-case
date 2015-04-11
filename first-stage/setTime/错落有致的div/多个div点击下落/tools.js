var tools = {
	css:function (obj,attr,val){
		if(arguments.length>=3){
			if(attr=='opacity'){
				obj.style.opacity=val/100;
				obj.style.filter='alpha(opacity='+val+')';
			}else{
				obj.style[attr]=val+'px';
			}
		}else{
			var iVal=obj.currentStyle ? parseFloat(obj.currentStyle[attr]) : parseFloat(getComputedStyle(obj)[attr]);
			if(attr=='opacity'){
				iVal*=100;
			}
			return iVal;
		}	
	},
	startMove:function (obj,attr,iSpeed,iTarget,callBack){
		var iNow=tools.css(obj,attr);
		iSpeed=iNow>iTarget?-Math.abs(iSpeed):Math.abs(iSpeed);
		clearInterval(obj.oTimer);
		obj.oTimer=setInterval(function(){	
			var iNow=tools.css(obj,attr);
			if(Math.abs(iTarget-iNow)<Math.abs(iSpeed)){	
				tools.css(obj,attr,iTarget);
				clearInterval(obj.oTimer);
				obj.oTimer=0;
				callBack&&callBack();
			}else{
				iNow+=iSpeed;
				tools.css(obj,attr,iNow);
			}
		},20);	
	}
};