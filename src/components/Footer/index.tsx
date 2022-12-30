const Footer = () => {
  return (
    <footer className=" mx-auto max-w-7xl bg-gray-100 px-7 text-center text-accent-secondary">
      <div className="container mx-auto flex flex-col justify-between py-5 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <img
            width={250}
            height={70}
            src="/assets/images/brand-logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-md py-6 text-left text-accent-secondary">
        Copyright © 2019-{new Date().getFullYear()} Name of Company All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
