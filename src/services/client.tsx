import { useEffect, useState } from "react";

const useContentful = (querySchema: string) => {
    const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE}/environments/master`;
    const [data, setData] = useState(null);
    let headersList = {
        "Authorization": `Bearer ${process.env.CF_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
        query: querySchema
    });


    useEffect(() => {
        const getData = async () => {
            let res = await fetch(contentfulUrl, {
                method: "POST",
                headers: headersList,
                body: bodyContent
            });

            const json = await res.json();

            setData(json.data);
        }

        getData();
    }, [querySchema]);

    return data;
}


export default useContentful;