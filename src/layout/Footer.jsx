import LogoTradimedika from "./components/LogoTradimedika";

const Footer = () => {
  return (
    <footer className="text-dark border- flex w-full flex-col items-center justify-center border-t-2 border-dashed border-black/10 py-2 lg:w-2/3 lg:py-4">
      {/* Logo */}
      <div className="mb-4">
        <LogoTradimedika />
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
