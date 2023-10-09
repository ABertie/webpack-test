module.exports = {
    module: {
        rules: [
            {
            text: /\.scss$/i,
            use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: "source-map",
};