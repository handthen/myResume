const config = require('./index');

const process_copy = {
  env: {
    ...(config[process.env.NODE_ENV!] || {}),
  },
};
export default process_copy;
