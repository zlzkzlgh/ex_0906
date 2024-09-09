//document 객체를 대상으로 하는 이벤트리스너를 추가한다.
//이벤트의 종류는 DOMContentLoaded이다.
//DomContentLoaded : 문서의 콘텐츠 로딩이 완료되었음을 의미하는 이벤트
document.addEventListener("DOMContentLoaded",
    //HTML코드가 로딩된 다음 처리할 작업
    function (e) {
        //input태그가 만들어지기 전에 찾아달라고 할 수 있기 때문에
        //input태그가 로딩되지 않았을시 button에 null을 저장할 수 있다.
        
        //input태그를 찾아 button 변수에 저장
        let button = document.querySelector("input");
        //button 변수에 이벤트리스너 추가
        //이벤트 종류는 "input"
        button.addEventListener("input",
            function (e) { // e : event에 대한 정보, 이벤트가 발생한 태그에 대한 정보
                //콘솔에 입력창의 값을 출력한다.
                console.log(e.target.value);
            });
    })



//<p>태그에서 인라인 이벤트 모델로 호출할 함수를 정의한다.
//함수의 이름은 hi이다.
//alert()띄워 "hi"라는 글자를 출력하기
function hi() {
    alert("hi");
}