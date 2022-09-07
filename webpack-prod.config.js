import { merge } from "webpack-merge";
import { resolve, dirname } from "path";
import commonConfig from "./webpack-common.config.js";

export default merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(dirname("./dist")),
    publicPath: "/",
  },
  devtool: "source-map",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});
