import { getCurrentUser } from "../../../actions/getCurrentUser";
import FormWrap from "../components/FormWrap";
import { Section } from "../components/Section";
import LoginForm from "./LoginForm";

export default async function Login() {
  const user = await getCurrentUser();

  return (
    <Section>
      <FormWrap>
        <LoginForm currentUser={user}/>
      </FormWrap>
    </Section>
  );
}
