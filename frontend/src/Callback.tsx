import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import manager from "./core/UserManager";

function Callback() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    manager
      .signinRedirectCallback()
      .then((u) => {
        setAuthenticated(true);
      })
      .catch((err) => {
        console.error("err", err);
        setAuthenticated(false);
      });
  }, []);

  useEffect(() => {
    if (authenticated === null) return;
    console.log("authenticated", authenticated);

    if (authenticated) {
      navigate("/events");
    } else if (!authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  return <></>;
}

export default Callback;
