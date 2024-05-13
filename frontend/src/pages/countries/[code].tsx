import { DETAIL_COUNTRY } from "@/graphql/client";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CountryDetail from "@/components/CountryDetail";

import styles from "@/styles/components/CountryDetailPage.module.css"

const Detail = () => {
  const router = useRouter();
  const [getCountry, { data, loading }] = useLazyQuery(DETAIL_COUNTRY);
  // const [getCountry, {data, loading}] = useQuery(DETAIL_COUNTRY);
 
 
  useEffect(() => {
    const { code } = router.query;
    if(code) {
      getCountry({
        variables: {code}
      })
      console.log(data)
    }
  }, [router.query.code])

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  
  return (
    <div className={styles.page}>
      <h2>Detail country</h2>
      {data?.country && (
        
        <CountryDetail data={data.country} />
        
      )}
    </div>
    
  )
}

export default Detail;
