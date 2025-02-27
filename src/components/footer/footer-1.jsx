import Link from "next/link";
import { motion } from "framer-motion";
import { navigationsTextAnim } from "./anim";
import { PerspectiveMenu } from "./perspectiveText";

const Footer1 = () => {
  const sitemap = [
    { title: "INÍCIO", href: "/" },
    { title: "SOBRE NÓS", href: "/about" },
    { title: "CONTATO", href: "/contact" },
    { title: "TRABALHOS", href: "/works" },
    { title: "BLOG", href: "/blog" },
  ];

  const socialLinks = [
    { title: "INSTAGRAM", href: "/" },
    { title: "LINKEDIN", href: "/about" },
    { title: "TWITTER(X)", href: "/contact" },
    { title: "YOUTUBE", href: "/works" },
  ];

  const contactInfo = [
    { title: "NIPLO@CONTACT.COM", href: "/" },
    { title: "(21) 2744-0142", href: "/about" },
    { title: "RIO DE JANEIRO, BRASIL", href: "/contact" },
  ];

  const moreContent = [{ title: "www.agencia-niplo.com", href: "/" }];

  return (
    <section className="w-full p-[2.5rem] max-laptop:p-[1rem] flex justify-between items-start max-tablet:grid max-tablet:grid-cols-2 max-tablet:gap-[2.5rem]">
      {[
        { title: "MAPA DO SITE:", links: sitemap },
        { title: "REDES SOCIAIS:", links: socialLinks },
        { title: "CONTATE A GENTE:", links: contactInfo },
        { title: "MAIS CONTEÚDOS EM:", links: moreContent },
      ].map((section, index) => (
        <div
          key={index}
          className="w-full font-general text-color text-[.8rem] tracking-[-.5px] font-[500] uppercase"
        >
          <p className="mb-[1rem] text-color2">{section.title}</p>
          <div className="w-full flex flex-col">
            {section.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="w-fit h-[20px] overflow-hidden cursor-pointer pointer-events-auto"
              >
                <motion.div
                  className="relative size-full"
                  variants={navigationsTextAnim}
                  whileHover="hover"
                >
                  <PerspectiveMenu label={link.title} />
                  <PerspectiveMenu label={link.title} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Footer1;
