const HamburgerMenu = () => {
  return (
    <button className="p-4 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 text-gray-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  );
};

const HeaderTop = () => {
  return (
    <header className="bg-gray-100 p-4 text-accent-secondary">
      <div className="container mx-auto flex h-16 justify-between">
        <div className="flex items-center">
          <img
            width={250}
            height={70}
            src="/assets/images/brand-logo.png"
            alt="Darmalaw Logo"
          />
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default HeaderTop;
