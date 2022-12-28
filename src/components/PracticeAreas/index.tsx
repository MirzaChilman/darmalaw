import type { Clients } from '@/types/Clients';

const PracticeAreas = ({ items }: Omit<Clients, '__typename'>) => {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="container relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-accent-secondary sm:text-4xl">
            Our Practice Areas
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {items?.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={item.image.url}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-accent-secondary">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base text-accent-primary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
