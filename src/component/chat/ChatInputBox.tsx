const InputText = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#F5F6F8] rounded-full py-2 px-4">
      <input
        type="text"
        className="w-full bg-transparent outline-none border-none"
        placeholder="메시지 입력"
      ></input>
      <button className="h-2 flex justify-center items-center">
        <img src="/sendicon.svg" alt="send-icon" className="h-4" />
      </button>
    </div>
  );
};

export default InputText;
