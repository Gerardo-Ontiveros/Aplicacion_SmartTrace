module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@context": "./src/context",
            "@lib": "./src/lib",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@ui": "./src/ui",
          },
        },
      ],
    ],
  };
};
