import React, { useEffect, useState } from "react";
import EventsHeadline from "./eventsHeadline";
import DarkCard from "../../common/DarkCard";
import { apiService } from "../../../../utils/apiService";


const EventsLayout = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await apiService.getAllEvents();
        setEvents(response.data.event);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="bg-black text-white pb-10" id="events">
      <EventsHeadline />
      <div className="flex justify-center md:px-5 ">
        <div className="grid grid-cols-3 gap-10 items-center mt-4 max-sm:grid-cols-1">
          {events.map((event) => (
            <section key={event._id}>
              <DarkCard
                title={event.title}
                description={event.description}
                image={event.image}
                date={event.date}
                location={event.location}
                time={event.time}
              />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsLayout;
