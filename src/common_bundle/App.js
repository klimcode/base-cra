import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Wrapper, Header, Body, Footer } from './layout';
import { H1, H2, H3 } from './atoms';

const theme = {
  color: 'red',
  h1: {
    fontSize: 40,
  },
};

export default () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header>
        <H1>
          Hoi
        </H1>
      </Header>
      <Body>
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eos corrupti qui, porro
          voluptates delectus dicta vel dolores
          perferendis ab amet? Totam ut fugiat quam,
          nisi voluptatem laboriosam nesciunt adipisci commodi.
        </p>
      </Body>
      <Footer>
        <h2>Footer</h2>
        <h2>xxx</h2>
      </Footer>
    </Wrapper>
  </ThemeProvider>
);
