import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ErrorAllert from "../../components/ui/error-alert";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";

function FilteredEventsPAge() {
  const route = useRouter();
  const filteredData = route?.query?.slug;

  if (!filteredData) {
    return <p className="center">loading</p>;
  }

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021) {
    return (
      <ErrorAllert>
        <p className="center">invalid filters</p>
      </ErrorAllert>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAllert>
        <p>No events found</p>
      </ErrorAllert>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
export default FilteredEventsPAge;
