import { ChangeEvent, FunctionComponent } from "react";

const MathInput: FunctionComponent<{
  value?: number;
  onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChangeCallback }) => {
  return (
    <input
      ref={(node) => node && console.log(node.namespaceURI)}
      style={{ display: "inline-block", minWidth: "2rem", height: "1rem" }}
      value={Number.isNaN(value) ? "" : value?.toString()}
      onChange={onChangeCallback}
      type="number"
    />
  );
};

export default MathInput;
