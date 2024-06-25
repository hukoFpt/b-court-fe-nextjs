import Image from "next/image";

interface CourtDisplayProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const CourtDisplay = (props: CourtDisplayProps) => {
  return (
    <div className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center relative rounded-t-xl overflow-hidden">
        <div className="w-full h-60 relative overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out">
          <Image
            src={props.image}
            alt="Court"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-grow px-4 border-r border-b border-l rounded-b-xl border-orange-500 overflow-hidden">
        <div className="text-xl text-center font-bold ">{props.name}</div>
        <div className="overflow-y-auto max-h-[6rem]">
          {props.description}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold mt-2">${props.price}/hr</div>
          <div>Add to booking</div>
        </div>
      </div>
    </div>
  );
};

export default CourtDisplay;
