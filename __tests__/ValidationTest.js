import Validation from '../src/validation/Validation.js';
import Utils from '../src/utils/Util.js';

describe('입력날짜 검증', () => {
  test('입력 범위가 아니면 에러 메시지 출력', () => {
    expect(() => {
      Validation.validateDate('3');
    }).not.toThrow();

    expect(() => {
      Validation.validateDate('33');
    }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요');
  });
});

describe('메뉴 입력 에러 메시지 체크', () => {
  test('메뉴 입력값이 잘못되면 에러 메시지 출력', () => {
    expect(() => {
      const menu = Utils.convertMenu('해산물파스타-2,레드와인-1,초코케이크-1');
      Validation.validateMenu(menu);
    }).not.toThrow();
    // 중복 메뉴
    expect(() => {
      const menu = Utils.convertMenu('시저샐러드-1,시저샐러드-1');
      Validation.validateMenu(menu);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    // 메뉴 형식이 예시와 다른 경우
    expect(() => {
      const menu = Utils.convertMenu('1-시저샐러드,레드와인-1');
      Validation.validateMenu(menu);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
});
