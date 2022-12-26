import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import { Fragment } from "react";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventList items={featuredEvents} />
    </Fragment>
  );
}
