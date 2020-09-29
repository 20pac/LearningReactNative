import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

export default function AppFormField({ name, width, ...ohterProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...ohterProps}
        width={width}
      />
      {<ErrorMessage visible={touched[name]} error={errors[name]} />}
    </>
  );
}
