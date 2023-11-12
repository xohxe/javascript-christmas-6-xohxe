import ValidationUtils from './ValidationUtils.js';

class Validation {
  // 입력날짜 검증
  static validateDate(input) {
    ValidationUtils.isOnRange(input);
    ValidationUtils.isNotPositiveInteger(input);
    ValidationUtils.isNumber(input);
  }
  // 입력 메뉴 검증
  static validateMenu(arr) {
    ValidationUtils.isMenuLength(arr.length);
    // for (let i = 0; i < arr.length; i++) {
    //   const MENU_COUNT = Number(arr[i]);
    // }
  }
}
export default Validation;
