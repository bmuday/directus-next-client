import directus from "@/directus";

export default async function useFetchItems(items) {
  try {
    const res = await directus.items(items).readByQuery();
    const { data } = res;
    return { data };
  } catch (error) {
    return { error };
  }
}
