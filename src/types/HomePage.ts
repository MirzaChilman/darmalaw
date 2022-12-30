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
  contactFormTitle: string;
  contactFormSubTitle: string;
  contactFormLocation: string;
  contactFormPhoneNumber: string;
  contactFormEmail: string;
}
