import {Button} from "@/components/Button/Button";
import {Ptag} from "@/components/Ptag/Ptag";
import {Rating, Tag} from "@/components";
import {useState} from "react";
import {withLayout} from "@/layout/Layout";
import axios, {AxiosResponse} from "axios";
import {MenuItem} from "@/interfaces/menu.interface";

function Home({menu, firstCategory} : HomeProps) : JSX.Element{
    console.log(firstCategory);
    const [rating, setRating] = useState<number>(4);

  return (
    <>
        <Button appearance="primary" arrow="right">Some data</Button>
        <Button appearance="ghost">Some data</Button>
      <Ptag size="big">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ducimus minima nesciunt pariatur possimus. Dolore eligendi eveniet fugit nostrum ullam.</Ptag>
        <Tag size="s" color="red" href="https://kanal1">Привет!</Tag>
        <Tag size="m" color="grey" href="https://kanal1">Привет!</Tag>
        <Tag size="m" color="primary" href="https://kanal1">Привет!</Tag>

        <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
        <ul>
            {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
        </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: () => Promise<{ props: { firstCategory: number; menu: MenuItem } }> = async ()  => {
    const firstCategory = 0;
    const {data: menu} : AxiosResponse<MenuItem> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        props : {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number;

}