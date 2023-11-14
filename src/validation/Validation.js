import ValidationUtils from './ValidationUtils.js';
 
class Validation {
  // 입력날짜 검증
  static validateDate(date) {
    ValidationUtils.isDateOnRange(date);
    ValidationUtils.isDateNotPositiveInteger(date);
    ValidationUtils.isDateNumber(date);
    ValidationUtils.isDateEmptyInput(date);
  }
  // 입력 메뉴 검증
  static validateMenu(menuList) { 
    const nameList = menuList.map((menu) => menu.name);
    const amountList = menuList.map((menu) => menu.amount);
    ValidationUtils.isUniqueElements(nameList);
    ValidationUtils.isMenuElement(nameList);
    ValidationUtils.isBeverage(nameList);
    
    let totalAmount = 0
    for (let i = 0; i < amountList.length; i++) {
      ValidationUtils.isMenuNumber(amountList[i]);
      totalAmount += Number(amountList[i])
    }
    ValidationUtils.isMenuLength(totalAmount)
  
  }

  
}
export default Validation;
