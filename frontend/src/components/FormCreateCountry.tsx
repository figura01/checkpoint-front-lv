import { CREATE_COUNTRY } from "@/graphql/client";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import styles from "@/styles/components/FormCreateCountry.module.css";
import { useRouter } from "next/router";
const FormCreateCountry = () => {
  const [createCountry, { data, loading, error }] = useMutation(CREATE_COUNTRY, {
    onCompleted(data) {
      router.push("/");
    }
  });

  const router = useRouter();
  const [formState, setFormState] = useState({
    name: "",
    code: "",
    emoji: "",
    continent: null
  })

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault();
    console.log("on change")
    const {name, value } = e.target as HTMLInputElement;
    console.log("name: ",name,"value: ", value)
    setFormState({
      ...formState,
      [name]: value
    });
  }
  return (
    <form onSubmit={e => {
      e.preventDefault();
      createCountry({ 
        variables: {
          data: {
            name: formState.name,
            emoji: formState.emoji,
            code: formState.code,
            continent: null
          }
      }});

    }} className={styles.form}>
      <div className={styles.form_grp}>
        <label htmlFor="name">Name</label>
        <input onChange={(e) => handleChange(e)} type="text" id="name" name="name" />
      </div>

      <div className={styles.form_grp}>
        <label htmlFor="emoji">Emoji</label>
        <input onChange={(e) => handleChange(e)} type="text" id="emoji" name="emoji" />
      </div>

      <div className={styles.form_grp}>
        <label htmlFor="code">Code</label>
        <input onChange={(e) => handleChange(e)} type="text" id="code" name="code" />
      </div>

      <button type="submit" className={styles.submit}>Add</button>

    </form>
  );
}
export default FormCreateCountry;