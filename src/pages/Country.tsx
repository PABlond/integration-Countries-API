import React, { useState } from "react";

import { Layout } from "../components";
import { BackButton, CountryData, Header } from "../containers";

import { requests, useStateContext } from "../utils";

export const CountryScreen = ({ route = { params: {} }, navigation }) => {
  const fetchCountryData = async (): Promise<void> => {};

  const layoutOpts = { navigation, route };

  React.useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <Layout {...layoutOpts}>
      <Header />
      <BackButton />
      <CountryData />
    </Layout>
  );
};
