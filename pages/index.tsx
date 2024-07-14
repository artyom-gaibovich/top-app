import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components/Button/Button";
import {Ptag} from "@/components/Ptag/Ptag";
import {Rating, Tag} from "@/components";
import {useEffect, useState} from "react";

export default function Home() : JSX.Element{
    const [rating, setRating] = useState<number>(4);

  return (
    <>
{/*      <Htag tag='h3'>{counter}</Htag>
        <Button appearance="primary" arrow="right">Some data</Button>
        <Button appearance="ghost">Some data</Button>
        <Button appearance={"primary"} onClick={() => setCounter(counter+1)}>Autoincrement counter</Button>
      <Ptag size="big">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ducimus minima nesciunt pariatur possimus. Dolore eligendi eveniet fugit nostrum ullam.</Ptag>
        <Tag size="s" color="red" href="https://kanal1">Привет!</Tag>
        <Tag size="m" color="grey" href="https://kanal1">Привет!</Tag>
        <Tag size="m" color="primary" href="https://kanal1">Привет!</Tag>*/}

        <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
    </>
  );
}
