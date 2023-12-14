import Link from "next/link";
import logo from "../img/logo_sobra.png";

const Navbar = () => {
  return (
    <nav className="bg-primaryHomePage py-8 px-20 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">
          <img src={logo.src} alt="Logo" className="w-36" />
        </div>
      </div>
      <div className="flex space-x-8">
        <Link href="/">Home</Link>
        <Link href="/condos">Condominios</Link>
        <Link href="/sistema/inicio">Sistema</Link>
      </div>
    </nav>
  );
};

export default Navbar;
