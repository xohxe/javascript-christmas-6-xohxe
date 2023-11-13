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

const ALL_MENU_LIST = Object.assign(
  {},
  MENU_LIST.MENU_APPETIZER,
  MENU_LIST.MENU_MAIN,
  MENU_LIST.MENU_DESSERT,
  MENU_LIST.MENU_BEVERAGE,
);

const DAYS = {
  makeWeekdays() {
    let WEEKDAY = [4, 5, 6, 7];
    let WEEKDAYS = [];
    for (let i = 0; i < 4; i++) {
      WEEKDAY.map((e) => {
        WEEKDAYS.push(e + 7 * i);
      });
    }
    return WEEKDAYS;
  },

  makeWeekends() {
    let WEEKEND = [1, 2];
    let WEEKENDS = [];
    for (let i = 0; i < 5; i++) {
      WEEKEND.map((e) => {
        WEEKENDS.push(e + 7 * i);
      });
    }
    return WEEKENDS;
  },

  makeStarDays() {
    let STARDAY = [3];
    let STARDAYS = [];
    for (let i = 0; i < 5; i++) {
      STARDAY.map((e) => {
        STARDAYS.push(e + 7 * i);
      });
    }
    STARDAYS.push(25);
    return STARDAYS;
  },
};

const EVENT_NAME = [
  '크리스마스 디데이 할인:',
  '평일 할인:',
  '주말 할인:',
  '특별 할인:',
  '증정 이벤트:',
];

const EVENT_BADGE = {
  5000: '별',
  10000: '트리',
  20000: '산타',
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
  ORDER_PRICE: '<할인 전 총주문 금액>',
  GIFT_MENU: '<증정 메뉴>',
  BENEFITS_DETAILS: '<혜택 내역>',
  TOTAL_BENEFIT_AMOUNT: '<총혜택 금액>',
  DISCOUNT_PRICE: '<할인 후 예상 결제 금액>',
  EVENT_BADGE: '<12월 이벤트 배지>',
});

const ERROR_MESSAGES = Object.freeze({
  INPUT_ERROR: '[ERROR] 잘못된 값이 입력되었습니다.',
  NO_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  NO_ORDER: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  NO_VALUE: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
});

export {
  MENU_LIST,
  ALL_MENU_LIST,
  DAYS,
  EVENT_NAME,
  EVENT_BADGE,
  EVENT_RULE,
  INPUT_MESSAGES,
  OUPUT_MESSAGES,
  ERROR_MESSAGES,
};
