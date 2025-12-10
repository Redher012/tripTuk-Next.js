module.exports = {
  apps: [
    {
      name: "triptuk",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 2000,
      },
    },
  ],
};
