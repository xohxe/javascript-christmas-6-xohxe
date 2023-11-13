import Menu from '../model/Menu.js';
class Utils {
  static convertMenu(menus) {
    const splitedMenu = (menus || '').split(',');
    return splitedMenu.map((order) => {
      return new Menu(order.split('-')[0], order.split('-')[1]);
    });
  }
}

export default Utils;
