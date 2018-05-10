const FS_DEF = 16;
const METRICS = {
  16: {
    margin: '0',
    padding: '25px 0 7px 0',
    fontSize: '16px',
    lineHeight: '32px',
  },
  32: {
    margin: '0 0 -3px 0',
    padding: '67px 0 0 0',
    fontSize: '32px',
    lineHeight: '64px',
  },
  40: {
    margin: '0',
    padding: '64px 0 0 0',
    fontSize: '40px',
    lineHeight: '64px',
  },
  low40: {
    margin: '0',
    padding: '0',
    fontSize: '40px',
    lineHeight: '64px',
  },
  56: {
    margin: '-6px 0 0 0',
    padding: '0 0 6px 0',
    fontSize: '56px',
    lineHeight: '64px',
  },
};


const _chooseFontProp = (props) => {
  const { component } = props;
  const themeFontSize = props.theme && props.theme[component] && props.theme[component].fontSize;
  return props.fs || themeFontSize || props.fontSizeDef || FS_DEF;
}
const _getFontSize = (props) => {
  const fontProp = _chooseFontProp(props);

  if (typeof fontProp === 'number') return fontProp;
  return parseInt(fontProp, 10) || FS_DEF;
};
const _getMetrics = (props) => {
  console.log(props);
  const defaultMetrics = METRICS[FS_DEF];
  const fontProp = _chooseFontProp(props);

  if (typeof fontProp === 'number') return METRICS[fontProp] || defaultMetrics;

  const fontSize = _getFontSize(props);
  const id = fontProp.includes('low') ? `low${fontSize}` : fontSize;

  return METRICS[id] || defaultMetrics;
};

export const getFontSize = props => `${_getFontSize(props)}px`;
export const getPaddings = props => _getMetrics(props).padding;
export const getMargins = props => _getMetrics(props).margin;
