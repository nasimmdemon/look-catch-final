import Business from "@/Components/Business";
import EveryStep from "@/Components/EveryStep";
import Hero from "@/Components/Hero";
import Privacy from "@/Components/Privacy";
import ScrollDown from "@/Components/ScrollDown";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Hero />
      <ScrollDown />
      <Business />
      <Privacy />
      <EveryStep />
    </>
  );
}
