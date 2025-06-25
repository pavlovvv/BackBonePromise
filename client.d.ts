declare module "*.svg" {
	import React = require("react");
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/thumbs";
declare module "swiper/css/free-mode";
