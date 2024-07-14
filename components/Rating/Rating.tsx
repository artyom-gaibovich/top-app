import styles from './Rating.module.css';
import cn from "classnames";
import {RatingProps} from "@/components/Rating/Rating.props";
import {useEffect, useState} from "react";
import { FaStar } from "react-icons/fa";
export const Rating = ({isEditable = false, rating,  setRating, children,...props} : RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray ] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    const constructRating = (currentRating:  number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return <FaStar
                className={cn(styles.star, {
                [styles.filled] : i < currentRating
            })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => onClick(i+1)}
            />;
        });
        setRatingArray(updatedArray);
    };



    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };
    const changeDisplay = (i : number) => {
        if (!isEditable || !setRating) {
            return;
        }
        constructRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((r,i) => (<span key={i}>{r}</span>))}
        </div>
    );

};