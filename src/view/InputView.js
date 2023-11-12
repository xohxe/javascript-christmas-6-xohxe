import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../utils/Constants.js';
import Validation from '../validation/Validation.js';
import Utils from '../utils/Util.js';

const InputView = {
  async readDate() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGES.DATE);
      Validation.validateDate(input);
      return input;
    } catch (error) {
      Console.print(error.message);
    }
    return await this.readDate();
  },
  async readMenu() {
    try {
      const menuInput = await Console.readLineAsync(INPUT_MESSAGES.ORDER_MENU);
      // , 기준으로 나눠 배열로 저장
      const menu = Utils.splitComma(menuInput);  
      Validation.validateMenu(menu);
      return menu;
    } catch (error) {
      Console.print(error.message);
    }
    return await this.readMenu();
  },
};

export default InputView;
