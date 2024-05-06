import FormWrap from "@/app/components/FormWrap"
import { Section } from "@/app/components/Section"
import RegisterForm from "./RegisterForm"
import { getCurrentUser } from "../../../actions/getCurrentUser";

export default async function Register(){
  const user = await getCurrentUser();
  return(
    <Section>
      <FormWrap>
        <RegisterForm currentUser={user}/>
      </FormWrap>
    </Section>
  )
}