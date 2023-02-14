export const setCookie = (key: string, value: string, expiredays: number) => {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = key + "=" + value + "; expires=" + todayDate.toUTCString() + ";path=/;";
}

export const getCookie = (key: string) => {
    var value = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return value? value[2] : null;
  };