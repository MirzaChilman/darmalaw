import Link from 'next/link';
import { useRouter } from 'next/router';

const Links = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: '/team',
    title: 'Team'
  },
  {
    url: '/about-us',
    title: 'About Us'
  },
  {
    url: '/#contact-us',
    title: 'Contact'
  }
];

const HeaderBottom = () => {
  const router = useRouter();

  const handleContactUsClick = () => {
    router.push('/#contact-us');
  };

  return (
    <header className={`hidden bg-gray-100 p-4 text-accent-secondary lg:block`}>
      <div className="container mx-auto flex h-16 justify-between">
        <div className="flex">
          <ul className="hidden items-center  space-x-3 lg:flex">
            {Links.map((link) => {
              // const isActive = router.asPath.includes(link.title.toLowerCase());

              return (
                <li
                  className={`flex  items-center  border-b-2  border-transparent px-2 font-bold text-accent-secondary `}
                  key={link.title + link.url}
                >
                  <Link
                    rel="noopener noreferrer"
                    href={link.url}
                    as={link.title === 'Home' ? 'home' : link.url}
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
