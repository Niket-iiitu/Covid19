import React from "react";
import styles from "./style.module.css";

import Cards from "../components/Cards/Cards";
import Chart from "../components/Chart/Chart";
import CountryPicker from "../components/CountryPicker/CountryPicker";

import { fetchData } from "../api";

export default function Page() {
  const [presentData, setData] = React.useState(null);
  const [country, setCountry] = React.useState(null);

  const GetData = async () => {
    await fetchData().then((data) => {
      setData(data);
    });
  };

  const handleCountry = async (country) => {
    await fetchData(country).then((data) => {
      setData(data);
    });
    setCountry(country);
  };

  React.useEffect(() => {
    GetData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>COVID-19 LIVE</h1>
      <Cards data={presentData} />
      <CountryPicker handleCountry={handleCountry} />
      <Chart data={presentData} country={country} />
    </div>
  );
}
