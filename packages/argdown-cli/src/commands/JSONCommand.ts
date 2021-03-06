import { argdown } from "@argdown/node";
import { Arguments } from "yargs";

export const command = "json [inputGlob] [outputDir]";
export const desc = "export Argdown input as JSON files";
export const builder = {
  logParserErrors: {
    alias: "e",
    describe: "Log parser errors to console",
    type: "boolean",
    default: true
  },
  spaces: {
    alias: "s",
    describe: "Spaces used for indentation",
    type: "number"
  },
  removeMap: {
    describe: "Remove map data",
    type: "boolean"
  },
  removeEmbeddedRelations: {
    describe: "Remove relations embedded in statement and relation objects",
    type: "boolean"
  }
};
export const handler = async (argv: Arguments) => {
  let config = await argdown.loadConfig(argv.config);

  config.json = config.json || {};

  if (argv.spaces !== null) {
    config.json.spaces = argv.spaces;
  }
  if (argv.removeEmbeddedRelations) {
    config.json.removeEmbeddedRelations = true;
  }
  if (argv.removeMap) {
    config.json.exportMap = false;
  }

  if (argv.inputGlob) {
    config.inputPath = argv.inputGlob;
  }
  config.saveAs = config.saveAs || {};
  if (argv.outputDir) {
    config.saveAs.outputDir = argv.outputDir;
  }

  config.logLevel = argv.verbose ? "verbose" : config.logLevel;
  config.watch = argv.watch || config.watch;
  config.process = ["load-file", "parse-input"];
  config.logParserErrors = argv.logParserErrors || config.logParserErrors;
  if (config.logParserErrors) {
    config.process.push("log-parser-errors");
  }
  config.process.push("build-model");
  config.process.push("export-json");

  if (!argv.stdout || argv.outputDir) {
    config.process.push("save-as-json");
  }
  if (argv.stdout) {
    config.process.push("stdout-json");
  }

  await argdown.load(config).catch(e => console.log(e));
};
