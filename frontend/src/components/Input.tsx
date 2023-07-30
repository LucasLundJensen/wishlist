import cx from "classix";

interface Props {
  value: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?(value: string): void;
  variant: InputVariant;
  state: InputState;
}

export enum InputVariant {
  PRIMARY,
}

export enum InputState {
  NORMAL,
  ERROR,
  VALID,
}

const VARIANT_MAPS: Record<InputVariant, string> = {
  [InputVariant.PRIMARY]: `
    bg-sky-600
    text-white
    border-sky-400
  `,
};

const STATE_MAPS: Record<InputState, string> = {
  [InputState.NORMAL]: `
    placeholder-gray-400
    border-gray-300
    focus:ring-purple-600
    `,
  [InputState.ERROR]: `
    border-red-600
    focus:ring-red-600
    `,
  [InputState.VALID]: `
    border-green-600
    focus:ring-green-600
    `,
};

function Input(props: Props) {
  return (
    <input
      type="text"
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      disabled={props.disabled}
      onChange={(event) => props.onChange && props.onChange(event.target.value)}
      className={cx(
        VARIANT_MAPS[props.variant],
        STATE_MAPS[props.state],
        `flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent rounded-md`
      )}
    />
  );
}

// Define default props
Input.defaultProps = {
  value: "",
  state: InputState.NORMAL,
  variant: InputVariant.PRIMARY,
  disabled: false,
};

export default Input;
