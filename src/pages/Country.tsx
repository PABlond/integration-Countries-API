import React, { useState } from "react";

import { Layout } from "../components";
import { CountryData } from "../containers";

import { requests, useStateContext } from "../utils";

const Check = () => {
  const { country } = useStateContext();
  console.log(country);

  return <></>;
};

export const CountryScreen = ({ route = { params: {} }, navigation }) => {
  const fetchCountryData = async (): Promise<void> => {};

  const layoutOpts = { navigation, route };

  React.useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <Layout {...layoutOpts}>
      <CountryData />
    </Layout>
  );
};
