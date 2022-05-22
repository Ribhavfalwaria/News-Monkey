import React, { Dispatch, SetStateAction } from "react";
import { Field } from "formik";
import { MyFormValues } from "./User";

interface SecondpageProps {
  setfirst: Dispatch<SetStateAction<string>>;
  first: string;
}
export default function Firstpage(props: SecondpageProps) {
  return (
    <>
      {/* <h2>{props.values.firstName}</h2>
      <h2>{props.values.lastName}</h2> */}
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="First Name" />
      &nbsp;
      <label htmlFor="lastName">First Name</label>
      <Field id="lastName" name="lastName" placeholder="Last Name" />
      &nbsp;
      <button
        onClick={() => {
          props.setfirst("secondpage");
          console.log(props.first);
          // console.log(props.values.firstName);
        }}
      >
        Next
      </button>
    </>
  );
}
