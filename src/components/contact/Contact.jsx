import ContactButton from "./ContactButton";

function Contact() {
  return (
    <section id="contact-tab" className="h-[100vh] w-full relative flex items-center justify-center -left-4">
      <div className="w-[50%] flex items-center justify-around h-28">
        <ContactButton iconName="phone" hrefText="phone:+989153773822" />
        <ContactButton iconName="message" hrefText="sms:+989153773822" />
        <ContactButton iconName="telegram" hrefText="https://t.me/afkhami_taha" />
      </div>
    </section>
  );
}
export default Contact;
