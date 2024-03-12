import CommentBox from "./Components/CommentBox";
import MainComment from "./Components/MainComment";
import ReplyComment from "./Components/ReplyComment";

const App = () => {
  // create object for content
  const commentor1 = {
    time: "1 month ago",
    name: "amyrobson",
    number: 12,
    img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    comment:
      "Impressibe! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  };
  const commentor2 = {
    time: "2 weeks ago",
    name: "maxblagun",
    number: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but thnk I want to dive into React as well soon. Perhaps you can give me an insight on where i can learn React? Thsnks!",
  };
  const reply1 = {
    time: "1 week ago",
    name: "ramsesmiron",
    number: 4,
    to: "maxblagun",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    comment:
      "If you're still new. I'd recoomend focusing on the fundamentals of HTML, CSS and JS before considering React. it's very tempting to jump ahead but lay a solid foundation first.",
  };
  const reply2 = {
    time: "2 days ago",
    name: "juliusomo",
    number: 2,
    to: "ramsesmiron",
    img: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    comment:
      "I couldn't agree more with this. Everything moves so fast and it always seem s like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
  };

  return (
    <div className="bg-[#f5f6fa] h-screen flex items-center justify-center">
      <div className=" flex flex-col gap-y-3">
        <MainComment comments={commentor1}></MainComment>
        <MainComment comments={commentor2}></MainComment>
        <div className="flex justify-between">
          <div className="">
            <div className="h-full w-[2px] bg-gray-300 mx-8"></div>
          </div>
          <div className=" flex flex-col gap-y-3">
            <ReplyComment reply={reply1} user={false}></ReplyComment>
            <ReplyComment reply={reply2} user={true}></ReplyComment>
          </div>
        </div>
        <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default App;
