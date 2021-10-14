/*
 * Graphql - Blocks
 */

export const seo = `
    seo {
        id
        title
        description
        url
        image {
            url
        }
    }
`;

export const blocks = `
    blocks {
        ... on ComponentBlockWysiwyg {
            __typename
            id
            content
        }
        ... on ComponentBlockImage {
            __typename
            id
            image {
                url
                caption
                alternativeText
            }
        }
        ... on ComponentBlockSlideshow {
            __typename
            id
            images {
                url
                caption
                alternativeText
            }
            settings {
                autoplay
                interval
                arrows
                dots
            }
        }

        ... on ComponentBlockVideo {
            __typename
            id
            video {
                url
                caption
                alternativeText
            }
            settings {
                autoplay
                muted
                controls
            }
        }

        ... on ComponentBlockStream {
            __typename
            id
            url
            caption
            settings {
                autoplay
                muted
                controls
            }
        }

        ... on ComponentBlockPdf {
            __typename
            id
            file {
                url
                caption
                alternativeText
            }
        }
    }
`;