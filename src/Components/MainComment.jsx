const MainComment = () => {
  return (
    <div className="bg-[#ffffff] p-4 flex  items-center gap-x-4">
      <div className="flex flex-col">
        <p>+</p>
        <p>12</p>
        <p>-</p>
      </div>
      <div className=" flex flex-col">
        <div className=" flex justify-between items-center">
          <div className="">
            <img
              className="h-[30px] w-[30px] rounded-[50%] object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>name</p>
            <p>Time</p>
          </div>
          <div className="">Reply</div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MainComment;
