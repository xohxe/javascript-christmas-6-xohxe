import { Console } from '@woowacourse/mission-utils';
import { OUPUT_MESSAGES, EVENT_NAME } from '../utils/Constants.js';

const OutputView = {
  printIntro() {
    Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
  },
  printPreview(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },
  printMenu(menus) {
    Console.print(OUPUT_MESSAGES.ORDER_MENU);
    menus.forEach((menu) => {
      Console.print(`${menu.name} ${menu.amount}개`);
    });
  },

  printOrderPrice(price) {
    Console.print(
      `\n${OUPUT_MESSAGES.ORDER_PRICE}\n${price.toLocaleString()}원`,
    );
  },
  printGift(gift) {
    Console.print(`\n${OUPUT_MESSAGES.GIFT_MENU}\n${gift[0]}`);
  },
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
  printDiscountAmount(price) {
    Console.print(
      `\n${OUPUT_MESSAGES.DISCOUNT_PRICE}\n${price.toLocaleString()}원`,
    );
  },
  printEventBadge(badge) {
    Console.print(`\n${OUPUT_MESSAGES.EVENT_BADGE}\n${badge}`);
  },
};

export default OutputView;
