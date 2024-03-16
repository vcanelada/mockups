import { Form } from "../Form/Form"
import "./Subscription.scss"

const formFields = [
  { name: "email", label: "Email", placeholder: "Tu Email aquí" },
];

export const Subscription = () => {
  return (
    <section className="subscription">
      <div className="subscription__wrapper content-wrapper content-wrapper--narrow">
        <div className="subscription__title">
          Suscríbete a nuestra Newsletter
        </div>
        <Form fields={formFields} location="subscription"  />
      </div>
    </section>
  )
}
