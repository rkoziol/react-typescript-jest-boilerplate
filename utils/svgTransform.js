// It's a svg files parser for Jest library

module.exports = {
  process() {
    return { code: 'module.exports = {};' };
  },
  getCacheKey() {
    // The output is always the same.
    return 'svgTransform';
  },
};
