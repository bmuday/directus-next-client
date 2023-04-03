import directus from "@/directus";

export default async function useLogin({ email, password }) {
  try {
    const userData = await directus.auth.login({ email, password });
    return { userData };
  } catch (error) {
    return { error };
  }
}
