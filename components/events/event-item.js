import classes from "./event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";

export default function EventItem({ event }) {
  const { title, image, date, location, id } = event;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>
              <DateIcon />
              {humanReadableDate}
            </time>
          </div>
          <div className={classes.address}>
            <address>
              <AddressIcon />
              {formattedAddress}
            </address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>Explore Event</Button>
      </div>
    </li>
  );
}
