import Link from "next/link";
import { useRouter } from "next/router";

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
    url: '/about-us',
    title: 'About Us',
  },
  {
    url: '/team',
    title: 'Team',
  },
  {
    url: '/client-alert',
    title: 'Client Alert',
  },
  {
    url: '/privacy',
    title: 'Privacy',
  },
];

const HeaderBottom = () => {
  const router = useRouter()
  return (
    <header className={`bg-gray-100 p-4 text-accent-secondary`}>
      <div className="container mx-auto flex h-16 justify-between">
        <div className="flex">
          <ul className="hidden items-center  space-x-3 lg:flex">
            {Links.map((link) => {
              const isActive = router.pathname.includes(link.url)

              return (
                <li className={`flex  font-bold  items-center  border-b-2 text-accent-secondary border-transparent px-2 ${
                  isActive ? 'border-accent-primary border-b-2 text-accent-primary' : ''
                }`} key={link.title + link.url}>
                  <Link
                    rel="noopener noreferrer"
                    href={link.url}
                    // eslint-disable-next-line tailwindcss/no-contradicting-classname

                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden shrink-0 items-center lg:flex">
          <button className="rounded border-[2px] bg-accent-default text-accent-primary px-8 py-3 font-semibold ">
            Contact Us
          </button>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default HeaderBottom;
