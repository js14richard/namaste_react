import { useState } from "react"
import { restList } from "../utils/constants"
import { RestaurantCard } from "./RestaurantCard"


export const RestaurantContainer = () => {

    const [resList, setResList] = useState(restList);

    return(
        <div className="restaurant-containter">
            <h2 className="restaurant-heading">Top restaurant chains in Chennai</h2>
            <button onClick={()=>{
                const filteredList = resList.filter((res)=> res.info.avgRating > 4.5 );
                setResList(filteredList);
            }} className="restaurant-heading filter-button"> Filter Top Rated</button>
            <div className="restaurant-card-containter">
                {
                    resList.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} restData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}
