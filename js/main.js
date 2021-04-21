// let serverURL = './json/110819015.json';
let serverURL = [
    './json/110719016.json',
    './json/110719018.json',
    './json/110719032.json',
    './json/110719033.json',
    './json/110719042.json',
    './json/110819015.json',
    './json/110819023.json'
];
// let serverURL = [];
// serverURL.push('./json/110719016.json');

$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	var parameter = {};
    for(let i=0; i<serverURL.length; i++){
        $.get(serverURL[i], function(data) {
            console.log(data);
            init(data);
        });
    }
}

function init(data){
	// var htmlCode = '<img src="'+data.imgurl+'">';
	// $('body').append(htmlCode)

    // for(let i=0; i<serverURL.length; i++){
        
    // }
    // $('.img1').css('background-image','url(' + data.imgurl + ')');
    // $('.line1').html(data.name);
    // $('.line2').html(data.photoNum + '張相片・' + data.viewNum + '次檢視');
	
    
    let tmp = $('#template01');
    let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來
    $('.img1').css('background-image','url('+ data.imgurl +')');
    htmlCode = htmlCode.replace('NAME_HERE',data.name);
    htmlCode = htmlCode.replace('PHOTONUM_HERE',data.photoNum);
    htmlCode = htmlCode.replace('VIEWNUM_HERE',data.viewNum);
    
    $('section .row').append(htmlCode);
    
}