let pageURL = "./json/110819015.json";

$(document).ready(function(){
    $.get(pageURL, function(data){
        console.log(data);
    });
});
function setImg(){
    for(let i=0; i<imgAry.length; i++){
        let tmp = $('#template01');
        let htmlCode = tmp.html(); //括號裡面沒放東西，是取內容出來
        htmlCode = htmlCode.replace('IMG_HERE',imgAry[i]);
        htmlCode = htmlCode.replace('TEXT_HERE',textAry[i]);
        $('body').append(htmlCode);
    }
}