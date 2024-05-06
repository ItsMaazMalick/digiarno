import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TitleText } from "@/components/title/TitleText";
import { ContactUs } from "@/components/forms/contact-us-form";

export default function Component() {
  return (
    <section>
      <TitleText
        title="Contact Us"
        desc="Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible."
      />
      <ContactUs />
    </section>
  );
}
