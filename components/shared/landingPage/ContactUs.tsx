import { ContactForm } from "@/components/forms";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="flex-center mb-20 w-full max-w-7xl flex-col gap-16 p-20 pt-36">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">
          Let's Talk About your business goals
        </h1>
        <p className="text-lg w-4/6 text-center">
          Reach out to us for tailored marketing solutions, partnerships, or
          inquiries. We’re here to help!
        </p>
      </div>

      <div className="flex w-full justify-between items-start gap-40">
        <Image
          src="/images/contact-form-img.png"
          alt="contact form"
          width={1024}
          height={1024}
          className="object-contain h-[550px] border w-min"
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
