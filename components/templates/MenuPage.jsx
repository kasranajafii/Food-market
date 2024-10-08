import Card from "@/components/modules/Card";
import styles from "./MenuPage.module.css";

const MenuPage = ({ data }) => {
    return (
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {data && data.map((food) => <Card key={food.id} {...food} />)}
            </div>
        </div>
    );
};

export default MenuPage;
