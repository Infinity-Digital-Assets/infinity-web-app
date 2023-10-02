// ToastWrapper.js
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastWrapper = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default ToastWrapper;
