import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { ALL_MENU_LIST, EVENT_BADGE } from '../utils/Constants.js';
import Discount from '../model/Discount.js';

class EventController {
  constructor() {
    this.inputView = InputView;
    this.ouputView = OutputView;
    this.discount = new Discount();
  }
  // 주문하기
  async orderMenu() {
    const getDate = await this.inputView.readDate();
    const orderMenu = await this.inputView.readMenu();
    this.ouputView.printMenu(orderMenu);
    this.ouputView.printPreview(getDate);

    const totalPrice = this.calcTotalPrice(orderMenu);
    this.ouputView.printOrderPrice(totalPrice);

    const { giftMenu, allDiscount, sumDiscount } = await this.processDiscounts(getDate,orderMenu,totalPrice);

    const finalPrice = this.getFinalPrice(totalPrice, sumDiscount, giftMenu);
    this.ouputView.printDiscountAmount(finalPrice);

    const badge = this.getBadge(sumDiscount);
    this.ouputView.printEventBadge(badge[badge.length - 1]);
  }

  async processDiscounts(getDate, orderMenu, totalPrice) {
    const giftMenu = this.discount.giftEvent(totalPrice);
    this.ouputView.printGift(giftMenu);

    const allDiscount = await this.discount.checkDiscountList(Number(getDate),orderMenu, Number(totalPrice));
    this.ouputView.printBenefit(allDiscount);

    const sumDiscount = this.discount.calcSumDiscount(allDiscount);
    this.ouputView.printDiscountSumAmount(-sumDiscount);

    return { giftMenu, allDiscount, sumDiscount };
  }
  // 할인 전 전체금액 계산
  calcTotalPrice(menuList) {
    const orderMenuPrice = menuList.map(
      (menu) => ALL_MENU_LIST[menu.name] * menu.amount
    );
    const result = orderMenuPrice.reduce((acc, cur) => acc + cur, 0);
    if (result < 10000) {
      this.discount.check10000 = false;
    }
    return result;
  }
  // 할인 후 예상 결제 금액
  getFinalPrice(totalPrice, sumDiscount, giftMenu) {
    let result = totalPrice - sumDiscount;
    if (giftMenu[1] !== 0) {
      result += 25000;
    }
    return result;
  }
  // 12월 이벤트 뱃지
  getBadge(discount) {
    let badge = ['없음'];
    for (let i = 0; i < 3; i++) {
      if (discount >= Object.keys(EVENT_BADGE)[i]) {
        badge.push(Object.values(EVENT_BADGE)[i]);
      }
    }
    return badge;
  }
  // 전체 로직 실행
  async playEvent() {
    this.ouputView.printIntro();
    await this.orderMenu();
  }
}

export default EventController;
