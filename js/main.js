let serverURL = '../json/all_data.json';
let img_NUM = '';
let box_NUM = '';
let album_LINK ='';
let url ='';

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

    let tmp = $('#template01');
    let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來

    for(let i =0; i < data.length; i++){
        img_NUM = 'img' + i;
        box_NUM = 'box' + i;
        $('.img').toggleClass(img_NUM);
        $('.box').toggleClass(box_NUM);

        $('section .row').append(htmlCode);

        $('.img').toggleClass(img_NUM);
        $('.box').toggleClass(box_NUM);
        $('.' + img_NUM).css('background-image','url('+ data[i].imgurl +')');
        $('.' + box_NUM + ' .line1').html(data[i].name);
        $('.' + box_NUM + ' .line2').html(data[i].photoNum + '張相片・' + data[i].viewNum + '次檢視');

        console.log(data[i].name);
    }
}

function log(data){ //列印json陣列->檢查
    console.log(data[2].imgurl);
}