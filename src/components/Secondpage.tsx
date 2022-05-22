import React, { Dispatch, SetStateAction } from "react";
import { Field, FormikProps } from "formik";
import { MyFormValues } from "./User";

interface SecondpageProps {
  setfirst: Dispatch<SetStateAction<string>>;
  first: string;
  formikProps: FormikProps<MyFormValues>;
}
export default function Secondpage(props: SecondpageProps) {
  return (
    <>
      <h2>{props.formikProps.values.firstName}</h2>
      <h2>{props.formikProps.values.lastName}</h2>
      <label htmlFor="mobile">Mobile</label>
      <Field id="mobile" name="mobile" />
      <label htmlFor="email">Email</label>
      <Field id="email" name="email" />
      <button
        onClick={() => {
          props.setfirst("thirdpage");
        }}
      >
        Next
      </button>
    </>
  );
}
