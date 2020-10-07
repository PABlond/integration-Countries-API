enum REGIONS {
  europe = "europe",
  africa = "africa",
  americas = "americas",
  oceania = "oceania",
  asia = "asia",
}

const apiUrl = "https://restcountries.eu/rest/v2";

const homePageCountriesFields = "?fields=name;capital;population;flag;region";
const countryFields =
  "?fields=name;capital;population;flag;region;nativeName;subregion;topLevelDomain;currencies;languages;borders";

const tokens = {
  mode: "country:mode",
};

export const constants = {
  REGIONS,
  apiUrl,
  countryFields,
  homePageCountriesFields,
  tokens,
};
