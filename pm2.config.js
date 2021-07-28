module.exports = {
  apps: [
    {
      script: "./lib/index.js",
      name: "mg-line",
      node_args: "-r dotenv/config",
    },
  ],
}
