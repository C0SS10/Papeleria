import FormWrap from "@/app/components/FormWrap"
import { Section } from "@/app/components/Section"
import RegisterForm from "./RegisterForm"

export default function Register(){ 
  return(
    <Section>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Section>
  )
}