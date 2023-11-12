const MENU_LIST = {
  MENU_APPETIZER: {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  },

  MENU_MAIN: {
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  },

  MENU_DESSERT: {
    초코케이크: 15000,
    아이스크림: 5000,
  },

  MENU_BEVERAGE: {
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  },
};

const EVENT_RULE = {
  RANGE: {
    MIN: 1,
    MAX: 31,
  },
  LENGTH: 20,
};

const INPUT_MESSAGES = Object.freeze({
  START: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  DATE: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  ORDER_MENU:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});

const OUPUT_MESSAGES = Object.freeze({
  PREVIEW_INFO: '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  ORDER_MENU: '<주문 메뉴>',
  ORDER_AMOUNT_SUM: '<할인 전 총주문 금액>',
  GIFT_MENU: '<증정 메뉴>',
  BENEFITS_DETAILS: '<혜택 내역>',
  TOTAL_BENEFIT_AMOUNT: '<총혜택 금액>',
  DISCOUNT_AMOUNT: '<할인 후 예상 결제 금액>',
  EVENT_BADGE: '<12월 이벤트 배지>',
});

const ERROR_MESSAGES = Object.freeze({
  INPUT_ERROR: '[ERROR] 잘못된 값이 입력되었습니다.',
  NO_RANGE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  NO_MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  NO_VALUE: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
});
export {
  MENU_LIST,
  EVENT_RULE,
  INPUT_MESSAGES,
  OUPUT_MESSAGES,
  ERROR_MESSAGES,
};
