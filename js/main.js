let serverURL = './json/110819015.json';

$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	var parameter = {};
	$.get(serverURL, function(data) {
		console.log(data);
		init(data);
	});
}

function init(data){
	// var htmlCode = '<img src="'+data.imgurl+'">';
	// $('body').append(htmlCode)

	$('.img1').css('background-image','url(' + data.imgurl + ')');
    $('.line1').html(data.name);
    $('.line2').html(data.photoNum + '張相片・' + data.viewNum + '次檢視');
}