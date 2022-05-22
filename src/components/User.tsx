import React, { useState } from "react";
// import { useFormik,Formik,Form } from "formik";
import { Formik, Form, FormikProps } from "formik";
import Secondpage from "./Secondpage";
import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";

export interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
}

const initialValues: MyFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: "",
};

// interface jkl<T> {
//   sayo: T;
// }

// type myType=jkl<number>
// type myType2=jkl<string>
// const obj:myType={
//   sayo:54
// }
// const obj2:myType2={
//   sayo:'dasdfsa'
// }

export default function User() {
  const [first, setfirst] = useState<string>("");

  function registerform(first: string, formikProps: FormikProps<MyFormValues>) {
    if (first === "secondpage") {
      return (
        <Secondpage
          setfirst={setfirst}
          first={first}
          formikProps={formikProps}
        />
      );
    } else if (first === "thirdpage") {
      return <Thirdpage values={initialValues} />;
    } else {
      return <Firstpage setfirst={setfirst} first={first} />;
    }
  }

  return (
    <div>
      <h1>User Registeration Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, e) => {
          console.log({ values });
          alert(JSON.stringify(values));
          e.setSubmitting(false);
          setfirst("");
        }}
      >
        {(formikProps) => <Form>{registerform(first, formikProps)}</Form>}
      </Formik>
    </div>
  );
}
