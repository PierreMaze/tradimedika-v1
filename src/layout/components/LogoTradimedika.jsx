import { PiPlantFill } from "react-icons/pi";

const LogoTradimedika = () => {
  return (
    <>
      <a
        href="/"
        alt="Logo Tradimedika"
        title="Logo Tradimedika"
        aria-label="Logo Tradimedika"
        className="flex items-center gap-2"
      >
        <span>
          <PiPlantFill className="text-accent text-3xl lg:text-4xl" />
        </span>
        <span className="text-2xl font-black tracking-wide lg:text-3xl">
          TRADIMEDIKA
        </span>
      </a>
    </>
  );
};
export default LogoTradimedika;
