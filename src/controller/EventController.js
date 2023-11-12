import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Menu from '../model/Menu.js';

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
    const convertedMenu = this.convertMenu(orderMenu);
    this.ouputView.printMenu(convertedMenu); // 주문 메뉴 출력
    Console.print(
      `12월 ${getDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  }
  // 주문 금액 계산하기
  async amountCalculation() {
    this.ouputView.printOrderAmount();
  }

  // 고객용 목록으로 바꾸기
  convertMenu(splitedMenu) {
    return splitedMenu.map((order) => {
      return new Menu(order.split('-')[0], order.split('-')[1]);
    });
  }
  // 전체 로직 실행
  async playEvent() {
    await this.orderMenu();
  }
}

export default EventController;
