import Link from 'next/link';

const Blogs = [
  {
    date: ' 13 Jul 2020',
    title: 'Diving to the deep',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
    image:
      'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
    url: '/',
  },
  {
    date: '4 NOV 2020',
    title: 'Conquer the World',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
    image:
      'https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
    url: '/',
  },
  {
    date: '28 DEC 2020',
    title: 'Explore the beautiful',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
    image:
      'https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    url: '/',
  },
];

const ClientAlert = () => {
  return (
    <section className="mx-auto px-4 py-16  sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="grid gap-5 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
        {Blogs.map((blog) => {
          return (
            <div
              key={blog.title + blog.description}
              className="overflow-hidden rounded bg-white transition-shadow duration-300"
            >
              <a href={blog.url} aria-label="Article">
                <img
                  src={blog.image}
                  className="h-64 w-full rounded object-cover"
                  alt=""
                />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold uppercase text-accent-tertiary">
                  {blog.date}
                </p>
                <div className="mb-3 inline-block text-accent-secondary transition-colors duration-200 hover:text-accent-secondary">
                  <Link href="/" aria-label="Article">
                    <p className="text-2xl font-bold leading-5">{blog.title}</p>
                  </Link>
                </div>
                <p className="mb-4 text-accent-primary">{blog.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientAlert;
