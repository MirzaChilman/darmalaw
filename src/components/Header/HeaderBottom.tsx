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
const Links = [
  {
    url: '/',
    title: 'About Us',
    isActive: false,
  },
  {
    url: '/',
    title: 'Team',
    isActive: false,
  },
  {
    url: '/',
    title: 'Client Alert',
    isActive: false,
  },
  {
    url: '/',
    title: 'Privacy',
    isActive: true,
  },
];

const HeaderBottom = () => {
  return (
    <header className="bg-gray-100 p-4 text-gray-800">
      <div className="container mx-auto flex h-16 justify-between">
        <div className="flex">
          <ul className="hidden items-stretch space-x-3 lg:flex">
            {Links.map((link) => {
              return (
                <li className="flex" key={link.title + link.url}>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    // eslint-disable-next-line tailwindcss/no-contradicting-classname
                    className={`-mb-1 flex items-center border-b-2 border-transparent px-2 ${
                      link.isActive && 'border-violet-400 text-violet-400'
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden shrink-0 items-center lg:flex">
          <button className="rounded border-[2px] border-gray-800 bg-gray-100 px-8 py-3 font-semibold text-gray-900">
            Contact Us
          </button>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default HeaderBottom;
