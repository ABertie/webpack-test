const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	mode: process.env.environment == "production" ? "production" : "development",
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				//test: path.resolve(__dirname, "src/scss/*"),
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
			},{
				test: /\.png$/i,
				type: "asset"
			}
		]
	},
	devtool: "source-map",
	devServer: {
		static: "./dist"
	}
}