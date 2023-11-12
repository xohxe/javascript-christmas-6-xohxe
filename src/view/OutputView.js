import { Console } from '@woowacourse/mission-utils';
import { OUPUT_MESSAGES } from '../utils/Constants.js';
import Utils from '../utils/Util.js';

const OutputView = {
    
  // START ~ <주문 메뉴> 출력
  printIntro() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printMenu(menus) {
    Console.print(OUPUT_MESSAGES.ORDER_MENU);
    menus.forEach((menu) => {
      Console.print(`${menu.name} ${menu.amount}개`);
    });
  },

  // <할인 전 총주문 금액> 출력
  printOrderAmount() {
    Console.print(OUPUT_MESSAGES.ORDER_AMOUNT_SUM);
  },

  // <혜택 내역> 출력
  printBenefit() {
    Console.print(OUPUT_MESSAGES.BENEFITS_DETAILS);
  },

  // <총혜택 금액> 출력
  printGift() {
    Console.print(OUPUT_MESSAGES.TOTAL_BENEFIT_AMOUNT);
  },

  // <할인 후 예상 결제 금액> 출력
  printDiscountAmount() {
    Console.print(OUPUT_MESSAGES.DISCOUNT_AMOUNT);
  },

  // <12월 이벤트 배지> 출력
  printEventBadge() {
    Console.print(OUPUT_MESSAGES.EVENT_BADGE);
  },
};

export default OutputView;
