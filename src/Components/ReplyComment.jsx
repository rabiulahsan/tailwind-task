/* eslint-disable react/prop-types */
import { FaReply, FaTrash, FaPen } from "react-icons/fa";

const ReplyComment = ({ reply, user }) => {
  console.log(user);
  const { time, name, to, number, img, comment } = reply;
  return (
    <div className="bg-[#ffffff] p-4 flex  justify-end  items-center gap-x-4 w-[496px] rounded-md">
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

            {/* if user then it will display otherwise not  */}
            {user && (
              <p className="text-xs bg-[#5358b6] text-white font-bold px-1 text-center py-[2px] rounded-sm">
                you
              </p>
            )}
            <p className="text-sm text-[#777779] font-semibold">{time}</p>
          </div>

          {/* reply button  */}
          <div className="">
            {/* if user then delete and edit otherwise reply options  */}
            {user ? (
              <div className="flex gap-x-4">
                <p className="flex items-center gap-x-2 text-[#ec6266] cursor-pointer">
                  <span className="text-xs">
                    <FaTrash></FaTrash>
                  </span>
                  <span className="text-sm font-semibold">Delete</span>
                </p>
                <p className="flex items-center gap-x-2 text-[#414698] cursor-pointer">
                  <span className="text-xs">
                    <FaPen></FaPen>
                  </span>
                  <span className="text-sm font-semibold">Edit</span>
                </p>
              </div>
            ) : (
              <p className="flex items-center gap-x-2 text-[#414698] cursor-pointer">
                <span className="text-xs">
                  <FaReply></FaReply>
                </span>
                <span className="text-sm font-semibold">Reply</span>
              </p>
            )}
          </div>
        </div>

        {/* comment  */}
        <div className="">
          <p className="text-sm text-[#898c90] font-semibold">
            <span className="text-[#464790] hover:underline cursor-pointer">
              @{to}
            </span>{" "}
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
