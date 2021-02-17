import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Image() {
	return (
		<StaticImage src="../images/franchise_workshop.png" placeholder="blurred" />
	);
}

const PresentationImage = React.memo(Image);

export default PresentationImage;
