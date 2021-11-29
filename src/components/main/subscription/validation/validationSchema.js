import * as Yup from "yup";

const email = Yup.string()
  .required("this is mandatory area")
  .min(10, "email must be at least 10 characters")
  .max(63, "email must contain no more than 63 characters")
  .matches(
    /^[\w*;!:"'#%^*+&?$§]{1}[\w\-*;!:"'#%^?*+&$§.]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    "Incorrect email"
  );

  export const loginValidationSchema = Yup.object({
    email,
  });