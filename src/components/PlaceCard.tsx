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
import { toast } from "react-toastify";
import { amber } from "@mui/material/colors";
import { CardMedia } from "@mui/material";

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

    const photo = restaurant.photos[0];
    const image = photo !== undefined ? restaurant.photos[0].prefix + '1440x1080' +restaurant.photos[0].suffix : ''

    return (
        <Card
            sx={{
                // padding: '20px',
                width: '30vw',
                minWidth: '500px',
                marginBottom: '20px',
            }}
            className="hover-pointer"
            onClick={() =>
            {
                const website = restaurant.website;
                if (website === undefined) {
                    toast(`No website found for ${restaurant.name}`, {
                        type: 'info',
                        position: 'bottom-right',
                    });
                    return;
                }
                window.open(restaurant.website, '_blank');
            }}
        >
            <CardMedia 
                component='img'
                alt={`${restaurant.name} photo`}
                height={200}
                image={image}
            />
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
                <HoursDisplay hours={restaurant.hours.display} />
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
        ratingComponent.push(<StarIcon style={{
            color: amber[500]
        }} />);
    }
    const hasHalfStar = rating % ratingFloor >= 0.5;

    if (hasHalfStar) {
        ratingComponent.push(<StarHalfIcon style={{
            color: amber[500]
        }} />);
    }

    for (let i = rating; i < (hasHalfStar ? 9 : 10); i++) {
        ratingComponent.push(<StarBorderIcon style={{
            color: amber[500]
        }} />);
    }

    return <Tooltip title={`${rating}/10`} followCursor>
        <div className='flex'>{ratingComponent}</div>
    </Tooltip>;
}

function HoursDisplay({ hours }: { hours: string; })
{
    if (hours === undefined) return <div>No Operating Hours Found</div>;

    const hoursSplit = hours.split('; ');

    return <div>
        {
            hoursSplit.map((operation, index) =>
            {
                return <div key={index}>
                    {operation}
                </div>;
            })
        }
    </div>;
}