import { cardImagesUrl } from "../utils/constants"

export const RestaurantCard = (props) => {
    const {restData} = props

    const {
        cloudinaryImageId, 
        name, 
        avgRating, 
        costForTwo,
        sla,
        cuisines,
        locality,
        aggregatedDiscountInfoV3
    } = restData?.info
    const discountHeader = aggregatedDiscountInfoV3?.header;
    const discountSubHeader = aggregatedDiscountInfoV3?.subHeader;
    return(
        <div className="restaurant-card">
            <img src={cardImagesUrl+cloudinaryImageId} alt="restaurant image" className="restaurant-card-image"/>
            <h2 className="restaurant-card-offer-text">{discountHeader} {discountSubHeader}
            </h2>
            <div className="restaurant-card-text">
                <h3>{name}</h3>
                <h3>{avgRating} . {sla.slaString}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
            </div>
    </div>
    )
}