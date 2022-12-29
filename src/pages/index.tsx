import { gql } from '@apollo/client';
import { addApolloState, initializeApollo } from 'lib/apolloClient';

import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import { DEFAULT_REVALIDATE } from '@/constant';
import type { Clients } from '@/types/Clients';
import type { HomePage } from '@/types/HomePage';

interface Props {
  homePage: HomePage;
  clients: Clients;
}

const Index = (props: Props) => {
  const {
    homePage: { heroImage, description, heroSubTitle, heroTitle },
    clients: { items },
  } = props;

  return (
    <>
      <Hero
        heroImage={heroImage}
        description={description}
        heroSubTitle={heroSubTitle}
        heroTitle={heroTitle}
      />
      {items.length !== 0 && <PracticeAreas items={items} />}
      <ContactForm />
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data: homePageData } = await apolloClient.query({
    query: gql`
      query homePageEntryQuery {
        homePage(id: "2ebVilgWLpMUCBp0dNLnUK") {
          heroTitle
          heroSubTitle
          description
          heroImage {
            url
          }
        }
      }
    `,
  });

  const { data: clientData } = await apolloClient.query({
    query: gql`
      query {
        practiceAreasCollection(limit: 12) {
          items {
            image {
              url
            }
            title
            description
          }
        }
      }
    `,
  });

  return addApolloState(apolloClient, {
    props: {
      homePage: homePageData.homePage,
      clients: clientData.practiceAreasCollection,
    },
    revalidate: DEFAULT_REVALIDATE,
  });
}

export default Index;
