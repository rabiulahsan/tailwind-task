import { FaReply } from "react-icons/fa";

const ReplyComment = () => {
  return (
    <div className="bg-[#ffffff] p-4 flex  items-center gap-x-4 w-[560px] rounded-md">
      {/* comment number  */}
      <div className="flex flex-col font-bold  items-center bg-[#e8ebfa] px-2 rounded-lg ">
        <p className="text-gray-400  text-lg">+</p>
        <p className=" text-[#46498b] text-sm">12</p>
        <p className="text-gray-400  text-lg">-</p>
      </div>

      {/* left section  */}
      <div className=" flex flex-col gap-y-[10px]">
        <div className=" flex justify-between items-center">
          {/* name with image  */}
          <div className=" flex justify-start  items-center gap-x-3">
            <img
              className="h-[26px] w-[26px] rounded-[50%] object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p className="text-sm text-[#393b41] font-semibold cursor-pointer hover:underline">
              Daniel James
            </p>
            <p className="text-sm text-[#777779] font-semibold">1 month ago</p>
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
          <p className="text-sm text-[#898c90] font-semibold">
            <span className="text-[#464790] hover:underline cursor-pointer">
              @maxblagun
            </span>{" "}
            If you&apos;re still new. I&apos;d recoomend focusing on the
            fundamentals of HTML, CSS and JS before considering React. it&apos;s
            very tempting to jump ahead but lay a solid foundation first.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
