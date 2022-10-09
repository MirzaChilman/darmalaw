const ContactForm = () => {
  return (
    <section id="contact-us" className="bg-gray-100 p-10 text-accent-secondary">
      <h2 className="p-20 text-center text-4xl font-bold">Contact Us</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 h-5 w-5 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 h-5 w-5 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 h-5 w-5 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form className="ng-untouched ng-pristine ng-valid flex flex-col space-y-6 py-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md p-3 shadow-sm  focus:border-violet-400 focus:opacity-75"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md p-3 shadow-sm  focus:border-violet-400 focus:opacity-75"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows={3}
              className="block w-full rounded-md p-3 shadow-sm  focus:border-violet-400 focus:opacity-75"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-center rounded  bg-accent-default px-8 py-2 text-lg text-accent-primary shadow hover:bg-accent-secondary"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
