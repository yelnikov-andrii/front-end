import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import { Proposition } from './Proposition';
import { Place } from '../../types';

const StyledPropositions = styled.div`
  margin: 0 0 100px 0;
`;

const Header = styled.h2`
margin: 0 0 2px 0;
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: ${props => props.theme.txtColor};
`;

const Description = styled.p`
margin: 0 0 24px 0;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #4E4B66;
`;

const Block = styled.div`
display: flex;
gap: 24px;
flex-wrap: wrap;
`;

interface Props {
  places: Place[];
  header: string;
  description: string;
}

export const Propositions: React.FC <Props> = ({ places, header, description }) => {
  return (
    <StyledPropositions>
      <Container>
        <Header>
          {header}
        </Header>
        <Description>
          {description}
        </Description>
        <Block>
          {places.map((place: Place) => (
            <Proposition
              place={place}
              key={place.city}
            />
          ))}
        </Block>
      </Container>
    </StyledPropositions>
  );
};
