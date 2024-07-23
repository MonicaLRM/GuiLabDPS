import styles from "./page.module.css";
import form from "@/components/form";

export default function Home() {
return (
<main className={styles.main}>
<div className="App">
<div>
<p>
Aquí haremos nuestro TO-DO list
</p>
<Form></Form>
</div>
</div>
</main>
);
}