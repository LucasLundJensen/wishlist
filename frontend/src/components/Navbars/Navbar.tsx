import manager from "../../core/UserManager";
import Button from "../Button";
import Logo from "../Logo";
import Divider from "../Divider";

function Navbar() {
  return (
    <div className="flex flex-col w-full h-12 px-3 text-white">
      <div className="flex items-center w-full h-full">
        <Logo />
        <div className="flex ml-auto items-center">
          <>
            <Button onClick={() => manager.signinRedirect()} text="Login" />
            <Button
              onClick={() => manager.signinRedirect({ prompt: "create" })}
              text="Sign up"
            />
          </>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Navbar;
