import styles from "./DetailsPage.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

const DetailsPage = ({
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
}) => {
    return (
        <div className={styles.container}>
            <h2>Details</h2>
            <div className={styles.subContainer}>
                <div className={styles.banner}>
                    {id && name && (
                        <img src={`/images/${id}.jpeg`} alt={name} />
                    )}
                    <div>
                        <h3>{name}</h3>
                        <span className={styles.location}>
                            <Location />
                            {details && details.length > 0
                                ? details[0].Cuisine
                                : "Cuisine not available"}
                        </span>
                        <span className={styles.price}>
                            <Dollar />
                            {discount
                                ? (price * (100 - discount)) / 100
                                : price}
                            $
                        </span>
                        {discount ? (
                            <span className={styles.discount}>
                                {discount}$ OFF
                            </span>
                        ) : null}
                    </div>
                </div>
                <div className={styles.introduction}>
                    <p>{introduction}</p>
                </div>
                <div className={styles.details}>
                    <h4>Details</h4>
                    <ul>
                        {details &&
                            details.map((detail, index) => (
                                <li key={index}>
                                    <p>{Object.keys(detail)[0]}: </p>
                                    <span>{Object.values(detail)[0]}</span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className={styles.details}>
                    <h4>Ingredients</h4>
                    <ul>
                        {ingredients &&
                            ingredients.map((item, index) => (
                                <li key={index}>
                                    <p>{item}</p>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className={styles.recipe}>
                    <h4>Recipe</h4>
                    {recipe &&
                        recipe.map((item, index) => (
                            <div
                                key={index}
                                className={index % 2 ? styles.odd : styles.even}
                            >
                                <span>{index + 1}.</span>
                                <p>{item}</p>
                            </div>
                        ))}
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default DetailsPage;
