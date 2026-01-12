import React from "react";

interface Props {
  id: string;
  label: string;
  type?: "text" | "email";
  errorLabel?: string;
  placeholder?: string;
  isRequired?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField(props: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="w-fit text-sm text-grey-200">
        {props.label} <span className="text-brand-red">*</span>
      </label>
      <input
        id={props.id}
        name={props.id}
        type={props.type ?? "text"}
        placeholder={props.placeholder ?? "พิมพ์ตรงนี้..."}
        value={props.value}
        onChange={props.onChange}
        className={`px-3 py-2 text-sm border ${
          props.errorLabel ? "border-brand-red" : "border-grey-50"
        } rounded-md placeholder:text-grey-100`}
      />
      {props.errorLabel && (
        <span className="text-sm text-brand-red">{props.errorLabel}</span>
      )}
    </div>
  );
}

export default TextField;
