import { Directus } from "@directus/sdk";
const directus = new Directus(process.env.NEXT_PUBLIC_API_URL);
export default directus;
