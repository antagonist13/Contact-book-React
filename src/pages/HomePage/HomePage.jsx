import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css"

export default function HomePage() {
    return <section className={css.home}>
        <PageTitle>Contacts book welcome page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span></PageTitle>
        <p className={css.welcomeText}>We are pleased to welcome you to our electronic contact book, which will help you easily store and organize your important contacts. <br></br>
            Our service offers a user-friendly and intuitive interface, making the process of managing your contacts quick and enjoyable.</p>
        <h3 className={css.middleHomeTitle}>What you can do with Contacts:</h3>
        <ul>
            <li><span className={css.listHeader}>Add new contacts:</span> Save information about your friends, family, colleagues, and acquaintances.</li>
            <li><span className={css.listHeader}>Edit existing contacts:</span> Update your contacts information at any time.</li>
            <li><span className={css.listHeader}>Delete unwanted contacts:</span> Easily delete outdated or unwanted contacts.</li>
            <li><span className={css.listHeader}>Search and filter:</span> Quickly find the contacts you need by name or number.</li>
        </ul>
    </section>
}