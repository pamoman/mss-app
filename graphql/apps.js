/*
 * Graphql - Apps
 */

import { gql } from '@apollo/client';

export const APPS = gql`
    query Apps($limit: Int, $start: Int) {
        apps(limit: $limit, start: $start) {
            id
            title
            bundle_id
            category {
                name
            }
            appstore_url
            description
            icon
            free
            price
            genres {
                id
                name
            }
        }
    }
`;