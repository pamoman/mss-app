/*
 * Graphql - Content
 */

import { gql } from '@apollo/client';
import { seo, blocks } from '@graphql/shared';

export const START = gql`
    query getStart {
        start {
            title
            ${seo}
            ${blocks}
        }
    }
`;

export const GUIDES = gql`
    query getGuides {
        guides {
            id
            slug
            title
            ${seo}
            categories {
                id
                name
                image {
                    url
                    caption
                    alternativeText
                }
            }
        }
    }
`;

export const GUIDE = gql`
    query getGuides($slug: String!) {
        guides(where: { slug: $slug }) {
            id
            slug
            title
            ${blocks}
        }
    }
`;