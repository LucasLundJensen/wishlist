import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "oidc-client-ts";
import manager from "../core/UserManager";
import Button, { ButtonStyle } from "../components/Button";
import Input, { InputState, InputVariant } from "../components/Input";

function Authenticated() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const u = await manager.getUser();
      if (u === null) return navigate("/");
      return navigate("/dashboard");
    })();
  }, [navigate]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

export default Authenticated;
