import CommentBox from "./Components/CommentBox";
import MainComment from "./Components/MainComment";
import ReplyComment from "./Components/ReplyComment";

const App = () => {
  return (
    <div className="bg-[#f5f6fa] h-screen flex items-center justify-center">
      <div className=" flex flex-col gap-y-3">
        <MainComment></MainComment>
        <MainComment></MainComment>
        <div className="flex justify-between">
          <div className="">
            <div className="h-full w-[2px] bg-gray-300 mx-8"></div>
          </div>
          <div className=" flex flex-col gap-y-3">
            <ReplyComment></ReplyComment>
            <ReplyComment></ReplyComment>
          </div>
        </div>
        <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default App;
