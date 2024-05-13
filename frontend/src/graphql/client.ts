import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
query Countries {
  countries {
    code
    emoji
    id
    name
  }
}
`;


export const DETAIL_COUNTRY = gql`
query Countries($code: String!) {
  country(code: $code) {
    code
    continent {
      name
    }
    emoji
    name
  }
}
`;

export const CREATE_COUNTRY = gql`
mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    emoji
    name
    code
  }
}
`;
