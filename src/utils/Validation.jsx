import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  password: Yup.string().required("Password is required").trim(),
});
