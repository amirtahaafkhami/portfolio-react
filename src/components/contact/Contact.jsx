import ContactButton from "./ContactButton";

function Contact() {
  return (
    <section id="contact-tab" className="h-[100vh] w-full relative flex items-center justify-center md:-left-4">
      <div className="md:w-[50%] flex md:flex-row flex-col items-center justify-around md:h-28 h-[50%]">
        <ContactButton iconName="phone" hrefText="phone:+989153773822" />
        <ContactButton iconName="message" hrefText="sms:+989153773822" />
        <ContactButton iconName="telegram" hrefText="https://t.me/afkhami_taha" />
      </div>
    </section>
  );
}
export default Contact;
