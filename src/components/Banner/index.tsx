interface Props {
  name: string;
  image: string;
}

const Banner = ({ image, name }: Props) => {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="container relative mx-auto justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:flex lg:h-2/3 lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-2xl font-extrabold sm:text-3xl">{name}</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
