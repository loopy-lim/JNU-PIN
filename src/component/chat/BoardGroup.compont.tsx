import { BoardType } from "@/store/chat/chat.store";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

type BoardGroup = {
  sortList: { type: string; string: string }[];
  selected: string;
};

const BoardGroup = ({ sortList, selected }: BoardGroup) => {
  const setType = useSetAtom(BoardType);
  const [order, setOrder] = useState(sortList[0].string);
  const [isOpen, setIsOpen] = useState(false);
  const buttonClass = "flex justify-end cursor-pointer py-2";

  return (
    <div className="relative z-10 w-[100%]">
      <button
        className="flex items-center rounded-2xl gap-[2px] text-[#7E7E7E] w-[100%] justify-between text-2xl"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <div className="w-5"> </div>
        <span className="capitalize text-[#3D3C42]">{order}</span>
        <BsChevronCompactDown className="text-[#3D3C42]" />
      </button>
      {isOpen ? (
        <div className="flex flex-col absolute w-full  bg-white -z-10 text-[#3D3C42] ">
          {sortList.map((sort) => (
            <button
              className={
                sort.type === selected
                  ? buttonClass + " text-[#9A9A9A] cursor-auto"
                  : buttonClass
              }
              disabled={sort.type === selected}
              onClick={() => {
                setOrder(sort.string);
                setIsOpen(false);
                setType(sort.type);
              }}
              key={sort.type}
            >
              {sort.string}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BoardGroup;
