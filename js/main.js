// // let serverURL = './json/110819015.json';
// let serverURL = [
//     './json/110619049.json',
//     './json/110719016.json',
//     './json/110719018.json',
//     './json/110719032.json',
//     './json/110719033.json',
//     './json/110719042.json',
//     './json/110819013.json',
//     './json/110819015.json',
//     './json/110819023.json',
//     './json/110819042.json'
// ];
// let img_NUM = '';
// let album_LINK ='';
// let url ='';

// $(document).ready(function() {
// 	readFromServer();
// });

// function readFromServer(){
// 	var parameter = {};
//     for(let i=0; i<serverURL.length; i++){
//         $.get(serverURL[i], function(data) {
//             console.log(data);
//             img_NUM = 'img' + i;
//             $('.img').toggleClass(img_NUM);
//             // $('.' + img_NUM).css('background-image','url('+ data.imgurl +')');
//             init(data);
//             $('.img').toggleClass(img_NUM);

//             $('.' + img_NUM).css('background-image','url('+ data.imgurl +')');
//         });
//     }
// }

// function init(data){

//     let tmp = $('#template01');
//     let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來
    
//     htmlCode = htmlCode.replace('NAME_HERE',data.name);
//     htmlCode = htmlCode.replace('PHOTONUM_HERE',data.photoNum);
//     htmlCode = htmlCode.replace('VIEWNUM_HERE',data.viewNum);
    
//     $('section .row').append(htmlCode);
// }


// let serverURL = './json/110819015.json';
let serverURL = '../json/all_data.json';
let img_NUM = '';
let album_LINK ='';
let url ='';

$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	var parameter = {};
    $.get(serverURL, function(data) {
        console.log(data);
        // log(data);
    });
    
}

function init(data){

    let tmp = $('#template01');
    let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來
    for(let i =0; i < data.length; i++){
        htmlCode = htmlCode.replace('NAME_HERE',data.name);
        htmlCode = htmlCode.replace('PHOTONUM_HERE',data.photoNum);
        htmlCode = htmlCode.replace('VIEWNUM_HERE',data.viewNum);
        img_NUM = 'img' + i;
        $('.img').toggleClass(img_NUM);
        $('.' + img_NUM).css('background-image','url('+ data.imgurl +')');
        $('.img').toggleClass(img_NUM);
        
        $('section .row').append(htmlCode);
    }
}

function log(data){
    console.log(data[0]);
}