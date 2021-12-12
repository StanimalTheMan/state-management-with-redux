import React from "react";
import { useSelector } from "react-redux";
// import { removeNotification } from "../reducers/notificationReducer";

const Notification = () => {
  // const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  // React.useEffect(() => {
  //   const timeId = setTimeout(() => {
  //     dispatch(removeNotification());
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeId);
  //   };
  // }, [notification]);

  const returnedBlankOrNotification = notification ? (
    <div style={style}>{notification}</div>
  ) : (
    <></>
  );
  return returnedBlankOrNotification;
};

export default Notification;
