let serverURL = '../json/all_data.json';
//抓json的ID
let urlStr = document.location.toString();
let urlID = urlStr.split('?')[1];
console.log(urlID);

let urlNUM = '';//確認為哪一個json

let img_photo_NUM = '';

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

    for(let i =0; i < data.length; i++){ //確認為哪一個json
        if( data[i].ID == urlID ){
            urlNUM = i;
        }
    }
    //設定img-cover
    $('.img-cover').css('background-image','url('+ data[urlNUM].imgurl +')');
    $('.album-name').html(data[urlNUM].name);
    $('.album-info').html(data[urlNUM].info);
    $('.album-num').html(data[urlNUM].photoNum + '張相片・' + data[urlNUM].viewNum + '次檢視');
    $('.album-autor-img').css('background-image','url('+ data[urlNUM].authorImg +')');
    $('.album-author-name').html(data[urlNUM].author);
    //設定img-photo
    $('.img-photo').css('background-image','url('+ data[urlNUM].images[0].imgurl +')');
    $('.photo-title').html(data[urlNUM].images[0].title);
    $('.photo-author').html(data[urlNUM].images[0].author);
    $('.photo-like-num').html('<i class="fa fa-star-o" aria-hidden="true"></i> ' + data[urlNUM].images[0].likeNum);
    $('.photo-comment-num').html('<i class="fa fa-comment-o" aria-hidden="true"></i> ' + data[urlNUM].images[0].commentNum);

    // for(let i =0; i < data.length; i++){
        
    //     $('section .row').append(htmlCode);
    // }
    for(let i =0; i<data[urlNUM].images.length; i++){ //確認有幾張相片
        img_photo_NUM = 'img-photo-num' + i;
        $('.img-photo-num').toggleClass(img_photo_NUM);

        $('section .row').append(htmlCode);

        $('.img-photo-num').toggleClass(img_photo_NUM);

        $('.' + img_photo_NUM + ' .img-photo').css('background-image','url('+ data[urlNUM].images[i].imgurl +')');
        $('.' + img_photo_NUM + ' .photo-title').html(data[urlNUM].images[i].title);
        $('.' + img_photo_NUM + ' .photo-author').html(data[urlNUM].images[i].author);
        $('.' + img_photo_NUM + ' .photo-like-num').html('<i class="fa fa-star-o" aria-hidden="true"></i> ' + data[urlNUM].images[i].likeNum);
        $('.' + img_photo_NUM + ' .photo-comment-num').html('<i class="fa fa-comment-o" aria-hidden="true"></i> ' + data[urlNUM].images[i].commentNum);

        
    }
}

function log(data){ //列印json陣列->檢查
    console.log(data[2].imgurl);
}