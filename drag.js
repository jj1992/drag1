function drag(id){
	var ele = document.getElementById(id);
	ele.onmousedown = function(evt){
		var e = evt || window.event;
		var disX = e.offsetX;
		var disY = e.offsetY;
		document.onmousemove = function(evt){
			
		}
	}
}
