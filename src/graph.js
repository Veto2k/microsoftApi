import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */
export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const headerPost = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    headerPost.append("Authorization", bearer);
    headerPost.append("Content-Type", "application/json");

    const listItem = {
        fields: {
          Title: '5',
          Name: 'red',
          DOB: '2024-05-29',
          PhoneNo: '4565732'
        }
      };

    const postOptions = {
        method: "POST",
        headers: headerPost ,
        body : JSON.stringify(listItem)
    };

    const options = {
        method: "GET",
        headers: headers
    };

    const result = await fetch(graphConfig.graphMeEndpoint, options)
    result.json().then(json => console.log(json)).catch(error => console.log(error))

     await fetch(graphConfig.graphMeEndpointPost, postOptions ).then(response => console.log("response",response)).catch(e => console.log("e",e))


    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}