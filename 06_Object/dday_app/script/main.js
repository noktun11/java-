// 우리 며칠째 버튼 누르면, d-day 계산 및 결과 표시
// Form : 폼 

// 1. DOM 탐색
const dday_form = document.querySelector("#dday_form");

// 2. DOM event bind(부착)
dday_form.addEventListener("submit", function(e){
    e.preventDefault(); // form의 화면 갱신 처리를 중지
    // 3-1. 오늘 날짜
    let nowDay = new Date(); // Monday 29 Jan 11:53:24 +0900 GMT ..

    const userDate = document.querySelector("#first_date").value;
    let theDay = new Date(userDate);

    console.log(nowDay); // 오늘 날짜
    console.log(theDay); // 사귄 날짜

    let nowTime = nowDay.getTime();
    let theTime = theDay.getTime();

    let passedTime = nowTime - theTime; 

    passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24)); // ms를 일(day)로 환산

    // #passDay DOM 탐색 
    const passDay = document.querySelector("#passedDay");
    const resultDiv = document.querySelector("#result");
    // #passDay DOM 조작
    passDay.innerText = passedTime;
    // console.dir(resultDiv);
    resultDiv.classList.remove("d-none");
    
});

/* 3. 이벤트 처리기(=함수)
function showDday(e){
    e.preventDefault(); // form의 화면 갱신 처리를 중지
    // 3-1. 오늘 날짜
    var now = new Date(); // Monday 29 Jan 11:53:24 +0900 GMT ..

    const userDate = document.querySelector("#first_date");

    console.log(now);
    console.log(userDate);
}
*/