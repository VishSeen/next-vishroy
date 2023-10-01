import { gql } from "@apollo/client";


const heroHeadlineSchema = `
    query {
        heroHeadlineCollection {
            items {
                title
                subtitle
            }
        }
    }
`;

const topbarSchema = `
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


const projectListSchema = `
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

export {
    heroHeadlineSchema,
    topbarSchema,
    projectListSchema
};