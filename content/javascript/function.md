---
title: "Javascript Function"
date: "2024-02-02"
slug: "/javascript/function"
category: "javascript"
---

# Function 

### Function

| function statement                          	| function expression                                	| function()                                        	|
|---------------------------------------------	|----------------------------------------------------	|---------------------------------------------------	|
| function add(x,y) {<br>  return x + y;<br>} 	| var add = function(x,y) {<br>  return x + y;<br>}; 	| var add = new Function('x', 'y', 'return x + y'); 	|

### Function hoisting

- 함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨처음부터 시작
- 이러한 함수 호이스팅은 함수는 실행되기전에 선언되어야한다는 규칙을 무시하여 코드의 구조를 망칠수있음 -> **아래와 같은 함수 표현식 사용을 권장**
- 해당 현상의 원인은 자바스크립트의 변수 생성(Instantiation)과 초기화(Initialization)의 작업이 분리되어 진행되기 때문임

```javascript

add(2,5); // uncaught type error

var add = function(x, y) {
    return x + y;
}

add(2,5); // 7

```

### Function = Object

- 함수 자체가 일반 객체처럼 프로퍼티를 가질 수 있음

```javascript

function add(x, y) {
    return x + y;
}

add.result = add(3, 2);
add.status = 'OK';
```

- 위의 코드에서 함수 add가 객체로서 가지는 프로퍼티는 총 3개이다.

[[Code]] ---> return x + y; //내부 프로퍼티 
result ---> 5
status ---> 'OK'

- 함수는 값으로 취급될 수 있음
    - 리터럴에 의해 생성
    - 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
    - 함수의 리턴값으로 리턴 가능
    - 동적으로 프로퍼티를 생성 및 할당 가능
    - 함수의 인자로 전달 가능

