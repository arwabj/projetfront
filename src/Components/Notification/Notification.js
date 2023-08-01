import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import {ToastContainer, toast} from "react-toastify";
import { clearErrors } from '../../JS/Actions/ActUsers';

const Notification = ({error}) => {
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            dispatch(clearErrors());
        }, 3000);
    },[show, dispatch]);
  return (
    <div>
        <div>
            { show && (
                <div>
                    {toast.error(error.msg)}
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <ToastContainer />
                </div>
            )}
        </div>
    </div>
  )
};

export default Notification;