function putHeader(link) {	
	var str = '<IMG src="./image/icon.png"' +
		'width=240px height=60px border=0">';
		if (link) str = '<a href="index.html"> ' +
		str + '</a>';
		document.write(str);
}

function putFooter(){
	var str = '<IMG src="./image/flat.jpg" width = 100% height = 100%>';
	document.write(str);
}

var itemMenu = new Array (
		new Array ( "Главная", "index.html"),
		new Array ( "Развлечения", "Text2.html"),
		new Array ( "Учеба", "Text3.html"),
		new Array ( "Некоторые примеры из жизни", "Text4.html"),
		new Array ( "Cсылки", "Text5.html"),
		new Array ( "О нас", "Text6.html")
		);


function putMenu(NotA) {	
	var str = "<ul>";	
	for (var i = 0; i<itemMenu.length; i++)	{
		str += '<li>';	
		if (i != NotA) str += '<a href="' +		
		itemMenu[i][1] + '">';		
		str += '<div class = "menu_text"> '+itemMenu[i][0]+' </div>';		
		if (i != NotA) str += '</a>';		
		}		
		str += "</ul>";		
		document.write(str);
}