import { merge } from "webpack-merge";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import commonConfig from "./webpack-common.config.js";

export default merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});
