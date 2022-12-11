import Link from 'next/link';
import { useRouter } from 'next/router';


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
  const router = useRouter();

  const handleContactUsClick = () => {
    router.push('/#contact-us');
  };

  return (
    <header className={`bg-gray-100 p-4 text-accent-secondary hidden lg:block`}>
      <div className="container mx-auto flex h-16 justify-between">
        <div className="flex">
          <ul className="hidden items-center  space-x-3 lg:flex">
            {Links.map((link) => {
              const isActive = router.pathname.includes(link.url);

              return (
                <li
                  className={`flex  items-center  border-b-2  border-transparent px-2 font-bold text-accent-secondary ${
                    isActive
                      ? 'border-b-2 border-accent-primary text-accent-primary'
                      : ''
                  }`}
                  key={link.title + link.url}
                >
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
          <button
            onClick={handleContactUsClick}
            className="rounded border-[2px] bg-accent-default px-8 py-3 font-semibold text-accent-primary "
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBottom;
