import styles from "@/styles/components/CountryDetail.module.css"
const CountryDetail = ({data} : {data:any}) => {

   return data &&(
 
    <div className={styles.detail}>
      <div className={styles.emoji}>{data.emoji}</div>
      <div><p>Name: {data.name} ({data.code})</p></div>
      <div><p>Continent: {data.continent.name}</p></div>
    </div>
 
  )
}

export default CountryDetail;