import React from "react";

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Description } from "../../components/Description";

import { useStateContext } from "../../utils";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Column = styled.View`
  width: 50%;
`;

const CountryFlag = styled.Image`
  width: 100%;
  height: ${({ flagHeight }: { flagHeight: number }) => flagHeight}px;
  display: block;
  border-radius: 0.2rem 0.2rem 0 0;
`;

const DescriptionText = styled.Text``;

export const CountryData = () => {
  const { country } = useStateContext();
  const flagWidth = Dimensions.get("window").width * 0.5;
  const flagHeight = flagWidth / 1.64;
  console.log(country);
  return (
    <Container>
      <Column>
        <CountryFlag flagHeight={flagHeight} source={country?.flag} />
      </Column>
      <Column>
        <DescriptionText>{country?.name}</DescriptionText>
        <Description title="Native Name" data={country.name} />
        <DescriptionText>Population: {country?.population}</DescriptionText>
        <DescriptionText>Region: {country?.region}</DescriptionText>
        <DescriptionText>Sub Region: {country?.subregion}</DescriptionText>
        <DescriptionText>Capital: {country?.capital}</DescriptionText>
        <DescriptionText>
          Top Level Domain:{" "}
          {country.topLevelDomain && country.topLevelDomain[0]}
        </DescriptionText>
        <DescriptionText>
          Currencies:{" "}
          {country?.currencies?.map(({ name }: { name: string }) => `${name} `)}
        </DescriptionText>
        <DescriptionText>
          Languages:{" "}
          {country.languages?.map(({ name }: { name: string }) => `${name} `)}
        </DescriptionText>
        <DescriptionText>
          Border Countries:{" "}
          {country?.borders?.map((name: string) => `${name} `)}
        </DescriptionText>
      </Column>
    </Container>
  );
};
