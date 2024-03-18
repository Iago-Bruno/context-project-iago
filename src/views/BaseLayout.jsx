import { UserProvider } from "./context/UserContext";
import Component1 from "./components/Component1";

export const BaseLayout = () => {
  return (
    <UserProvider>
      <Component1></Component1>
    </UserProvider>
  );
};
