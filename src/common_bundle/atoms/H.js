// import React from 'react';
import styled from 'styled-components';
import { getFontSize, getLineHeight, getMargins, getPaddings } from './baseline';


export const H1 = styled.h1`
  margin: ${getMargins};
  padding: ${getPaddings};
  font-weight: bold;
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
  color: ${props => props.color || props.theme.color};
`;
H1.defaultProps = {
  component: 'h1',
  fontSizeDef: 56,
};

export const H2 = H1.extend`
  font-weight: normal;
`;
H2.defaultProps = {
  fs: 40,
};

export const H3 = H1.extend`
  font-weight: normal;
`;
H3.defaultProps = {
  fs: 32,
};
