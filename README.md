# 프리코스 2주차: 자동차 경주
## 구현 기능 정리
<img src="./images//flowchart_2w.png">

<br>

- [x] 1. **참가자 입력 받기**
    - [x] 이름 입력 받기 `Console.readLineAsync(query)`
    - [x] 입력값 검증 (빈 문자열?)
    - [x] return **입력값** 

<br>

- [x] 2. **이름 추출**
    - [x] `,`로 `split`
    - [x] return **이름 배열**

<br>

- [x] 3. **이름 검증**
    - [x] 이름 검증 1 (5자 넘는 이름?)
    - [x] 이름 검증 2 (없는(=빈) 이름?)
    - [x] 이름 검증 3 (같은 이름?)
    - [x] return 검증된 이름 배열

<br>

- [x] 4. **시도 횟수 입력 받기**
    - [x] 각 이름에 count=0 초기화해놓기
    - [x] 입력값 검증 (양의 정수?)
    - [x] return 시도 횟수

<br>

- [x] 5. **각각 전진하기 (`count`회 반복)**
    - [x] 각 사용자마다 값 뽑기 `Random.pickNumberInRange(0. 9)`
    - [x] 각각 4이상이면 전진횟수`++`
    - [x] `count`회 전진 후, 결과 출력 `Console.print(message)`

<br>

- [x] 6. **우승자 정하기**
    - [x] 전진횟수가 max인 사람들 뽑기
    - [x] return **우승자 배열**

<br>

- [x] **우승자 출력하기**
    - [x] 배열 길이가 1이면 단독 우승자, 아니면 공동 우승자
    - [x] 공동 우승자 일 경우, return에 `join(', ')` 사용
    - [x] 우승자 문자열 만들기
    - [x] 우승자 출력 `Console.print(message)`

<br />


## 프로그래밍 요구 사항

- `indent depth` < 3

- 3항 연산자 사용 **X**

- 함수(method)가 한 가지 일만 하도록 최대한 작게!

- `Jest`로 정리한 기능 목록이 정상적으로 작동하는 지 확인!


<br />

## 아키텍처 - MVC + FSD
```
|- controllers/
|      |- Race.js
|
|- services/
|      |- RacingServices.js
|
|- models/
|   |- RacingLogics.js
|   |- utils/
|       |- validate.js
|       |- constants.js
|
|- views/
|    |- Input.js
|    |- Output.js
|    |- utils/
|         |- validate.js
|         |- constants.js
|
|- shared/
|    |- utils/
|    |    |- constants.js
|    |    |- WoowaError.js   
____________________________
```

<br />

## 테스트

### 에러 종류
- 입력받은 이름 문자열이 빈 문자열이면  
`[ERROR] No names input`

<br>

- 5자 이하인 이름이 존재하면  
`[ERROR] More than 5-letter name exists`

<br>

- 입력받은 시도횟수가 양의 정수가 아니면  
`[ERROR] Non-positive-integer number counts`

<br>

- 빈 이름이 있으면  
`[ERROR] Empty name exists`

<br>

- 같은 이름이 있으면  
`[ERROR] Same name exists`

### 에러 Class

`WoowaError` : 일반 에러 (`ReferenceError`, `SyntaxError` 등) 에도 `[ERROR]`가 붙도록 함


### E2E 테스트
- **기능 테스트 1 : 우승자 1명**
```    
- 이름 : pobi, edy, krong, rupi
- 시도횟수 : 1
- 랜덤 값 : 4, 3, 2, 1
- 결과 : "pobi: -", "edy: ", "krong: ", "rupi: "
- 최종 결과 : "최종 우승자 : pobi"
```

<br>

- **기능 테스트 2 : 우승자 3명**
```    
- 이름 : pobi, edy, krong, rupi
- 시도횟수 : 1
- 랜덤 값 : 6, 4, 5, 1
- 결과 : "pobi: -", "edy: -", "krong: -", "rupi: "
- 최종 결과 : "최종 우승자 : pobi, edy, krong"
```

<br>

- **기능 테스트 3 : 우승자 1명 && 시도횟수 3회**
```    
- 이름 : pobi, edy, krong, rupi
- 시도횟수 : 3
- 랜덤 값
    -------------
    pobi(4, 4, 4)
    edy(2, 2, 3)
    krong(1, 1, 1)
    rupi(1, 1, 1)
    -------------
- 결과 : "pobi: ---", "edy: ", "krong: ", "rupi: "
- 최종 결과 : "최종 우승자 : pobi"
```

<br>

- **기능 테스트 4 : 우승자 2명 && 시도횟수 3회**
```    
- 이름 : pobi, edy, krong, rupi
- 시도횟수 : 3
- 랜덤 값
    -------------
    pobi(8, 7, 2)
    edy(5, 2, 9)
    krong(3, 6, 1)
    rupi(1, 1, 3)
    -------------
- 결과 : "pobi: --", "edy: --", "krong: -", "rupi: "
- 최종 결과 : "최종 우승자 : pobi, edy"
```

<br>

---
**예외 테스트 조건**

1. `[ERROR]`로 시작
2. `[ERROR]` 뒤에 정확한 에러 종류 호출
---

- **예외 테스트 1 : 아무 이름도 입력하지 않았을 시**
```
- Input : ""(그냥 Enter)
- Output : [ERROR] No names input
```

<br>

- **예외 테스트 2 : 5글자 초과하는 이름 발생 시**
```
- Input : pobi,javaji
- Output : [ERROR] More than 5-letter name exists

```

<br>

- **예외 테스트 3 : 시도횟수가 양의 정수가 아닐 시**
```
- Input : "wrongNumber"
- Output : [ERROR] Non-integer-number counts
```

<br>

- **예외 테스트 4 : 비어있는 이름이 있을 시**
```
- Input : "pobi,edy,"
- Output : [ERROR] Empty name exists
```

<br>

- **예외 테스트 5 : 같은 이름이 있을 시**
```
- Input : "pobi,pobi"
- Output : [ERROR] Same name exists
```

<br />

## 참고자료
- [라이브러리 분석 결과](https://quirky-streetcar-a17.notion.site/mission-utils-28c523184d3c80d8904fe0870e5e4181?pvs=74)

- [Git Commands](https://quirky-streetcar-a17.notion.site/Git-Commands-295523184d3c80babea4d5f7cd4daff8)

- [Commit Messages](https://quirky-streetcar-a17.notion.site/Commit-message-295523184d3c80d9a241fc93c59ebce5)

- [1주차 피드백 내용](https://velog.io/@gaiogo2/FE-8%EA%B8%B0-%ED%94%84%EB%A6%AC%EC%BD%94%EC%8A%A4-1%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)

- [Jest 사용법](https://quirky-streetcar-a17.notion.site/Testing-Jest-297523184d3c807a9402f1f518f31abd)