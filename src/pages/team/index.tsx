import { gql } from '@apollo/client';
import { addApolloState, initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { DEFAULT_REVALIDATE } from '@/constant';

interface Props {
  teamCollection: {
    __typename: string;
    items: {
      __typename: string;
      slug: string;
      name: string;
      linkedin: string;
      email: string;
      title: string;
      type: string;
      profilePicture: {
        __typename: string;
        url: string;
      };
    }[];
  };
  teamPageCollection: {
    __typename: string;
    items: {
      title: string;
      subTitle: string;
    }[];
  };
}

export default function Team(props: Props) {
  const { push } = useRouter();
  const handleClick = (url: string) => {
    push(`/team/${url}`);
  };

  const partnersPeople = useMemo(() => {
    return props.teamCollection.items.filter(
      (item) => item.type === 'Partners'
    );
  }, []);

  const associatesPeople = useMemo(() => {
    return props.teamCollection.items.filter(
      (item) => item.type === 'Associates'
    );
  }, []);

  return (
    <div className="mx-auto px-4 py-16 text-accent-secondary sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {props.teamPageCollection.items[0]?.title}
        </h2>
        <p className="text-center text-xl text-accent-primary">
          {props.teamPageCollection.items[0]?.subTitle}
        </p>
      </div>
      {partnersPeople.length > 0 && (
        <>
          <div>
            <p className="mb-6 text-4xl font-bold">Partners</p>
          </div>
          <div className="row-gap-8 sm:row-gap-10 mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-3">
            {partnersPeople.map((person) => {
              return (
                <div className="flex" key={person.linkedin}>
                  <img
                    className="mr-4 h-20 w-20 rounded-full object-cover shadow"
                    src={person.profilePicture.url}
                    alt="Person"
                    onClick={() => handleClick(person.slug)}
                  />
                  <div className="flex flex-col justify-center">
                    <p
                      className="text-lg font-bold hover:cursor-pointer"
                      onClick={() => handleClick(person.slug)}
                    >
                      {person.name}
                    </p>
                    <p
                      className="text-md text-gray-800 hover:cursor-pointer"
                      onClick={() => handleClick(person.slug)}
                    >
                      {person.title}
                    </p>
                    <p
                      className="text-md text-gray-800 hover:cursor-pointer"
                      onClick={() => handleClick(person.slug)}
                    >
                      {person.email}
                    </p>
                    <a
                      className="mt-3 hover:cursor-pointer"
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="h-4 w-4"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {associatesPeople.length > 0 && (
        <>
          <div>
            <p className="mb-6 text-4xl font-bold">Associates</p>
          </div>
          <div className="row-gap-8 sm:row-gap-10 mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-3">
            {associatesPeople.map((person) => {
              return (
                <div className="flex" key={person.linkedin}>
                  <img
                    className="mr-4 h-20 w-20 rounded-full object-cover shadow"
                    src={person.profilePicture.url}
                    alt="Person"
                    onClick={() => handleClick(person.slug)}
                  />
                  <div className="flex flex-col justify-center">
                    <p
                      className="text-lg font-bold hover:cursor-pointer"
                      onClick={() => handleClick(person.slug)}
                    >
                      {person.name}
                    </p>
                    <p
                      className="text-md text-gray-800 hover:cursor-pointer"
                      onClick={() => handleClick(person.slug)}
                    >
                      {person.title}
                    </p>
                    <p
                      className="text-md text-gray-800 hover:cursor-pointer"
                      onClick={() => handleClick(person.slug)}
                    >
                      {person.email}
                    </p>
                    <a
                      className="mt-3 hover:cursor-pointer"
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="h-4 w-4"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      query {
        teamCollection(limit: 100) {
          items {
            slug
            name
            linkedin
            email
            title
            type
            profilePicture {
              url
            }
          }
        }
      }
    `,
  });

  const { data: teamPage } = await apolloClient.query({
    query: gql`
      query {
        teamPageCollection(limit: 1) {
          items {
            title
            subTitle
          }
        }
      }
    `,
  });

  return addApolloState(apolloClient, {
    props: {
      teamCollection: data.teamCollection,
      teamPageCollection: teamPage.teamPageCollection,
    },
    revalidate: DEFAULT_REVALIDATE,
  });
}
