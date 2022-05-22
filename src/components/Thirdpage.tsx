import { Field } from "formik";
import { MyFormValues } from "./User";

interface ThirdpageProps {
  values: MyFormValues;
}

export default function Thirdpage(props: ThirdpageProps) {
  return (
    <>
      <h2>{props.values.firstName}</h2>
      <h2>{props.values.lastName}</h2>
      <h2>{props.values.mobile}</h2>
      <h2>{props.values.email}</h2>
      <h2>{props.values.address}</h2>
      <label htmlFor="address">Address Name</label>
      <Field id="address" name="address" placeholder="Address" />
      <button type="submit">Submit</button>
    </>
  );
}
