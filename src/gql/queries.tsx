import { gql } from "@apollo/client";


const heroHeadlineSchema = gql`
    query {
        heroHeadlineCollection {
            items {
                title
                subtitle
            }
        }
    }
`;

const topbarSchema = gql`
    query {
        topBarCollection {
            items {
                className
                logo {
                    classname
                    title
                    href
                }
                navigationBarCollection {
                    items {
                        classname
                        title
                        url
                    }
                }
            }
        }
    }
`;


export {
    heroHeadlineSchema,
    topbarSchema
};