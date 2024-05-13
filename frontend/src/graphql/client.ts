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
