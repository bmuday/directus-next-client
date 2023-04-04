import { create } from "zustand";

import userStore from "./user";
import logoutStore from "./logout";
import settingsStore from "./settings";

export const useUserStore = create(userStore);
export const useLogoutStore = create(logoutStore);
export const useSettingsStore = create(settingsStore);
