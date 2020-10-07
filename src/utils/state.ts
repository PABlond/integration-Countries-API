import { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-community/async-storage";

import { constants } from "./constants";
import { requests } from "./requests";
import { Country } from "./types";

export const StateContext = createContext<any>(null);

export const useStateContext = () => {
  return useContext(StateContext);
};

export const InitStateContext = ({ navigation, route }) => {
  const [countries, setCountries] = useState<any>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [country, setCountry] = useState({});

  const fetchAllCountries = async () => {
    if (route.name === "Home") setCountries(await requests.getAll());
  };

  const fetCountry = async () => {
    console.log(route);
    if (route.name === "Country") {
      const countryData = await requests.getExact(route.params.country);
      if (!Object.keys(countryData).length) return navigation.navigate("Home");
      const {
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        flag,
        ...rest
      } = countryData;
      const borders = await requests.getByCodes(rest.borders);

      setCountry({
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
        flag,
      });
    }
  };

  const colors = {
    dark: {
      text: {
        main: "#fff",
        alt: "#e1eaf1",
      },
      background: {
        main: "#202d36",
        alt: "#2b3743",
      },
    },
    light: {
      text: {
        main: "#000000",
        alt: "#828282",
      },
      background: {
        main: "#fff",
        alt: "#fafafa",
      },
    },
  };

  const toggleDarkMode = async () => {
    const mode = !darkMode;
    setDarkMode(mode);
    await AsyncStorage.setItem(constants.tokens.mode, mode ? "dark" : "light");
  };

  const getMode = async () => {
    const mode = await AsyncStorage.getItem(constants.tokens.mode);
    if (mode === "dark") setDarkMode(mode === "dark");
  };

  useEffect(() => {
    fetchAllCountries();
    fetCountry();
    getMode();
  }, []);

  return {
    country,
    countries,
    setCountries,
    toggleDarkMode,
    darkMode,
    colors: colors[darkMode ? "dark" : "light"],
    navigation,
  };
};

type StateContextProps = {
  contries: Country;
  setCountries: any;
};
