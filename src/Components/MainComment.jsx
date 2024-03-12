/* eslint-disable react/prop-types */
import { FaReply } from "react-icons/fa";

const MainComment = ({ comments }) => {
  const { time, name, number, img, comment } = comments;
  return (
    <div className="bg-[#ffffff] p-4 flex  items-center gap-x-4 w-[560px] rounded-md">
      {/* comment number  */}
      <div className="flex flex-col font-bold  items-center bg-[#e8ebfa] px-2 rounded-lg ">
        <p className="text-gray-400  text-lg">+</p>
        <p className=" text-[#46498b] text-sm">{number}</p>
        <p className="text-gray-400  text-lg">-</p>
      </div>

      {/* left section  */}
      <div className=" flex flex-col gap-y-[10px]">
        <div className=" flex justify-between items-center">
          {/* name with image  */}
          <div className=" flex justify-start  items-center gap-x-3">
            <img
              className="h-[26px] w-[26px] rounded-[50%] object-cover"
              src={img}
              alt={name}
            />
            <p className="text-sm text-[#393b41] font-semibold cursor-pointer hover:underline">
              {name}
            </p>
            <p className="text-sm text-[#777779] font-semibold">{time}</p>
          </div>

          {/* reply button  */}
          <div className="">
            <p className="flex items-center gap-x-2 text-[#414698] cursor-pointer">
              <span className="text-xs">
                <FaReply></FaReply>
              </span>
              <span className="text-sm font-semibold">Reply</span>
            </p>
          </div>
        </div>

        {/* comment  */}
        <div className="">
          <p className="text-sm text-[#898c90] font-semibold">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default MainComment;
