/**
 * target 是否为 null
 * @param target
 * @returns
 */
export const isNull = (target: unknown): target is null => {
  return target === null;
};

/**
 * target 是否为 undefined
 * @param target
 * @returns
 */
export const isUndefined = (target: unknown): target is undefined => {
  return target === undefined;
};

/**
 * target 是否为 boolean 类型
 * @param target
 * @returns
 */
export const isBoolean = (target: unknown): target is boolean => {
  return typeof target === 'boolean';
};

/**
 * target 是否为 number 类型
 * @param target
 * @returns
 */
export const isNumber = (target: unknown): target is number => {
  return typeof target === 'number';
};

/**
 * target 是否为 string 类型
 * @param target
 * @returns
 */
export const isString = (target: unknown): target is string => {
  return typeof target === 'string';
};

/**
 * target 是否为 Array 类型
 * @param target
 * @returns
 */
export const { isArray } = Array;

/**
 * target 是否为对象类型
 * @param target
 * @returns
 */
export const isObject = <T extends object>(target: unknown): target is T => {
  return !!target && typeof target === 'object';
};

/**
 * target 是否为函数类型
 * @param target
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (target: unknown): target is Function => {
  return typeof target === 'function';
};

/**
 * target 是否为 null 或者 undefined
 * @param target
 * @returns
 */
export const isBlank = (target: unknown) => {
  return isNull(target) || isUndefined(target);
};

/**
 * target 是否为空
 *  比如：null, undefined, {}, [], ''
 * @param target
 * @returns
 */
export const isEmpty = <T>(target: T): target is T => {
  if (isArray(target)) {
    return target.length <= 0;
  }
  if (isObject(target)) {
    return Object.keys(target).length <= 0;
  }
  if (isString(target) || isBlank(target)) {
    return !target;
  }
  return false;
};
