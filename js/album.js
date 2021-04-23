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


$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	var parameter = {};
    for(let i=0; i<serverURL.length; i++){
        $.get(albumURL, function(data) {
            console.log(data);
            init(data);
        });
    }
}

function init(data){

    let tmp = $('#template02');
    let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來

    htmlCode = htmlCode.replace('ALBUM_NAME',data.name);
    htmlCode = htmlCode.replace('ALBUM_INFO',data.info);
    htmlCode = htmlCode.replace('ALBUM_PHOTO_NUM',data.photoNum + data.videoNum);
    htmlCode = htmlCode.replace('ALBUM_VIEW_NUM',data.viewNum);
    htmlCode = htmlCode.replace('ALBUM_AUTHOR_NAME',data.author);
    $('.album-autor-img').css('background-image','url(' + data.authorImg + ')')
    
    $('.container').append(htmlCode);
}