import { gql } from "@apollo/client";


const topbarSchema = gql`
    query {
        topBarCollection {
            items {
                name
                logo {
                    title
                }
            }
        }
    }
`;


const projectListSchema = gql`
    query {
        topBarCollection {
            items {
                name
                logo {
                    title
                }
            }
        }
    }
`;

export default {
    topbarSchema,
    projectListSchema
};