import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ErrorAllert from "../../components/ui/error-alert";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";

function FilteredEventsPAge(props) {
  const filteredEvents = props.events;
  console.log(props);
  // const filteredData = route.query.slug;

  if (props.hasError) {
    return (
      <ErrorAllert>
        <p className="center">Invalid filters</p>
      </ErrorAllert>
    );
  }

  // if (!filteredData) {
  //   return <p className="center">loading</p>;
  // }

  if (filteredEvents.length === 0) {
    return (
      <ErrorAllert>
        <p>No events found</p>
      </ErrorAllert>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
export default FilteredEventsPAge;

export async function getServerSideProps(context) {
  const { params } = context;
  const filteredData = params.slug;

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
