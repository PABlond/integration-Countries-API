import axios from "axios";

import { constants } from "./constants";
import { Country } from "./types";

const getAll = async (): Promise<Country[]> => {
  const { data } = await axios.get(
    `${constants.apiUrl}/all${constants.homePageCountriesFields}`
  );

  return data;
};

const getByRegion = async (region: string): Promise<Country[]> => {
  console.log(Object.keys(constants.REGIONS), { region });
  if (Object.keys(constants.REGIONS).indexOf(region) === -1) return [];
  const { data, status } = await axios.get(
    `${constants.apiUrl}/region/${region}${constants.homePageCountriesFields}`
  );
  console.log({ data, status });
  return data;
};

const getPartial = async (partialName: string): Promise<Country[]> => {
  if (!partialName.length) return await getAll();
  const { data } = await axios.get(
    `${constants.apiUrl}/name/${partialName}${constants.homePageCountriesFields}`
  );
  return data;
};

const getExact = async (countryName: string): Promise<any> => {
  if (!countryName.length) return {};
  const { status, data: [{ ...country }] = [{}] } = await axios
    .get(
      `${constants.apiUrl}/name/${countryName}${constants.countryFields}&fullText=true`
    )
    .catch(({ response: { status } }) => {
      console.log({ status });
      return { status };
    });
  if (status !== 200) return {};
  return country;
};

const getByCodes = async (codes: string[]): Promise<any> => {
  const borders = [];
  for await (const code of codes) {
    const { data } = await axios.get(`${constants.apiUrl}/alpha/${code}`);
    borders.push(data.name);
  }
  return borders;
};

export const requests = {
  getAll,
  getByCodes,
  getByRegion,
  getExact,
  getPartial,
};
