function login() {
    var id = document.querySelector("#id");
    var pw = document.querySelector("#pw");

    if (id.value == "" || pw.value == "") {
        alert("로그인 할 수 없 습니다")
    }
    else {
        location.href = 'login.html';
    }
}
function back() {
    back
}
function create_id() {
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');
    var r_pw = document.querySelector('#r_pw');
    if (id.value == "" || "" r_pw.value == "") {
        alert("회원 가입을 할 수 없습니다.")
    }
    else {
        if (pw.value ! == r_pw.value) {
            alert("비밀 번호를 확인해 주세요!")
        }
        else {
            location.href = 'login.html'
        }
    }

}
document.getElementById('submit').onclick = function() {
    var ID = document.getElementById('id').value;
    var pass = document.getElementById('Pw').value;
    if (ID === "1234" && pass === "1234") {
        alert("로그인 성공!");
    }
    else {
        alert("로그인 실패!");
    }
}
        var imgWidth = 1000;
        var imgCount = $("#imgs img").length; 
        var currentIndex = 0;
        $(function(){
            carouse();
        });
        function carousel(){
            carouselNext();
            carouselPrev();
        }
        function carouselPrev(){
            $("#prev").on("click", prevImg);
        }
        function carouselNext(){
            $("#next").on("click", nextImg);
        }
        function prevImg(){
                var prevIndex = currentIndex - 1;
                if (prevIndex < 0) prevIndex = 3;
                currentIndex = prevIndex;
                var movePoint = -1 * imgWidth * prevIndex;
                $("#imgs").stop().animate({
                    marginLeft: movePoint
                }, 400);
            }
            function nextImg(){
                var nextIndex = currentIndex + 1; 
                if (nextIndex >= imgCount) nextIndex = 0;
                currentIndex = nextIndex;
                var movePoint = -1 * imgWidth * nextIndex;
                $("#imgs").stop().animate({
                    marginLeft: movePoint
                }, 400);
            }