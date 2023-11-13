import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { ALL_MENU_LIST, EVENT_BADGE } from '../utils/Constants.js';
import Discount from '../model/Discount.js';

class EventController {
  constructor() {
    this.inputView = InputView;
    this.ouputView = OutputView;
  }

  // 주문하기
  async orderMenu() {
    this.ouputView.printIntro();
    const getDate = await this.inputView.readDate();
    const orderMenu = await this.inputView.readMenu();
    this.ouputView.printMenu(orderMenu);
    this.ouputView.printPreview(getDate);

    const totalPrice = this.calcTotalPrice(orderMenu);
    this.ouputView.printOrderPrice(totalPrice);

    const discount = new Discount();
    const giftMenu = discount.giftEvent(totalPrice);
    this.ouputView.printGift(giftMenu);

    const allDiscount = discount.checkDiscountList(getDate, orderMenu);
    this.ouputView.printBenefit(allDiscount);

    const sumDiscount = discount.calcSumDiscount(allDiscount);
    this.ouputView.printDiscountSumAmount(sumDiscount);

    const finalPrice = totalPrice - sumDiscount;
    this.ouputView.printDiscountAmount(finalPrice);

    const badge = this.getBadge(allDiscount);
    this.ouputView.printEventBadge(badge[badge.length - 1]);
  }

  // 할인 전 전체금액 계산
  calcTotalPrice(menuList) {
    const orderMenuPrice = menuList.map(
      (menu) => ALL_MENU_LIST[menu.name] * menu.amount,
    );
    const result = orderMenuPrice.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return result;
  }
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
    await this.orderMenu();
  }
}

export default EventController;
