import Card from "@mui/material/Card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import '../index.css';

export function PlaceCard({ loading = false })
{
    if (loading) {
        return <Skeleton height={300} />;
    }

    return (
        <Card
            sx={{
                padding: '20px',
            }}
            className="hover-pointer"
        >
            <CardHeader
                title='The Ember Spoon'
                subheader='Modern American with a farm-to-table focus'
            />
            <CardContent>
                $18 - $35 <br />
                1375 Marlowe Street <br />
                Crescent Bay, CA 90211 <br />
                USA <br />
                <div className="flex">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                </div>
                Monday–Thursday: 11:30 AM – 9:00 PM <br />
                Friday–Saturday: 11:30 AM – 10:30 PM <br />
                Sunday: 10:00 AM – 8:00 PM (Brunch served until 2 PM) <br />
            </CardContent>
        </Card>
    );
}