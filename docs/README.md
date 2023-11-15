# 구현할 기능 목록


## `View` : 입출력

- `InputView.js` 입력 & 검증
    - [x] `readDate` : 날짜 입력받기
    - [x] `readMenu` : 주문 메뉴 입력 받기

- `OuputView.js` 출력
    - [x] `printIntro` : 인트로 메세지 출력
    - [x] `printMenu` : 주문한 메뉴 출력
    - [x] `printOrderPrice` : 할인 전 총 주문금액 출력
    - [x] `printGift` : 증정 메뉴 출력
    - [x] `printBenefit` : 혜택 내역 출력
    - [x] `printDiscountSumAmount` : 할인 전 총주문 금액 출력
    - [x] `printDiscountAmount`: 할인 후 예상 결제 금액 출력
    - [x] `printEventBadge` : 12월 이벤트 뱃지 출력


## Model
- [x] Menu : 메뉴의 이름과 수량을 받아온다. (name, amount)
- [x] Discount : 날짜에 맞게 이벤트 적용하여 할인금액을 계산한다.
    - [x] `check10000` : 총 주문금액 10000원이 넘는지 확인
    - [x] `checkDiscountList` : 할인 내역 배열로 저장
    - [x] `calcSumDiscount` : 총 혜택 금액 계산
    - [x] `dDayDiscount` : 디데이 할인
    - [x] `weekdayDiscount` : 평일 할인
    - [x] `weekendDiscount` : 주말 할인
    - [x] `specialDiscount` : 특별 할인
    - [x] `giftEvent` : 증정 메뉴 

## Contoller 컨트롤러
- [x] `orderMenu` : 날짜 확인 & 주문 받기
- [x] `calcTotalPrice` : 할인 전 전체금액 계산
- [x] `getBadge` : 이벤트 뱃지 확인
- [x] `playEvent` : 전체 로직 실행

## `Validation` 입력값 검증

1. 입력날짜 검증
- [x] `isDateOnRange`: 방문할 날짜는 1 이상 31 이하의 숫자로만 입력받아 주세요.
- [x] `isDateNumber`: 숫자가 아니라 문자일 때
- [x] `isDateEmptyInput` : 입력값이 없을 때

2. 입력 메뉴 검증
- [x] `isMenuLength` : 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.  
- [x] `isMenuElement` : 고객이 메뉴판에 없는 메뉴를 입력하는 경우
- [x] `isMenuNumber` : 메뉴의 개수는 1 이상의 숫자만 입력되도록 해주세요
- [x] `isMenuNumber`,`isMenuElement` : 메뉴 형식이 예시와 다른 경우(예외케이스에 추가 e.g. '1-시저샐러드')
- [x] `isUniqueElements` 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1)
- [x] `isBeverage` : 음료만 주문한 경우

## `Utils` 전역으로 쓰이는 메서드
- [x] `convertMenu` : 문자열을 `,` 기준으로 나눠 배열로 만든 후, `-`기준으로 객체를 생성하여 Menu 객체들이 담긴 배열을 반환한다.

## `Constant` 전역으로 쓰이는 상수
- `MENU_LIST` : 메뉴 리스트 이름과 가격을 객체로 저장
- `DAYS` : 평일, 주말, 특별이벤트 날짜를 확인하는 함수
- `EVENT_RULE` : 이벤트 규칙을 정리
- `INPUT_MESSAGES` : 입력값을 받을때 쓰이는 문구
- `OUPUT_MESSAGES` : 출력값이 나올때 쓰이는 문구
- `ERROR_MESSAGES` : 에러메시지 나올때 쓰이는 문구

 