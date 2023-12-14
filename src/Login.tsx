import InputText from "./components/InputText";
import Button from "./components/Button";

const Login = () => {
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <InputText inputName="First name" placeholder="John" />
        <InputText inputName="Last name" placeholder="Doe" />
        <InputText inputName="Password" placeholder="" inputType="password" />
        <Button />
      </div>
    </form>
  );
};

export default Login;
