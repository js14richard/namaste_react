import { restList } from "../utils/constants"
import { RestaurantCard } from "./RestaurantCard"


export const RestaurantContainer = () => {
    return(
        <div className="restaurant-containter">
            <h2 className="restaurant-heading">Top restaurant chains in Chennai</h2>
            <div className="restaurant-card-containter">
                {
                    restList.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} restData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}
