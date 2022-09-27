import path from "path";
import {
	defineConfig
} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vwt from "weapp-tailwindcss-webpack-plugin/vite";
import postcssWeappTailwindcssRename from "weapp-tailwindcss-webpack-plugin/postcss";

const isH5 = process.env.UNI_PLATFORM === "h5";

// vite 插件配置，注意一定要把 uni 注册在 vwt 前
const vitePlugins = [uni()];

const resolve = (p) => {
	return path.resolve(__dirname, p);
};

const postcssPlugins = [
	require("autoprefixer")(),
	require("tailwindcss")({
		config: resolve("./tailwind.config.js"),
	}),
];
if (!isH5) {
	vitePlugins.push(vwt());
	postcssPlugins.push(postcssWeappTailwindcssRename({}));
}
// https://vitejs.dev/config/
export default defineConfig({
	plugins: vitePlugins,
	css: {
		postcss: {
			// 内联写法
			plugins: postcssPlugins,
		},
	},
});
