import { gql } from '@apollo/client';
import { initializeApollo } from 'lib/apolloClient';

import RichTextRenderer from '@/utils/richTextRenderer';

interface Props {
  aboutUsCollection: {
    items: [
      {
        __typename: string;
        title: string;
        content: {
          __typename: string;
          json: {
            nodeType: string;
            data: {};
            content: {
              nodeType: string;
              data: {};
              content: [
                {
                  nodeType: string;
                  value: string;
                  marks: [];
                  data: {};
                }
              ];
            }[];
          };
          links: any;
        };
      }
    ];
  };
}

const AboutUs = ({ aboutUsCollection }: Props) => {
  return (
    <section className="mx-auto max-w-7xl px-7 text-center">
      <h1 className="mb-2 text-4xl font-bold text-accent-secondary">
        {aboutUsCollection.items[0].title}
      </h1>
      <RichTextRenderer
        json={aboutUsCollection.items[0].content.json}
        links={aboutUsCollection.items[0].content.links}
      />
    </section>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      query aboutUsEntryQuery {
        aboutUsCollection(limit: 1) {
          items {
            title
            content {
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
  });

  return {
    props: {
      aboutUsCollection: data.aboutUsCollection,
    },
  };
}

export default AboutUs;
