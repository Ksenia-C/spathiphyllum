var max = function(x, y) {
    if (x > y) {
        return x;
    }
    return y;
}
var min = function(x, y) {
    if (x < y) {
        return x;
    }
    return y;
}

document.onscroll = function (event) {
	let scrollHeight = Math.max(
			  document.body.clientHeight, document.documentElement.clientHeight
			);	
	var elem = document.getElementById("menu");    
    var top1 = max(window.pageYOffset - 60, 70);
    var bottom1 = min(max(window.pageYOffset +100, 140), scrollHeight+350);  
    
    elem.style.top =  top1 + 'px';
    elem.style.bottom =  bottom1 + 'px';    
};
