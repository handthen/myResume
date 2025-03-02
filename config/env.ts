const envs = {
  env: {
    BASE_URL: '/api',
  },
  development: {},
  production: {},
}

module.exports = function (env) {
  const envObj = Object.assign({}, envs[env], envs['env'])
  const keys = Object.keys(envObj)
  for (let i = 0; i < keys.length; i++) {
    envObj[keys[i]] = JSON.stringify(envObj[keys[i]])
  }
  return envObj
}
