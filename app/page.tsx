"use client";

import Image from "next/image";
import HomeBanner from "./Components/Banner";
import MainFeature from "./Components/MainFeature";
import { useEffect, useState } from "react";
import CourtDisplay from "./Components/CourtDisplay";

export default function Home() {
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    fetch("https://66723415e083e62ee43e4f97.mockapi.io/Court")
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
      <div className="flex flex-wrap justify-between px-16">
        {courts.slice(0, 8).map((court) => (
          <CourtDisplay
            key={court.courtId}
            name={court.courtName}
            description={court.description}
            price={0}
            image={court.image}
          />
        ))}
      </div>
    </div>
  );
}
