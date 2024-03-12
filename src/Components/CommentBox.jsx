const CommentBox = () => {
  return (
    <div className="bg-[#ffffff] p-4 flex justify-between gap-x-2">
      <img
        className="h-[26px] w-[26px] rounded-[50%] object-cover"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <textarea
        placeholder="Add a comment..."
        className="border border-gray-200  focus:outline-none focus:border-[#8b8bde]  text-sm text-[#898c90] font-semibold rounded-md w-[75%]  px-4 py-2  placeholder:text-gray-500 placeholder:font-semibold placeholder:text-sm"
        cols="30"
        rows="2"
      ></textarea>

      <button className="bg-[#5358b6] h-[40px] text-white rounded-md  px-5 py-2 font-semibold text-sm">
        SEND
      </button>
    </div>
  );
};

export default CommentBox;
