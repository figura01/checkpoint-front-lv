import { CountryType } from "@/types"
import Link from "next/link";

import styles from'@/styles/components/Country.module.css';

const Country = ({data}: {data: CountryType}) => {
  console.log('data country: ', data)
  return (<Link href={`/countries/${data.code}`} className={styles.linkContry}>
    <div className={styles.card}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.emoji}>{data.emoji}</p>
    </div>
    </Link>
  )
};

export default Country;
