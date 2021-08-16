import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <a className="flex items-center space-x-2">
      <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">
        E-Commerce
      </span>
    </a>
  </Link>
);

export default Logo;
