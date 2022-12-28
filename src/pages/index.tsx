import { gql } from '@apollo/client';
import { initializeApollo } from 'lib/apolloClient';

import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';

export interface HomePage {
  __typename?: string;
  sys: {
    __typename?: string;
    id: string;
  };
  heroTitle: string;
  heroSubTitle: string;
  description: string;
  heroImage: {
    __typename?: string;
    url: string;
  };
}

// interface Props {
//   homePage: HomePage;
// }

const Index = () => {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <ContactForm />
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
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

  console.log('data', data.homePage);

  return {
    props: {
      homePage: data.homePage,
    },
  };
}

export default Index;
