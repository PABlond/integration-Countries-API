import React from "react";

import { Layout } from "../components";
import { Header, Filters, Countries } from "../containers";

export const HomeScreen = ({ navigation = {}, route = {} }) => {
  const layoutOpts = { navigation, route };
  return (
    <>
      <Layout {...layoutOpts}>
        <Header />
        <Filters />
        <Countries />
      </Layout>
    </>
  );
};
