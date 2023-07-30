import { User } from "oidc-client-ts";
import { createContext } from "react";

type InitialValue = User | undefined;

const UserContext = createContext(undefined as InitialValue);

export default UserContext;
