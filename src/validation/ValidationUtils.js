import { EVENT_RULE, ERROR_MESSAGES } from '../utils/Constants.js';

class ValidationUtils {
  // 입력값이 비어있지 않은지 검증
  static isemptyInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGES.INPUT_ERROR);
    }
  }
  // 입력값이 1 이상 31 이하의 숫자인지 검증
  static isOnRange(input) {
    if (input < EVENT_RULE.RANGE.MIN || input > EVENT_RULE.RANGE.MAX) {
      throw new Error(ERROR_MESSAGES.NO_RANGE);
    }
  }
  // 입력값이 숫자인지 검증
  static isNumber(input) {
    if (typeof input === 'number') {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }

  // 입력값이 양의 정수가 아닌지 검증
  static isNotPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }

  // 입력값의 개수가 20개를 넘는 것이 아닌지 검증
  static isMenuLength(input) {
    if (input > EVENT_RULE.LENGTH) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }

  // 각 요소들이 중복되지 않는지 검증
  static isUniqueElements(arr) {
    const SET = new Set(arr);
    if (SET.size !== EVENT_RULE.LENGTH) {
      throw new Error(ERROR_MESSAGES.NO_VALUE);
    }
  }
}
export default ValidationUtils;
