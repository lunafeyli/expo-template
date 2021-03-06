const rootImportOpts = {
	root: __dirname,
	rootPathPrefix: "~/",
	rootPathSuffix: "src",
};

module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			["babel-plugin-root-import", rootImportOpts],
			"react-native-reanimated/plugin",
		],
	};
};
