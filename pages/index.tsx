import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components/Button/Button";
import {Ptag} from "@/components/Ptag/Ptag";


export default function Home() {
  return (
    <>
      <Htag tag='h3'>Текст</Htag>
        <Button appearance="primary" arrow="right">Some data</Button>
        <Button appearance="ghost">Some data</Button>
      <Ptag size="big">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ducimus minima nesciunt pariatur possimus. Dolore eligendi eveniet fugit nostrum ullam.</Ptag>
    </>
  );
}
