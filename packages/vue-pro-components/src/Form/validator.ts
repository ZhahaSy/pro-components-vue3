import { isNumber, isString } from 'lodash-es';

// email
export const emailValidator = (value) => {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return reg.test(value);
};
// 合法uri
export const urlValidator = (value) => {
  const urlregex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!$&'\*\+,;=.]+$/;
  return urlregex.test(value);
};

// 手机号码
export const mobilePhoneValidator = (value) => {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return reg.test(value);
};

// 固定电话
export const TelephoneValidator = (value) => {
  const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(value);
};
// 身份证号
export const IDValidator = (value) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
};

export const BankValidator = (value) => {
  const reg = /^([1-9]{1})(\d{14}|\d{18}|\d{15})$/;
  return reg.test(value);
};

const validationMap = {
  isEmail: {
    validator: emailValidator,
    message: '格式错误！',
  },
  isURI: {
    validator: urlValidator,
    message: '格式错误！',
  },
  isMobilePhone: {
    validator: mobilePhoneValidator,
    message: '格式错误！',
  },
  isTelePhone: {
    validator: TelephoneValidator,
    message: '格式错误！',
  },
  isID: {
    validator: IDValidator,
    message: '格式错误！',
  },
  isBankValidator: {
    validator: BankValidator,
    message: '格式错误！',
  },
  isNumber: {
    validator: isNumber,
    message: '格式错误！',
  },
  isString: {
    validator: isString,
    message: '格式错误！',
  },
};

export default validationMap;
