export interface Clients {
  __typename: string;
  items: Client[];
}

export interface Client {
  __typename: string;
  image: {
    __typename: string;
    url: string;
  };
  title: string;
  description: string;
}
