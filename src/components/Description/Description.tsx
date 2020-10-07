import React from "react";

import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  font-weight: 600;
`;

const Data = styled.Text``;

export const Description: FC<DescriptionProps> = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}: </Title>
      <Data>{data}</Data>
    </Container>
  );
};

type DescriptionProps = {
  title: string;
  data: string;
};
