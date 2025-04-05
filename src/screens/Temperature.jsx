import React from "react";
import { CardList } from "@components/CardList";
import Sun from "../assets/sun.png";
import Sun2 from "../assets/sun2.png";
import CloudDay from "../assets/cloudday.png";
import Raining from "../assets/raining.png";
import Cloud from "../assets/cloud.png";
import { Layout } from "../layout/Layout";

const lastUpdate = [
  {
    id: 1,
    temperature: 20,
    humidity: 50,
    rain: 1,
    image: Sun,
  },
  {
    id: 2,
    temperature: 22,
    humidity: 20,
    rain: 10,
    image: CloudDay,
  },
  {
    id: 3,
    temperature: 20,
    humidity: 50,
    rain: 40,
    image: Raining,
  },
  {
    id: 4,
    temperature: 22,
    rain: 11,
    humidity: 20,
    image: Cloud,
  },
  {
    id: 5,
    temperature: 20,
    rain: 4,
    humidity: 50,
    image: Sun2,
  },
];

export const Temperature = () => {
  return (
    <Layout view>
      {lastUpdate.map((item) => (
        <CardList
          key={item.id}
          image={item.image}
          temperature={item.temperature}
          humidity={item.humidity}
          rain={item.rain}
        />
      ))}
    </Layout>
  );
};
