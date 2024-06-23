import Image from "next/image";

interface CourtDisplayProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const CourtDisplay = (props: CourtDisplayProps) => {
  return (
    <div className="mt-4">
      <Image
        className="rounded-t-xl"
        height={600}
        width={330}
        src={props.image}
        alt=""
      />
      <div className="border-r border-b border-l rounded-b-xl border-orange-500">
        <div className="text-xl text-center font-bold px-2">{props.name}</div>
        <div className="text-center px-2">{props.description}</div>
      </div>
    </div>
  );
};

export default CourtDisplay;
