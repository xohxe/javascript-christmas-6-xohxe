import { Console } from '@woowacourse/mission-utils';
import { OUPUT_MESSAGES, EVENT_NAME } from '../utils/Constants.js';

const OutputView = {
  // START
  printIntro() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  // <주문 메뉴> 출력
  printMenu(menus) {
    Console.print(OUPUT_MESSAGES.ORDER_MENU);
    menus.forEach((menu) => {
      Console.print(`${menu.name} ${menu.amount}개`);
    });
  },

  // <할인 전 총주문 금액> 출력
  printOrderPrice(price) {
    Console.print(
      `\n${OUPUT_MESSAGES.ORDER_PRICE}\n${price.toLocaleString()}원`,
    );
  },

  // <증정 메뉴> 출력
  printGift(gift) {
    Console.print(`\n${OUPUT_MESSAGES.GIFT_MENU}\n${gift[0]}`);
  },

  // <혜택 내역> 출력
  printBenefit(discountList) {
    Console.print(`\n${OUPUT_MESSAGES.BENEFITS_DETAILS}`);
    discountList.forEach((e) => {
      if (e !== 0 && e !== undefined) {
        Console.print(
          `${EVENT_NAME[discountList.indexOf(e)]} -${e.toLocaleString()}원`,
        );
      } else {
        Console.print('없음');
      }
    });
  },
  printDiscountSumAmount(sum) {
    Console.print(
      `\n${OUPUT_MESSAGES.TOTAL_BENEFIT_AMOUNT}\n${sum.toLocaleString()}원`,
    );
  },
  // <할인 후 예상 결제 금액> 출력
  printDiscountAmount() {
    Console.print(`\n${OUPUT_MESSAGES.DISCOUNT_PRICE}\n`);
  },

  // <12월 이벤트 배지> 출력
  printEventBadge() {
    Console.print(`\n${OUPUT_MESSAGES.EVENT_BADGE}\n`);
  },
};

export default OutputView;
