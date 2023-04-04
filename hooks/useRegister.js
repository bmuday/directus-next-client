import directus from "@/directus";

export default async function useRegister({ email, password }) {
  try {
    // create customer user
    await directus.users.createOne({
      email,
      password,
      role: "14a4f1d8-91ec-43b4-8a05-0e770d4a6a0a", // customer role id
      status: "active",
      provider: "default", // default provider with credentials
    });

    const userData = await directus.auth.login({ email, password });
    return { userData };
  } catch (error) {
    return { error };
  }
}
