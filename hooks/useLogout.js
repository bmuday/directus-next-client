import directus from "@/directus";

export default async function useLogout() {
  try {
    await directus.auth.logout();
  } catch (error) {
    return error;
  }
}
