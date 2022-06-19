import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';

function RouterContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterContainer;
