import { createContext } from "react";

interface globalType {
  globalPrefix?: string;
}
const global: globalType = {
  globalPrefix: "bobi-ui"
};
export const ProviderConfig = createContext({
  globalPrefix: global.globalPrefix
});
