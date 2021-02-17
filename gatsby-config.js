const IS_LOCAL = process.cwd() === __dirname;

const remarkPlugins = [
	require("remark-unwrap-images"),
	require("remark-emoji"),
];
const gatsbyRemarkPlugins = [`gatsby-remark-import-code`];

const config = (opts = {}) => {
	const { mdx = true, contentPath: name = "decks" } = opts;

	return {
		plugins: [
			{
				resolve: "gatsby-source-filesystem",
				options: {
					name: `images`,
					path: `${__dirname}/src/images/`,
				},
			},
			{
				resolve: "gatsby-source-filesystem",
				options: {
					name,
					path: `decks`,
				},
			},
			mdx && {
				resolve: "gatsby-plugin-mdx",
				options: {
					gatsbyRemarkPlugins,
					remarkPlugins,
				},
			},
			"gatsby-plugin-react-helmet",
			"gatsby-plugin-emotion",
			"gatsby-plugin-catch-links",
			"gatsby-plugin-theme-ui",
            {
                resolve: `gatsby-transformer-remark`,
                options: {
                  // In your gatsby-transformer-remark plugin array
                  plugins: [{
                    resolve: 'gatsby-remark-emojis',
                    options: {
                      // Deactivate the plugin globally (default: true)
                      active : true,
                      // Add a custom css class
                      class  : 'emoji-icon',
                      // In order to avoid pattern mismatch you can specify
                      // an escape character which will be prepended to the
                      // actual pattern (e.g. `#:poop:`).
                      escapeCharacter : '#', // (default: '')
                      // Select the size (available size: 16, 24, 32, 64)
                      size   : 64,
                      // Add custom styles
                      styles : {
                        display      : 'inline',
                        margin       : '0',
                        'margin-top' : '1px',
                        position     : 'relative',
                        top          : '5px',
                        width        : '25px'
                      }
                    }
                  }]
                }
              },
			// {
			// 	resolve: `gatsby-plugin-google-fonts`,
			// 	options: {
			// 		fonts: [
			// 			`IBM Plex Sans`,
			// 			`IBM Plex Serif`, // you can also specify font weights and styles
			// 		],
			// 		display: "swap",
			// 	},
			// },
			{
				resolve: "gatsby-plugin-compile-es6-packages",
				options: {
					modules: ["@mdx-deck/themes"],
				},
			},

			`gatsby-transformer-sharp`,
			`gatsby-plugin-sharp`,
			`gatsby-remark-images`,
            `gatsby-plugin-image`,
			{
				resolve: `gatsby-plugin-mdx`,
				root: __dirname,
				options: {
					gatsbyRemarkPlugins: [
						{
							resolve: `gatsby-remark-images`,
							options: {
								maxWidth: 1035,
								linkImagesToOriginal: false,
							},
						},
					],
				},
			},
		].filter(Boolean),
	};
};

module.exports = IS_LOCAL ? config() : config;
