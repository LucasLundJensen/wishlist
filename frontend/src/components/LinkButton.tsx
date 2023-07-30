import cx from "classix";
import { ButtonStyle, STYLE_MAPS } from "./Button";

interface Props {
  text: string;
  href: string;
  style: ButtonStyle;
}

function LinkButton(props: Props) {
  return (
    <a
      href={props.href}
      className={cx(
        STYLE_MAPS[props.style],
        `px-4 py-1.5 rounded-md mr-2 last:mr-0 shadow border hover:backdrop-brightness-200 cursor-pointer`
      )}
    >
      {props.text}
    </a>
  );
}

// Define default props
LinkButton.defaultProps = {
  style: ButtonStyle.PRIMARY,
};

export default LinkButton;
