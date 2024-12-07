import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="grid grid-cols-2 w-full h-full">
      <div className="col-start-2 flex flex-col gap-6 justify-center">
        Feel free to contact me via:
        <ul>
          <li>
            Email: <Link href={"/"}>anyaa.segeda@gmail.com</Link>
          </li>
          <li>
            Telegram: <Link href={"/"}>@anna_sehedaa</Link>
          </li>
          <li>
            Instagram:{" "}
            <ul className="inline-flex flex-col">
              <li>
                <Link href={"/"}>@seheda_anya</Link>
              </li>
              <li>
                <Link href={"/"}>@sehedanna</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ContactSection;
