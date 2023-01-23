const ItemListContainer = ({greeting, description}) => {
    return (
        <div className="itemListContainer">
            <h2>{greeting}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ItemListContainer;