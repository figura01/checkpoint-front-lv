import Header from "@/components/Header";
import { LIST_COUNTRIES } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import Country from "@/components/Country";
import FormCreateCountry from "@/components/FormCreateCountry";
import { CountryType } from "@/types";
export default function Home() {

  const { loading, error, data } = useQuery(LIST_COUNTRIES);

  return (
    <>
      <main>
        <FormCreateCountry />
        {data && <div className="list-countries">{data.countries.map((c: CountryType) => (<Country data={c} key={c.id}/>))}</div>}
        {loading && <p>Loading...</p>}
      </main>
    </>
  )
};

