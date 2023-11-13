import {
  EVENT_RULE,
  ERROR_MESSAGES,
  ALL_MENU_LIST,
  MENU_LIST,
} from '../utils/Constants.js';

class ValidationUtils {
  // 날짜
  // 입력값이 비어있지 않은지 검증
  static isDateEmptyInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGES.NO_DATE);
    }
  }
  // 입력값이 1 이상 31 이하의 숫자인지 검증
  static isDateOnRange(input) {
    if (input < EVENT_RULE.RANGE.MIN || input > EVENT_RULE.RANGE.MAX) {
      throw new Error(ERROR_MESSAGES.NO_DATE);
    }
  }
  // 날짜 입력값이 숫자인지 검증
  static isDateNumber(input) {
    if (typeof input === 'number') {
      throw new Error(ERROR_MESSAGES.NO_DATE);
    }
  }
  // 입력값이 양의 정수가 아닌지 검증
  static isDateNotPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGES.NO_DATE);
    }
  }

  // 메뉴 검증
  // 메뉴 수량의 입력값이 숫자, 양의 정수인지 검증
  static isMenuNumber(input) {
    if (typeof input === 'number' || input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }
  // 입력값의 개수가 20개를 넘는 것이 아닌지 검증
  static isMenuLength(input) {
    if (input > EVENT_RULE.LENGTH) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }

  // 메뉴에서 각 요소들이 중복되지 않는지 검증
  static isUniqueElements(arr) {
    const SET = new Set(arr);
    if (SET.size !== arr.length) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }

  // 요소가 메뉴판에 있는지 검증
  static isMenuElement(arr) {
    const allMenuList = Object.keys(ALL_MENU_LIST);
    if (arr.some((i) => !allMenuList.includes(i))) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }

  // 음료만 시킨지 검증
  static isBeverage(arr) {
    const allBeverageList = Object.keys(MENU_LIST.MENU_BEVERAGE);
    if (arr.every((i) => allBeverageList.includes(i))) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }
}
export default ValidationUtils;
