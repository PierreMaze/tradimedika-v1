import { PiPlantFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="text-dark flex w-full flex-col items-center justify-center bg-neutral-100 py-8">
      {/* Logo */}
      <div className="mb-4">
        <PiPlantFill className="text-accent text-3xl lg:text-4xl" />
      </div>

      {/* Links */}
      <div className="mb-4 flex flex-col gap-2 text-center text-xs decoration-1 lg:flex-row lg:gap-6 lg:text-start">
        <a
          href="/mention-legales"
          rel="noopener noreferrer"
          className="hover:text-accent font-medium underline underline-offset-2 transition-colors duration-200 hover:font-semibold"
        >
          Mentions Légales
        </a>
        <a
          href="/privacy-policy"
          rel="noopener noreferrer"
          className="hover:text-accent font-medium underline underline-offset-2 transition-colors duration-200 hover:font-semibold"
        >
          Politique de Confidentialité
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-600">
        © 2026 - Tous droits réservés - Application Française 🟦​⬜​🟥​
      </p>
    </footer>
  );
};

export default Footer;
