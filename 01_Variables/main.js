
// #heading 찾는거? ---> #memo_form 대신 찾기!
var count = 0; // 최초 카운트 수 (0건 ==> 0 : 메모가 없음)
var form = document.querySelector("#memo_form");
form.onsubmit = function(e){
    e.preventDefault();  //  submit 이라는 e(이벤트) 발생하면, 이벤트 전파를 막는! 명령~            var userInput = document.querySelector("#user_memo");
    var userInput = document.querySelector("#user_memo")
    
    // 0. 입력한 값을 조사
    if (userInput.value == "") {
        alert("메모 내용을 입력하세요!");
    } else {
       // 1. #memo_list라는 이름의 요소(HTML)을 찾기
    var memoList = document.querySelector("#memo_list");
    
//console.log
(memoList); // HTML 형식 표현

    // 2. data + DOM(html) 가공
    var memoLi = document.createElement("li"); // 자바스크립트로 li 요소를 생성
    memoLi.textContent = userInput.value; // li요소의 컨텐츠로 입력한 메모를 등록해서
    

    // 3. memoList에 추가
    memoList.appendChild(memoLi); // 웹브라우저에 표현
    // 3-1. count를 1증가
    var countSpan = document.querySelector("#count");
    count++;
    countSpan.innerText = count;

    // 4. #user_memo 초기화
    userInput.value = "";  
    userInput.focus(); // 포커스 적용   
    } 
} 
