import { GoTrophy } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { LuArrowRightLeft } from "react-icons/lu";
import { PiPhone } from "react-icons/pi";

const MainFeature = () => {
  const features = [
    {
      Icon: GoTrophy,
      title: "Hold Champion Ship",
      description: "Hold and Manage your contest",
    },
    {
      Icon: MdOutlineSecurity,
      title: "Security Payment",
      description: "100% security payment",
    },
    {
      Icon: LuArrowRightLeft,
      title: "24h Return Policy",
      description: "Refund up to 100%",
    },
    {
      Icon: PiPhone,
      title: "24/7 Support",
      description: "Support every time fast",
    },
  ];

  return (
    <div className="flex items-center justify-evenly">
      {features.map((icon, index) => (
        <div key={index} className="flex flex-col items-center bg-neutral-100 p-8 rounded-xl mt-8 w-1/5">
          <div className="bg-orange-500 rounded-full p-8 inline-flex items-center justify-center">
            <icon.Icon size={64} className="text-white" />
          </div>
          <div className="text-xl font-bold pt-2">{icon.title}</div>
          <p>{icon.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MainFeature;
