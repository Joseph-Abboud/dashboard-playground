import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: "j.abboud1@hotmail.com",
          password: "123456",
        },
      }}
    />
  );
};
