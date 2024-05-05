import FormWrap from "../components/FormWrap";
import { Section } from "../components/Section";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <Section>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Section>
  );
}
