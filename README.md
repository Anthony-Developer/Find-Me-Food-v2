# Project Overview


## Find Me Food!

A place where users can find local restaurants when they don't know what to eat ore want to try somoething new.

## API and Data Sample

- [Yelp API](https://www.yelp.com/developers/documentation/v3/get_started)

## API Snippet

```
{
    "businesses": [
        {
            "id": "b6jOwyX4iaagw8YjXqq1sA",
            "alias": "antonios-trattoria-bronx",
            "name": "Antonio's Trattoria",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/VnG_keQUb8r3ImEx4iInMw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/antonios-trattoria-bronx?adjust_creative=gD0adRxaecs0Re0jXrg1Pg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=gD0adRxaecs0Re0jXrg1Pg",
            "review_count": 771,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "desserts",
                    "title": "Desserts"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.854131,
                "longitude": -73.886601
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2370 Belmont Ave",
                "address2": null,
                "address3": "",
                "city": "Bronx",
                "zip_code": "10458",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "2370 Belmont Ave",
                    "Bronx, NY 10458"
                ]
            },
            "phone": "+17187336630",
            "display_phone": "(718) 733-6630",
            "distance": 1297.6051908224783
        }
```

### MVP

- Allow user to search for local food
- Display Business information  
- Dislpay reviews for business

### Post-MVP

- Give the users a randomizer for when they don't know what they want to eat
- Implement a map feature to display the distance and location of restaurants 
- Allow users to save favorite restaurants

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project. React Router Dom and Axios should be listed here at the very least.

- Axios
- Dotenv
- React-router-dom