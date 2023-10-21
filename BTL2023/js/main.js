// icon dropdown
const bodyWidth = document.querySelector('body');
var headerTop = document.querySelector('.header-top');
var activeIcon = document.querySelector('.header__icon');
        activeIcon.onclick = function (){
            if (headerTop.offsetHeight == '50' && bodyWidth.offsetWidth <=800) {
                headerTop.style="animation: zoomin 1.5s; animation-fill-mode: forwards;"
            } else if(headerTop.offsetHeight != '50' && bodyWidth.offsetWidth <=800){
                headerTop.style="animation: zoomout 1.5s; animation-fill-mode: forwards;"
            }
            
        }
//text dropdown 
var activeTextMac = document.querySelectorAll('.dropbtn')[1];
var activeTextIpad =document.querySelectorAll('.dropbtn')[2];
var activeTextIphone =document.querySelectorAll('.dropbtn')[3];
var activeTextWatch =document.querySelectorAll('.dropbtn')[5];
var activeTextTv =document.querySelectorAll('.dropbtn')[6];
var activeTextpk =document.querySelectorAll('.dropbtn')[7];
var dropMac = document.querySelector('.dropdown-content-mac');
var dropIpad = document.querySelector('.dropdown-content-ipad');
var dropIphone = document.querySelector('.dropdown-content-iphone');
var dropWatch = document.querySelector('.dropdown-content-watch');
var dropTv = document.querySelector('.dropdown-content-tv');
var droppk = document.querySelector('.dropdown-content-pk');
activeTextMac.onclick = function (){
    if (headerTop.offsetHeight == '50' && bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropMac.style="visibility:visible;"
        dropIpad.style="visibility:hidden;"
        dropIphone.style="visibility:hidden;"
        dropWatch.style="visibility:hidden;"
        dropTv.style="visibility:hidden;"
        droppk.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        setTimeout(() => {
            dropMac.style="visibility:hidden;"
        }, 1000);
        
    }
    
}
activeTextIpad.onclick = function (){
    if (headerTop.offsetHeight == '50'&& bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropIpad.style="visibility:visible;"
        dropMac.style="visibility:hidden;"
        dropIphone.style="visibility:hidden;"
        dropWatch.style="visibility:hidden;"
        dropTv.style="visibility:hidden;"
        droppk.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'&& bodyWidth.offsetWidth >=800){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        
        setTimeout(() => {
            dropIpad.style="visibility:hidden;"
        }, 1000);
    }
    
}
activeTextIphone.onclick = function (){
    if (headerTop.offsetHeight == '50'&& bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropIphone.style="visibility:visible;"
        dropMac.style="visibility:hidden;"
        dropIpad.style="visibility:hidden;"
        dropWatch.style="visibility:hidden;"
        dropTv.style="visibility:hidden;"
        droppk.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'&& bodyWidth.offsetWidth >=800){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        
        setTimeout(() => {
            dropIphone.style="visibility:hidden;"
        }, 1000);
    }
    
}
activeTextWatch.onclick = function (){
    if (headerTop.offsetHeight == '50'&& bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropWatch.style="visibility:visible;"
        dropMac.style="visibility:hidden;"
        dropIpad.style="visibility:hidden;"
        dropIphone.style="visibility:hidden;"
        dropTv.style="visibility:hidden;"
        droppk.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'&& bodyWidth.offsetWidth >=800){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        
        setTimeout(() => {
            dropWatch.style="visibility:hidden;"
        }, 1000);
    }
    
}
activeTextTv.onclick = function (){
    if (headerTop.offsetHeight == '50'&& bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropWatch.style="visibility:hidden;"
        dropTv.style="visibility:visible;"
        dropMac.style="visibility:hidden;"
        dropIpad.style="visibility:hidden;"
        dropIphone.style="visibility:hidden;"
        droppk.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'&& bodyWidth.offsetWidth >=800){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        
        setTimeout(() => {
            dropTv.style="visibility:hidden;"
        }, 1000);
    }
    
}

activeTextpk.onclick = function (){
    if (headerTop.offsetHeight == '50'&& bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        droppk.style="visibility:visible;"
        dropWatch.style="visibility:hidden;"
        dropMac.style="visibility:hidden;"
        dropIpad.style="visibility:hidden;"
        dropIphone.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'&& bodyWidth.offsetWidth >=800){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        
        setTimeout(() => {
            droppk.style="visibility:hidden;"
        }, 1000);
    }
    
}
        