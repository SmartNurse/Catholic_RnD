/* eslint-disable no-useless-escape */

const regex = {
  email:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password:
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^~\-\+\\()_=|])[A-Za-z\d@$!%*#?&^~\-\+\\()_=|]{8,}$/i,
  studentNo: /^[0-9]{4,15}$/i,
  contact: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
};

export default regex;
