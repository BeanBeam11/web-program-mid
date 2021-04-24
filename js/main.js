let serverURL = '../json/all_data.json';
let album_link_NUM ='';
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
        album_link_NUM = 'album-link' + i;
        $('.album-link').toggleClass(album_link_NUM);

        $('section .row').append(htmlCode);

        $('.album-link').toggleClass(album_link_NUM);

        $('.' + album_link_NUM + ' .img').css('background-image','url('+ data[i].imgurl +')');
        $('.' + album_link_NUM + ' .line1').html(data[i].name);
        $('.' + album_link_NUM + ' .line2').html(data[i].photoNum + '張相片・' + data[i].viewNum + '次檢視');

        $('.' + album_link_NUM).attr('href','./album.html?' + data[i].ID);
    }
}

function log(data){ //列印json陣列->檢查
    console.log(data[2].imgurl);
}