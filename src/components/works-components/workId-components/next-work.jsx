import { useRouter } from "next/router";
import worksData from "@/data/worksData";
import Image from "next/image";
import Link from "next/link";

const NextWork = () => {
  const router = useRouter();
  const { workId } = router.query;

  const filteredWorks = worksData.filter(
    (work) => work.id !== parseInt(workId)
  );

  if (filteredWorks.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * filteredWorks.length);
  const work = filteredWorks[randomIndex];

  const renderMedia = () => {
    if (work.type === "video") {
      return (
        <video
          className="w-full h-[400px] rounded-[.5rem] object-cover brightness-[85%] max-tablet:h-[250px]"
          src={work.src}
          alt={name}
          width={800}
          height={900}
          loop
          muted
          autoPlay
        />
      );
    }
    return (
      <Image
        className="w-full h-[400px] rounded-[.5rem] object-cover brightness-[85%] max-tablet:h-[250px]"
        src={work.src}
        alt={name}
        width={800}
        height={900}
        priority={false}
      />
    );
  };
  return (
    <section className="py-[100px] max-tablet:py-[50px]">
      <div className="relative">
        <div className="size-full flex items-center justify-center">
          {renderMedia()}
          <div className="absolute">
            <Link href={`/works/${work.id}`} className="size-full group">
              <h1
                className="w-full text-[5vw] text-color3 text-center font-[400] leading-[1] 
               max-laptop:text-[2rem] max-laptop:text-start max-laptop:font-[500] max-laptop:flex max-laptop:items-center"
              >
                PRÓXIMO TRABALHO
              </h1>
              <h2
                className="text-color3 font-general text-[1rem] font-[500] tracking-[-.5px] uppercase
              max-tablet:text-[.8rem] max-tablet:font-[500] max-tablet:tracking-[-.2px] 
              group-hover:underline"
              >
                {work.name}
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextWork;
