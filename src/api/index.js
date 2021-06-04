import axios from "axios";

export const fetchData = async (country) => {
  let finalUrl = `http://covid19.mathdro.id/api`;
  if (country) {
    finalUrl = `http://covid19.mathdro.id/api/countries/${country}`;
  }
  let data = await axios
    .get(finalUrl)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
  return {
    confirmed: data.confirmed.value,
    recovered: data.recovered.value,
    deaths: data.deaths.value,
    lastUpdate: data.lastUpdate,
  };
};

export const fetchDailyData = async () => {
  let response = await axios
    .get(`http://covid19.mathdro.id/api/daily`)
    .then(({ data }) =>
      data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }))
    )
    .catch((error) => console.log(error));
  return response;
};

export const fetchCountries = async () => {
  let response = await axios
    .get(`http://covid19.mathdro.id/api/countries`)
    .then(({ data }) => data)
    .catch((error) => console.log(error));
  let res = response.countries.map((unit) => unit.name);
  return res;
};
