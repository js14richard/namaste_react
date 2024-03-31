import { useEffect, useState } from "react"
import { restList } from "../utils/constants"
import { RestaurantCard } from "./RestaurantCard"


export const RestaurantContainer = () => {

    const [resList, setResList] = useState(restList);

    useEffect(()=>{
        fetchRestaurantData();
    },[]);

    const fetchRestaurantData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        json.data.cards.forEach(card => {
            if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
                console.log("json", restaurants)
                setResList(restaurants);
            }
        });

    }
    return(
        <div className="restaurant-containter">
            <h2 className="restaurant-heading">Top restaurant chains in Chennai</h2>
            <button onClick={()=>{
                const filteredList = resList.filter((res)=> res.info.avgRating > 4 );
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
