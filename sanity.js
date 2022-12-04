// connecting sanity backend with the react native front end
import SanityClient from "@sanity/client";
import ImageUrlBuilderOptionsWithAliases from "@sanity/image-url";

const client = SanityClient({
  projectId: "rsbovewr",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageBuilder(client);
export const urlFor = (source) => builder.image(source); // return a url of image uploaded to sanity

export default client;
