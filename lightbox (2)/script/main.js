window.addEventListener("DOMContentLoaded", function(){
    // 1. DOM 탐색 
    const pics = document.querySelectorAll(".pic");
    const lightbox = document.querySelector("#lightbox");
    const lightboxImage = document.querySelector("#lightboxImage");
    const closerBt = document.querySelector("#closer");
    const nextImageBt = document.querySelector("#next");
    const prevImageBt = document.querySelector("#prev");
    const pager = document.querySelector("#pager");
    let lastPicIndex = null;

    // 클릭하면 라이트박스를 보여주는 함수 : showLightbox()
    // for loop vs .forEach()
    // 2. DOM 요소마다 이벤트 반복해서 추가
    // for(i = 0; i < pics.length; i++) {
    //     pics[i].addEventListener("click", showLightbox(i));
    // }    
    pics.forEach(function(pic, ind) {
        pic.addEventListener("click", showLightbox);
    });

    // 3. 이벤트 처리기(리스너 방식) : 클릭하면 실행
    function showLightbox(e){
        lastPicIndex = Number(e.target.dataset.index);
        let bigLocation = pics[e.target.dataset.index].getAttribute("data-src"); //this.dataset.src
        lightboxImage.setAttribute("src", bigLocation);
        lightbox.style.display = "block";
        setInterval(showNextImage, 3000);
    }
    // 3. 이벤트 처리기(핸들러 방식)
    closerBt.onclick = function() {
        lightbox.style.display = "none";
    }
    function showLightbox(){
        lastPicIndex++;
        if (lastPicIndex >= 5) lastPicIndex = 0;
        let nextImageSrc = pics[lastPicIndex].getAttribute("data-src");
        lightboxImage.setAttribute("src", nextImageSrc);   
        // 페이저 업데이트
        pager.innerText = lastPicIndex + " / " + pics.length;
    }
    nextImageBt.onclick = function(){
        lastPicIndex++;
        if (lastPicIndex >= 5) lastPicIndex = 0;
        let nextImageSrc = pics[lastPicIndex].getAttribute("data-src");
        lightboxImage.setAttribute("src", nextImageSrc);   
        // 페이저 업데이트
        pager.innerText = lastPicIndex + " / " + pics.length;
        // 자동으로
    }
    prevImageBt.onclick = function(){
        lastPicIndex--;
        if (lastPicIndex < 0) lastPicIndex = pics.length - 1;
        let nextImageSrc = pics[lastPicIndex].getAttribute("data-src");
        lightboxImage.setAttribute("src", nextImageSrc);     
        pager.innerText = (lastPicIndex+1) + " / " + pics.length;   
    }
});