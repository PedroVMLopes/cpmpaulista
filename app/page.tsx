import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-outfit">
      <div className="w-full p-2 fixed top-0 z-50">
        <div className="rounded-2xl flex flex-row justify-between items-center">
          <div className="join rounded-2xl backdrop-blur-lg shadow-md bg-primary-content/30">
              <button className="btn btn-ghost join-item">Home</button>
              <button className="btn btn-ghost join-item">Newsletter</button>
          </div>
          <p className="md:mx-4 font-semibold">CPM Paulista</p>
        </div>
      </div>
      <HeroImage />
      <div className="h-[100vh]"></div>
    </div>
  );
}
