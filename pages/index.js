import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import { Fragment } from "react";
import NewsletterRegistartion from '../components/input/newsletter-registration'
export default function HomePage(props) {
  return (
    <Fragment>
      <NewsletterRegistartion />
      <EventList items={props.events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
