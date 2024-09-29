import Attributes from "@/components/modules/Attributes";
import Banner from "../modules/Banner";
import styles from "./HomePage.module.css";
import Definition from "@/components/modules/Definition";
import Companies from "@/components/modules/Companies";
import Instruction from "@/components/modules/Instruction";
import Guide from "@/components/modules/Guide";
import Restrictions from "@/components/modules/Restrictions";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restrictions />
        </div>
    );
};

export default HomePage;
