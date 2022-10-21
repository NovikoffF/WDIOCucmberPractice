export const config = {
  // ...
  autoCompileOpts: {
    autoCompile: true,
    // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // for all available options
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
    // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
    // do please make sure "tsconfig-paths" is installed as dependency
    tsConfigPathsOpts: {
      baseUrl: "./",
    },
  },
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
    },
  ],
  framework: "cucumber",
  services: [
    [
      "selenium-standalone",
      {
        installArgs: { chrome: { version: "latest" } },
        args: { chrome: { version: "latest" } }, // drivers to use
      },
    ],
  ],
  specs: ["./features/**/select-region.feature"],
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./steps/**/*.steps.ts"],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty"],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 180000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
    retry: 0,
  },
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  beforeFeature: async (uri, feature) => {
    await browser.maximizeWindow();
    // await browser.url('https://webdriver.io');
  },
};
