import React from "react"
import ReactDOM from "react-dom/client"



const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="logo-location">
                <img src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" alt="swiggy logo" className="navbar-logo"/>

                <div className="navbar-location"> Other</div>
                <div className="location-dropdown">
                <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            <nav className="navbar">
                <div className="nav-item">
                    Search
                </div>
                <div className="nav-item">
                    Offers
                </div>
                <div className="nav-item">
                    Help
                </div>
                <div className="nav-item">
                    Sign In
                </div>
                <div className="nav-item">
                    Cart
                </div>
            </nav>
        </div>
    )
}


const Header = ()=> {   
    return(
        <div className="header-container">
            <Navbar/>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {restData} = props
    console.log(restData)

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
    console.log("siril",aggregatedDiscountInfoV3?.header)
    const discountHeader = aggregatedDiscountInfoV3?.header;
    const discountSubHeader = aggregatedDiscountInfoV3?.subHeader;
    return(
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="restaurant image" className="restaurant-card-image"/>
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

const restList = [
    {
      "info": {
        "id": "141368",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
        "locality": "BSR Building Chennai",
        "areaName": "Perungudi",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.4,
        "parentId": "195515",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 7.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "7.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/starbucks-coffee-bsr-building-perungudi-chennai-141368",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "28647",
        "name": "Ibaco",
        "cloudinaryImageId": "idrhztisy0ggop9zk8ik",
        "locality": "Old Mahabalipuram Road",
        "areaName": "Okkiyampet",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Cakes and Pastries",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "3481",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            },
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ibaco-old-mahabalipuram-road-okkiyampet-chennai-28647",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "579088",
        "name": "EatFit",
        "cloudinaryImageId": "a564ace38895abd960157ac2a76aaf2a",
        "locality": "Thiruporur block",
        "areaName": "Siruseri",
        "costForTwo": "₹270 for two",
        "cuisines": [
          "Chinese",
          "Healthy Food",
          "Tandoor",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani"
        ],
        "avgRating": 4.3,
        "parentId": "76139",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "8.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/eatfit-thiruporur-block-siruseri-chennai-579088",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "31709",
        "name": "A2B - Adyar Ananda Bhavan",
        "cloudinaryImageId": "ev5guv3zjjdecvvmwgvi",
        "locality": "200 ft Road",
        "areaName": "Pallikaranai",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Sweets",
          "Chinese"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "22",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 10.4,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "10.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-200-ft-road-pallikaranai-chennai-31709",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "67801",
        "name": "Chai Kings",
        "cloudinaryImageId": "hea70vpxjbymdzaauyfd",
        "locality": "Thuraipakkam",
        "areaName": "Sri Sowdeswari Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Beverages",
          "Snacks",
          "Bakery"
        ],
        "avgRating": 4.5,
        "parentId": "2627",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chai-kings-thuraipakkam-sri-sowdeswari-nagar-chennai-67801",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "31567",
        "name": "JR Jana Veg Restaurant",
        "cloudinaryImageId": "a4ud5wdfdhvkn1nzh93p",
        "locality": "No 9/3 SANGOTHI Amman koil 2nd cross street",
        "areaName": "Tambaram",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Indian",
          "South Indian"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "4064",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 10.5,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "10.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/jr-jana-veg-restaurant-no-9-3-sangothi-amman-koil-2nd-cross-street-tambaram-chennai-31567",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23724",
        "name": "McDonald's",
        "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
        "locality": "Velachery",
        "areaName": "Velachery",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 62,
          "lastMileTravel": 12.4,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "12.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-28 02:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-velachery-chennai-23724",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "153539",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Kancheepuram",
        "areaName": "Uthandi",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 9.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "9.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹139"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-kancheepuram-uthandi-chennai-153539",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "8921",
        "name": "Hot Chips",
        "cloudinaryImageId": "rkg417chaagnrjeh7gfr",
        "locality": "Velachery Main Road",
        "areaName": "Medavakkam",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Street Food"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "471",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 6.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hot-chips-velachery-main-road-medavakkam-chennai-8921",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "101104",
        "name": "Ganga Sweets",
        "cloudinaryImageId": "e6kh8xdghetat1rsgmgy",
        "locality": "Medavakkam",
        "areaName": "Medavakkam",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Sweets",
          "Snacks"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "405",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ganga-sweets-medavakkam-chennai-101104",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "49821",
        "name": "Hot Breads",
        "cloudinaryImageId": "6feb1d22bb913dbabcde6304becc2f55",
        "locality": "Medavakkam",
        "areaName": "Medavakkam",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "470",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 7.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "7.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 21:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hot-breads-medavakkam-chennai-49821",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "25093",
        "name": "Salem RR Biriyani Unavagam",
        "cloudinaryImageId": "3daa979cd6892a3bcdf2f0ecea2b2d98",
        "locality": "Jeba Complex Mahalakshmi Nagar",
        "areaName": "Tambaram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Chettinad",
          "Tandoor",
          "Chinese"
        ],
        "avgRating": 4.2,
        "parentId": "176137",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 11.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/salem-rr-biriyani-unavagam-jeba-complex-mahalakshmi-nagar-tambaram-chennai-25093",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "184028",
        "name": "The Belgian Waffle Cafe",
        "cloudinaryImageId": "7e48586d8a54ae3bdf33b350b25ec1a5",
        "locality": "Selvanaar extension",
        "areaName": "Velachery",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "10384",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 68,
          "lastMileTravel": 12.3,
          "serviceability": "SERVICEABLE",
          "slaString": "65-70 mins",
          "lastMileTravelString": "12.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-cafe-selvanaar-extension-velachery-chennai-184028",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "42957",
        "name": "French Loaf",
        "cloudinaryImageId": "c7976a7dd110e058c064822834383ad0",
        "locality": "Neelankarai",
        "areaName": "Neelankarai",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Cakes and Pastries",
          "Bakery",
          "Snacks",
          "Pizzas",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "393",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 9.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "9.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
              "shortDescription": "Perfect Cake Delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                    "shortDescription": "Perfect Cake Delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/french-loaf-neelankarai-chennai-42957",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "17828",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Navalur",
        "areaName": "Navalur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 6.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-navalur-chennai-17828",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "395213",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "yheal0ldgbdwqw9gz3uu",
        "locality": "Grand Arcade",
        "areaName": "Velachery",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "10761",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 62,
          "lastMileTravel": 12.4,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "12.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-28 02:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-grand-arcade-velachery-chennai-395213",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "91611",
        "name": "D.I.E.T Carry",
        "cloudinaryImageId": "abksep7vc7ds9ssoqg7n",
        "locality": "OMR",
        "areaName": "Ezhil Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto"
        ],
        "avgRating": 4.4,
        "parentId": "17572",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 22:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/d-i-e-t-carry-omr-ezhil-nagar-chennai-91611",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "171027",
        "name": "Cool Coco Day",
        "cloudinaryImageId": "d5ppurvdcxwan66yadrh",
        "locality": "Thoraipakkam",
        "areaName": "Jothi Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Indian",
          "Ice Cream"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "11671",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 6.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "6.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-28 01:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cool-coco-day-thoraipakkam-jothi-nagar-chennai-171027",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "13514",
        "name": "Hotel Saravana Bhavan",
        "cloudinaryImageId": "vyhuxkghxoetbgorrzeb",
        "locality": "Near Kandhanchavadi Bus Stop",
        "areaName": "Perungudi",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Sweets"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "101987",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 10,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "10.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-27 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-saravana-bhavan-near-kandhanchavadi-bus-stop-perungudi-chennai-13514",
        "type": "WEBLINK"
      }
    }
  ]

const RestaurantContainer = () => {
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

const HomeContainer = () =>{
    return(
        <div className="home-container">
            <RestaurantContainer/>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <Header/>
            <div className="home-wrapper">
                <HomeContainer/>
            </div>
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

root.render(<App />) 