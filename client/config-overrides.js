const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  return alias({
    "@ecomo/components": "src/components",
    "@ecomo/pages": "src/pages",
  })(config);
};
