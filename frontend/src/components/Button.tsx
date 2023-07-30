import cx from "classix";

interface Props {
  text: string;
  onClick?(): void;
  style: ButtonStyle;
}

export enum ButtonStyle {
  PRIMARY,
  SECONDARY,
  PERMANENT,
}

export const STYLE_MAPS: Record<ButtonStyle, string> = {
  [ButtonStyle.PRIMARY]: `
    bg-darkBlue-500
    text-white
  `,
  [ButtonStyle.SECONDARY]: `
    bg-white
    text-black
    border-gray-200
  `,
  [ButtonStyle.PERMANENT]: `
    bg-red-500
    text-white
    border-red-400
  `,
};

function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={cx(
        STYLE_MAPS[props.style],
        `px-2.5 py-1 rounded mr-2 last:mr-0 text font-medium shadow border-none hover:backdrop-brightness-200`
      )}
    >
      {props.text}
    </button>
  );
}

// Define default props
Button.defaultProps = {
  style: ButtonStyle.PRIMARY,
};

export default Button;
