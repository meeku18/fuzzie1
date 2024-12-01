import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/global/container-scrool-animation";
import { HeroParallax } from "@/components/ui/global/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/global/infinte-card";
import { LampDemo } from "@/components/ui/global/lamp";
import Navbar from "@/components/ui/global/navbar";
import { clients, pricingCards, products } from "@/lib/constants";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="relative w-full h-screen">
        <div className="absolute w-full h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <ContainerScroll
          titleComponent={
            <div className="flex items-center flex-col">
              {/* copied this line of code for button */}
              <Button
                size={"lg"}
                className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                  Start For Free Today
                </span>
              </Button>
              <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                Automate Your Work With Fuzzie
              </h1>
            </div>
          }
        >
          <Image
            src={`/temp-banner.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>
      {/* clients */}
      <section>
        <InfiniteMovingCards
          items={clients}
          className="mt-[7rem] md:mt-[26rem] "
        />
      </section>
      <section className="mt-[150px]">
        <HeroParallax products={products} />
      </section>
      <section>
        <LampDemo />
          <div className="relative flex flex-cols gap-14 justify-center mt-[-300px] z-[100] my-12 flex-wrap">
          {pricingCards.map((card) => (
            <Card className={clsx("h-[300px] w-[300px] flex flex-col justify-between",{
              "bg-neutral-600":card.title==="Unlimited Saas"
            })}>
              <CardHeader>
                <CardTitle className={clsx("",{
                  "font-semibold":card.title==="Unlimited Saas"
                })}>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span>{card.price}</span>
                <span>/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 justify-between h-max">
                <div className="">
                  {card.features.map((f) => (
                    <div className="flex gap-2 items-center">
                      <Check className="text-muted-foreground"></Check>
                      <div>{f}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={`${card.priceId}`}
                  className={clsx(
                    "w-full rounded-lg p-2 text-center ",
                    {
                      "bg-muted-foreground": card.title !== "Unlimited Saas",
                      "bg-neutral-900":card.title==="Unlimited Saas"
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
