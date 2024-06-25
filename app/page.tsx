"use client";

import Image from "next/image";
import HomeBanner from "./Components/Banner";
import MainFeature from "./Components/MainFeature";
import { useEffect, useState } from "react";
import CourtDisplay from "./Components/CourtDisplay";

export default function Home() {
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    fetch("https://667a317c18a459f63952aa1c.mockapi.io/api/v1/Court")
      .then((response) => response.json())
      .then((data) => {
        setCourts(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <HomeBanner />
      <MainFeature />
      <div className="text-4xl font-bold px-28 mt-12">
        Our population options
      </div>
      <div className="flex flex-wrap -m-2 px-28 mt-3 items-stretch">
        {courts.slice(0, 8).map((court) => (
          <div className="p-2 w-1/2 md:w-1/4" key={court.id}>
            <CourtDisplay
              key={court.id}
              name={court.name}
              description={court.description}
              price={court.price}
              image={court.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
