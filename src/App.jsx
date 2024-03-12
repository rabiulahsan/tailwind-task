import CommentBox from "./Components/CommentBox";
import MainComment from "./Components/MainComment";
import ReplyComment from "./Components/ReplyComment";

const App = () => {
  return (
    <div className="bg-[#f5f6fa] h-screen flex items-center justify-center">
      <div className=" flex flex-col gap-y-4">
        <MainComment></MainComment>
        <MainComment></MainComment>
        <ReplyComment></ReplyComment>
        <ReplyComment></ReplyComment>
        <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default App;
