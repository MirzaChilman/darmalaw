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
    homePage: {
      heroImage,
      description,
      heroSubTitle,
      heroTitle,
      contactFormEmail,
      contactFormLocation,
      contactFormPhoneNumber,
      contactFormSubTitle,
      contactFormTitle,
    },
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
      <ContactForm
        contactFormEmail={contactFormEmail}
        contactFormLocation={contactFormLocation}
        contactFormPhoneNumber={contactFormPhoneNumber}
        contactFormSubTitle={contactFormSubTitle}
        contactFormTitle={contactFormTitle}
      />
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data: homePageData } = await apolloClient.query({
    query: gql`
      query {
        homePageCollection(limit: 1) {
          items {
            contactFormTitle
            contactFormSubTitle
            contactFormLocation
            contactFormPhoneNumber
            contactFormEmail
            heroTitle
            heroSubTitle
            description
            heroImage {
              url
            }
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
      homePage: homePageData.homePageCollection.items?.[0],
      clients: clientData.practiceAreasCollection,
    },
    revalidate: DEFAULT_REVALIDATE,
  });
}

export default Index;
