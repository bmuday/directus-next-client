import { devtools, persist } from "zustand/middleware";

let userStore = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
});

userStore = devtools(userStore);
userStore = persist(userStore, { name: "user" });

export default userStore;
