import React from "react";
// import { useSelector } from "react-redux";
import { connect } from "react-redux";
// import { removeNotification } from "../reducers/notificationReducer";

const Notification = (props) => {
  // const dispatch = useDispatch();

  const notification = props.notification;
  // const notification = useSelector((state) => state.notification);
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

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
