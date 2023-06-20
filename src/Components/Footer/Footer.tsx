import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';

const StyledFooter = styled.footer`
padding: 24px 0;
border-top: 1px solid #D9DBE9;
`;

const List = styled.ul`
padding: 0;
margin: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 24px;
`;

const Block = styled.div`
display: flex;
justify-content: space-between;
`;

const Text = styled.p`
margin: 0;
`;

export const Footer = () => {
  const links = [
    'Terms',
    'Sitemap',
    'Privacy',
  ];

  return (
    <StyledFooter>
      <Container>
        <Block>
          <List>
            <li>
              2023 TravelMore
            </li>
            {links.map(link => (
              <li key={link}>
                {link}
              </li>
            ))}
          </List>
          <Text>
            Support & resources
          </Text>
        </Block>
      </Container>
    </StyledFooter>
  );
};
