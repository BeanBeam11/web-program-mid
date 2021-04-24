let serverURL = '../json/all_data.json';
let album_link_NUM ='';
let urlStr = document.location.toString();
let urlID = urlStr.split('?')[1];
console.log(urlID);
let urlNUM = '';

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

    let tmp = $('#template02');
    let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來

    for(let i =0; i < data.length; i++){ 
        if( data[i].ID == urlID ){
            urlNUM = i;
        }
    }

    $('.img-cover').css('background-image','url('+ data[urlNUM].imgurl +')');
    $('.album-name').html(data[urlNUM].name);
    $('.album-info').html(data[urlNUM].info);
    $('.album-num').html(data[urlNUM].photoNum + '張相片・' + data[urlNUM].viewNum + '次檢視');
    $('.album-autor-img').css('background-image','url('+ data[urlNUM].authorImg +')');
    $('.album-author-name').html(data[urlNUM].author);

    for(let i =0; i < data.length; i++){
        
        $('section .row').append(htmlCode);
    }
}

function log(data){ //列印json陣列->檢查
    console.log(data[2].imgurl);
}