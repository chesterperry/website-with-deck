import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Image({ src, alt }) {
	const { allImageSharp } = useStaticQuery(graphql`
		query {
			allImageSharp {
				edges {
					node {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid_withWebp_tracedSVG
              ...GatsbyImageSharpFluidLimitPresentationSize
							originalName
						}
					}
				}
			}
		}
	`);
	const image = allImageSharp.edges.find(
		(edge) => edge.node.fluid.originalName === src
	);
	if (!image) {
		return null;
	}
	return (
		<Img
			style={{ aspectRatio:"square" }}
			imgStyle={{ objectFit: "contain" }}
			fluid={image.node.fluid}
			alt={alt}
		/>
	);
}
