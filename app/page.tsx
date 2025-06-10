import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <div className="join m-2 fixed top-0 z-50">
            <button className="btn btn-ghost join-item backdrop-blur-2xl">Home</button>
            <button className="btn btn-ghost join-item backdrop-blur-2xl">Newsletter</button>
        </div>
      </div>
      <HeroImage />
      <div className="h-[100vh]"></div>
    </div>
  );
}
