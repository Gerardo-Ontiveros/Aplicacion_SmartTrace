import React from 'react';
import { CardPressureList } from '@components/CardPressureList';
import { Layout } from '../layout/Layout';

const lastUpdate = [
  {
    id: 1,
    pressure: 22,
    altitude: 11,
  },
  {
    id: 2,
    pressure: 22,
    altitude: 11,
  },
  {
    id: 3,
    pressure: 22,
    altitude: 11,
  },
  {
    id: 4,
    pressure: 22,
    altitude: 11,
  },
  {
    id: 5,
    pressure: 20,
    altitude: 4,
  },
];

export const Pressure = () => {
  return (
    <Layout view>
      {lastUpdate.map((item) => (
        <CardPressureList key={item.id} pressure={item.pressure} altitude={item.altitude} />
      ))}
    </Layout>
  );
};
