import { QueryProvider } from "./ReactQueryProvider";

const AppProvider = ({ children }: any) => (
  <QueryProvider>{children}</QueryProvider>
);

export { AppProvider };
