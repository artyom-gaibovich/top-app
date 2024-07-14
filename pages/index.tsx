import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components/Button/Button";


export default function Home() {
  return (
    <>
      <Htag tag='h3'>Текст</Htag>
        <Button appearance="primary" arrow="right">Some data</Button>
        <Button appearance="ghost">Some data</Button>
    </>
  );
}
