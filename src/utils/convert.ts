/**
 * values에서 존재하는 key 데이터만 반환함
 */
export const findKeyValue = (values: any, keys: string[]) => {
  return keys.reduce(
    (prev, next) => (values[next] ? { ...prev, [next]: values[next] } : prev),
    {}
  );
};

/**
 * values에서 존재하는 key 데이터만 반환하고 value는 string 형태로 변환함
 */
export const findKeyValueToStr = (values: any, keys: string[]) => {
  return keys.reduce(
    (prev, next) =>
      values[next] ? { ...prev, [next]: JSON.stringify(values[next]) } : prev,
    {}
  );
};

/**
 * values에서 존재하는 key 데이터만 반환하고 value는 object 형태로 변환함
 */
export const findKeyValueToObj = (values: any, keys: string[]) => {
  return keys.reduce(
    (prev, next) =>
      values[next] ? { ...prev, [next]: JSON.parse(values[next]) } : prev,
    {}
  );
};
