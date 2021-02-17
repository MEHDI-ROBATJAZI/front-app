import { Input } from "@chakra-ui/react";

export const renderField = ({
  type,
  input,
  placeholder,
  style,
  variant,
  meta: { touched, error, warning },
}) => {
  const errorStyles = {
    color: "red",
  };
  const warningStyles = {
    color: "yellow",
  };

  return (
    <div className="box">
      <br />

      <Input
        {...input}
        placeholder={placeholder}
        variant={variant}
        type={type}
        style={style}
      />

      {touched &&
        ((error && <span style={errorStyles}>{error}</span>) ||
          (warning && <span style={warningStyles}>{warning}</span>))}
    </div>
  );
};
