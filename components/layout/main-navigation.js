import Link from "next/link";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h2>
        <Link href="/">Next Events</Link>
      </h2>
      <div className={classes.navigation}>
        <Link href="/events">Browse all events</Link>
      </div>
    </header>
  );
}

export default MainNavigation;
