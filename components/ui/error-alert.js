import Button from "./button";
import classes from "./error-alert.module.css";

function ErrorAlert(props) {
  return (
    <div className={classes.alert}>
      {props.children} <Button link={"/events"}>Show all events</Button>
    </div>
  );
}

export default ErrorAlert;
