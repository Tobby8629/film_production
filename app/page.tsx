"use client";

// import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Footages from "./components/Homepage/Footages";
import Hero from "./components/Homepage/Hero";
import Reviews from "./components/Homepage/Reviews";
import Services from "./components/Homepage/Services";
import { getRequest } from "./api/Axois";
import { calenderlyUser } from "./utils/constants";
import { useEffect } from "react";

export default function Home() {
  // const query = useQuery({
  //   queryKey: ["fetchEvents"],
  //   queryFn: async () => getRequest(`/event_types?${calenderlyUser}`),
  // })
  // console.log("query", query.data);

const test = async () => {
  const allEventTypeURIs = ["30_Minute_Meeting", "video_production"];
  const allSlots: any[] = [];

  for (const type of allEventTypeURIs) {
    try {
      const response = await getRequest(`/event_type_availability_times?event_type=${type}?${calenderlyUser}`);
      const slots = response.data;

      if (Array.isArray(slots?.collection)) {
        allSlots.push(...slots.collection);
      }
    } catch (error) {
      console.error(`Failed to fetch availability for ${type}`, error);
    }
  }

  // Group and deduplicate by date
  const availableDates = [
    ...new Set(
      allSlots
        .filter(slot => slot?.start_time)
        .map(slot => slot.start_time.split("T")[0])
    ),
  ];

  console.log(availableDates);
};

  useEffect(() => {
    test();  }, []);
  return (
    <main>
      <Hero />
      <Services/>
      <Reviews />
      <Footages />
    </main>
  );
}


