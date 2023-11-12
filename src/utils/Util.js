class Utils {
  // 입력값 , 기준으로 나눔
  static splitComma(str) {
    return (str || '').split(',');
  }

  // 입력값 - 기준으로 나눔
  static splitHyphen(str) {
    return str.split('-');
  }
}

export default Utils;
