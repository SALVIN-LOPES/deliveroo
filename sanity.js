// connecting sanity backend with the react native front end
// "cmd run command" : sanity deploy
// "sanity data online" : https://deliveroosalvin.sanity.studio/

import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
  projectId: "rsbovewr",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source); // return a url of image uploaded to sanity

export default client;
