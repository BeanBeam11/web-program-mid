// let serverURL = './json/110819015.json';
let serverURL = [
    './json/110619049.json',
    './json/110719016.json',
    './json/110719018.json',
    './json/110719032.json',
    './json/110719033.json',
    './json/110719042.json',
    './json/110819013.json',
    './json/110819015.json',
    './json/110819023.json',
    './json/110819042.json'
];
let img_NUM = '';
let album_LINK ='';
let url ='';

$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	var parameter = {};
    for(let i=0; i<serverURL.length; i++){
        $.get(serverURL[i], function(data) {
            console.log(data);
            album_LINK = 'album-link' + i;
            img_NUM = 'img' + i;
            url = "./album.html?" + serverURL[i];
            $('.album-link').toggleClass(album_LINK);
            $('.img').toggleClass(img_NUM);
            // $('.' + img_NUM).css('background-image','url('+ data.imgurl +')');
            init(data);
            $('.album-link').toggleClass(album_LINK);
            $('.img').toggleClass(img_NUM);

            $('.album-link').attr("href",url);
            $('.' + img_NUM).css('background-image','url('+ data.imgurl +')');
        });
    }
}

function init(data){

    let tmp = $('#template01');
    let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來
    
    htmlCode = htmlCode.replace('NAME_HERE',data.name);
    htmlCode = htmlCode.replace('PHOTONUM_HERE',data.photoNum);
    htmlCode = htmlCode.replace('VIEWNUM_HERE',data.viewNum);
    
    $('section .row').append(htmlCode);
}
