import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Layout, Header, Body, Footer } from './layout';
import { H1, H2 } from './atoms';
import theme from './theme';

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header>
        <H1>
          Hoi
        </H1>
      </Header>
      <Body>
        <H2>Header level 2</H2>
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
    </Layout>
  </ThemeProvider>
);
