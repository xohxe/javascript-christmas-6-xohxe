import EventController from '../controller/EventController';
import { DAYS, MENU_LIST } from '../utils/Constants';

class Discount {
  constructor() {
    this.check10000 = true
  }

  checkDiscountList(date, menuList) {
    let discountList = [];
    discountList.push(this.dDayDiscount(date));
    discountList.push(this.weekdayDiscount(date, menuList));
    discountList.push(this.weekendDiscount(date, menuList));
    discountList.push(this.specialDiscount(date));
    discountList.push(this.giftEvent[1]);  
    return discountList;
  } 
  
  // 총 혜택 금액
  calcSumDiscount(discountList) {
    let allDiscount = discountList.filter((element) => element !== undefined);
    const sumOfDiscount = allDiscount.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return sumOfDiscount;
  }

  // 디데이 할인
  dDayDiscount(date) {
    let discount = 0;
    if (date < 26 && this.check10000) {
      discount = 1000 + date * 100;
    }
    return discount;
  }

  // 평일 할인
  weekdayDiscount(date, menuList) {
    const WEEKDAYS = DAYS.makeWeekdays();
    const validWeekday = menuList.map((menu) => {
      if (
        WEEKDAYS.includes(date) &&
        Object.keys(MENU_LIST.MENU_DESSERT).includes(menu.name) && this.check10000
      ) {
        return menu.amount;
      }
    });
    let newValidWeekday = validWeekday.filter((el) => el !== undefined);
    const sumOfDiscount = newValidWeekday.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return 2023 * sumOfDiscount;
  }
  // 주말 할인
  weekendDiscount(date, menuList) {
    const WEEKENDS = DAYS.makeWeekends();
    const validWeekend = menuList.map((menu) => {
      if (
        WEEKENDS.includes(date) &&
        Object.keys(MENU_LIST.MENU_MAIN).includes(menu.name) && this.check10000
      ) {
        return menu.amount;
      }
    });
    let newValidWeekend = validWeekend.filter((el) => el !== undefined);
    const sumOfDiscount = newValidWeekend.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return 2023 * sumOfDiscount;
  }

  // 특별 할인
  specialDiscount(date) {
    const STARDAYS = DAYS.makeStarDays();
    if (STARDAYS.includes(date) && this.check10000) {
      return 1000;
    }
  }
  // 증정 메뉴
  giftEvent(price) {
    let gift = ['없음', 0];
    if (price >= 120000) {
      gift = ['샴페인', 25000];
    }
    return gift;
  }
}
export default Discount;
