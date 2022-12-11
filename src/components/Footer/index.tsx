const Footer = () => {
  const iconColor = '#BF9742';
  return (
    <footer className="divide-y bg-gray-100 px-4 text-accent-secondary">
      <div className="container mx-auto flex flex-col justify-between py-5 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <img width={250} height={70} src="/assets/images/brand-logo.png" alt="" />
        </div>

      </div>
      <div className="lg:w-2/5 py-6 text-md text-accent-secondary">
        Copyright © 2019-2022 Name of Company All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
