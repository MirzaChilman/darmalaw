import type { HomePage } from '@/types/HomePage';

const Hero = ({
  description,
  heroImage,
  heroSubTitle,
  heroTitle,
}: Pick<
  HomePage,
  'description' | 'heroTitle' | 'heroSubTitle' | 'heroImage'
>) => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroImage.url})`,
      }}
      className="relative bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {heroTitle}
            <strong className="block font-extrabold text-accent-alternate">
              {heroSubTitle}
            </strong>
          </h1>

          {description && (
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
