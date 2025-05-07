import Card from "@mui/material/Card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import '../index.css';
import { Restaurant } from "../models/Restaurants";
import StarIcon from '@mui/icons-material/Star';
import Tooltip from "@mui/material/Tooltip";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export function PlaceCard({
    loading = false,
    restaurant
}: {
    loading?: boolean,
    restaurant?: Restaurant;
})
{
    if (loading) {
        return <Skeleton
            height={300}
            style={{
                width: '30vw',
                minWidth: '500px',
                marginBottom: '20px',
            }}
        />;
    }

    if (!restaurant) {
        return <></>;
    }

    return (
        <Card
            sx={{
                padding: '20px',
                width: '30vw',
                minWidth: '500px',
                marginBottom: '20px'
            }}
            className="hover-pointer"
        >
            <CardHeader
                title={restaurant.name}
                subheader={restaurant.categories.map((category) =>
                {
                    return category.name;
                }).join(', ')}
            />
            <CardContent>
                <PriceDisplay price={restaurant.price} />
                {restaurant.location.formatted_address}
                {/* <div className="flex">
                    {restaurant.rating}/10
                </div> */}
                <RatingDisplay rating={restaurant.rating} />
                {restaurant.hours.display ?? 'No Operating Hours Found'}<br />
            </CardContent>
        </Card>
    );
}

const priceToDiplayMap = new Map();
priceToDiplayMap.set(1, 'Very Affordable');
priceToDiplayMap.set(2, 'Affordable');
priceToDiplayMap.set(3, 'Expensive');
priceToDiplayMap.set(4, 'Very Expensive');

function PriceDisplay({ price }: { price: number; })
{
    // let displayString = '';

    // for (let i = 0; i < price; i++) {
    //     displayString += '$';
    // }

    // if (displayString === '') {
    //     return <div>No Price Information</div>;
    // }

    // return <div>
    //     {displayString}
    // </div>;

    if (price === undefined) {
        return <div>No Price Information</div>;
    }

    return <div>{priceToDiplayMap.get(price)}</div>;
}

function RatingDisplay({ rating }: { rating: number; })
{
    if (rating === undefined) {
        return <div>No Ratings</div>;
    }

    const ratingComponent = [];
    const ratingFloor = Math.floor(rating);
    for (let i = 0; i < ratingFloor; i++) {
        ratingComponent.push(<StarIcon />);
    }
    const hasHalfStar = rating % ratingFloor !== 0;

    if (hasHalfStar) {
        ratingComponent.push(<StarHalfIcon />)
    }

    for (let i = rating; i < (hasHalfStar ? 9 : 10) ; i++) {
        ratingComponent.push(<StarBorderIcon />);
    }

    return <Tooltip title={rating}>
        <div className='flex'>{ratingComponent}</div>
    </Tooltip>;
}