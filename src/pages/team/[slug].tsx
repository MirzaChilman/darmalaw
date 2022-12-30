import { gql } from '@apollo/client';
import { addApolloState, initializeApollo } from 'lib/apolloClient';
import type { GetStaticPaths, GetStaticPropsContext } from 'next';

import Banner from '@/components/Banner';
import { DEFAULT_REVALIDATE } from '@/constant';
import RichTextRenderer from '@/utils/richTextRenderer';

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
      practiceAreas: string[];
      description: any;
      backgroundImage: {
        __typename: string;
        url: string;
      };
    }[];
  };
}

const TeamDetail = (props: Props) => {
  const currentItems = props.teamCollection.items[0];
  return (
    <div className="relative mx-auto max-w-7xl px-5">
      <Banner
        name={currentItems?.name || ''}
        image={currentItems?.backgroundImage?.url || ''}
      />

      <div className="container mx-auto flex flex-col gap-12 py-5 sm:flex-row lg:space-y-0">
        <aside className="w-full text-center sm:w-1/5 sm:text-left">
          <p className="text-xl font-bold text-accent-primary">
            {currentItems?.name}
          </p>
          <p className="text-xl font-bold text-accent-secondary">
            {currentItems?.title}
          </p>
          {(currentItems?.practiceAreas || [])?.length > 0 && (
            <div>
              <p className="text-xl font-bold text-accent-primary">
                Practice Areas
              </p>
              <p className="text-lg text-accent-alternate">
                {currentItems?.practiceAreas.join(', ')}
              </p>
            </div>
          )}
        </aside>
        <div className="w-full sm:w-4/5">
          <p className="text-4xl font-bold text-accent-primary">Profiles</p>
          <p className="text-lg text-accent-alternate">
            <RichTextRenderer
              json={currentItems?.description.json}
              links={currentItems?.description.links}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths(): Promise<GetStaticPaths> {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      query {
        teamCollection(limit: 100) {
          items {
            slug
          }
        }
      }
    `,
  });

  const paths = data.teamCollection.items.map((item: { slug: string }) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
  return addApolloState(apolloClient, {
    paths,
    fallback: 'blocking',
  });
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      query TeamCollection($slug: String!) {
        teamCollection(limit: 1, where: { slug: $slug }) {
          items {
            slug
            name
            linkedin
            email
            title
            practiceAreas
            backgroundImage {
              url
            }
            description {
              json
              links {
                entries {
                  block {
                    sys {
                      id
                    }
                  }
                  inline {
                    sys {
                      id
                    }
                  }
                }
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      slug: (context.params as any).slug,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      teamCollection: data.teamCollection,
      revalidate: DEFAULT_REVALIDATE,
    },
  });
}

export default TeamDetail;
