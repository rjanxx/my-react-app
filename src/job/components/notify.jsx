import { Store } from "react-notifications-component";
export const Notice = (props) => {
  Store.addNotification({
    title: props.tittle,
    message: props.message,
    type: props.type,
    insert: "centre",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
