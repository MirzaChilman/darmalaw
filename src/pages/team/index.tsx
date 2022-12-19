import { useRouter } from 'next/router';

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  }
  // More people...
];

export default function Team() {
  const { push } = useRouter();
  const handleClick = (url: string) => {
    console.log('url', url);
    push('/team/1');
  };

  return (
    <div className="mx-auto px-4 py-16 text-accent-secondary sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Team
        </h2>
        <p className="text-center text-xl text-accent-primary">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
        </p>
      </div>
      <div>
        <p className="mb-6 text-4xl font-bold">Partners</p>
      </div>
      <div className="row-gap-8 sm:row-gap-10 mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-3">
        {people.map((person) => {
          return (
            <div className="flex" key={person.linkedinUrl}>
              <img
                className="mr-4 h-20 w-20 rounded-full object-cover shadow"
                src={person.imageUrl}
                alt="Person"
              />
              <div className="flex flex-col justify-center">
                <p
                  className="text-lg font-bold hover:cursor-pointer"
                  onClick={() => handleClick(person.linkedinUrl)}
                >
                  {person.name}
                </p>
                <p
                  className="text-md text-gray-800 hover:cursor-pointer"
                  onClick={() => handleClick(person.linkedinUrl)}
                >
                  {person.role}
                </p>
                <p
                  className="text-md text-gray-800 hover:cursor-pointer"
                  onClick={() => handleClick(person.linkedinUrl)}
                >
                  {person.name}@gmail.com
                </p>
                <div className="mt-3 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="h-4 w-4"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="my-6 text-4xl font-bold">Associates</p>
      </div>
      <div className="row-gap-8 sm:row-gap-10 mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-3">
        {people.map((person) => {
          return (
            <div className="flex" key={person.linkedinUrl}>
              <img
                className="mr-4 h-20 w-20 rounded-full object-cover shadow"
                src={person.imageUrl}
                alt="Person"
              />
              <div className="flex flex-col justify-center">
                <p
                  className="text-lg font-bold hover:cursor-pointer"
                  onClick={() => handleClick(person.linkedinUrl)}
                >
                  {person.name}
                </p>
                <p
                  className="text-md text-gray-800 hover:cursor-pointer"
                  onClick={() => handleClick(person.linkedinUrl)}
                >
                  {person.role}
                </p>
                <p
                  className="text-md text-gray-800 hover:cursor-pointer"
                  onClick={() => handleClick(person.linkedinUrl)}
                >
                  {person.name}@gmail.com
                </p>
                <div className="mt-3 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="h-4 w-4"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
