import { HashRouter, Route, Routes } from 'react-router-dom';
import useUser from 'store/user/useUser';

import Main from './Main';
import MyPage from './MyPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ScreenSetting from './ScreenSetting';
import Agreement2Contents from './AgreementTow';

function RouterContainer() {
  const { student_uuid } = useUser();

  if (!student_uuid)
    return (
      <HashRouter>
        <Routes>
          <Route path="*" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </HashRouter>
    );
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/agreement2" element={<Agreement2Contents />} />
        <Route path="/screensetting" element={<ScreenSetting />} />
      </Routes>
    </HashRouter>
  );
}

export default RouterContainer;
