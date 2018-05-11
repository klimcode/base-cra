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


const _getMetricsId = (props) => {
  const { component } = props;
  const themeFontSize = props.theme && props.theme[component] && props.theme[component].fontSize;
  return props.fs || themeFontSize || props.fontSizeDef || FS_DEF;
};
const memoize = (fn) => {
  const memoCache = {};
  return (arg) => {
    const metricsId = _getMetricsId(arg);
    debugger;
    if (metricsId in memoCache) {
      return memoCache[metricsId];
    }

    const result = fn(metricsId);
    memoCache[metricsId] = result;
    return result;
  };
};
const _getFontSize = (metricsId) => {
  if (typeof metricsId === 'number') return metricsId;
  return parseInt(metricsId, 10) || FS_DEF;
};
const _getMetrics = (metricsId) => {
  const defaultMetrics = METRICS[FS_DEF];

  if (typeof metricsId === 'number') return METRICS[metricsId] || defaultMetrics;

  const fontSize = _getFontSize(metricsId);
  const id = metricsId.includes('low') ? `low${fontSize}` : fontSize;

  return METRICS[id] || defaultMetrics;
};
const getMetrics = memoize(_getMetrics);

export const getMargins = props => getMetrics(props).margin;
export const getPaddings = props => getMetrics(props).padding;
export const getFontSize = props => getMetrics(props).fontSize;
export const getLineHeight = props => getMetrics(props).lineHeight;
