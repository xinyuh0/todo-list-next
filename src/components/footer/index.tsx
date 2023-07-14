import React from "react"
import { TodoItem } from "@/types/interface"
import { v4 as uuidv4 } from "uuid"

interface FooterProps {
  addItem: (item: TodoItem) => void;
}


export const Footer: React.FC<FooterProps> = ({ addItem }) => {
  const [title, setTitle] = React.useState<string>("")
  const [description, setDescription] = React.useState<string>("")

  const handleAddItem = () => {
    if (title.trim() === "") {
      alert("Please enter a title")
      return
    }

    addItem({
      title: title,
      description: description,
      createTime: new Date().getTime(),
      uuid: uuidv4(),
      done: false,
    })

    // Clear the input
    setTitle("")
    setDescription("")
  }


  return (
    <div className="w-full fixed px-8 py-6 backdrop-blur-2xl border-t-slate-900/10 border-t z-10 bottom-0">
      <div className=" flex justify-center items-center">
        <div className="flex-1">Title</div>
        <div className=" w-6"></div>
        <div className="flex-1">Description</div>
      </div>
      <div className=" flex justify-center items-cente mt-2">
        <input
          type="text"
          className="flex-1 h-12 leading-12 rounded border border-slate-900/10 p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className=" w-6"></div>
        <input
          type="text"
          className="flex-1 h-12 leading-12 rounded border border-slate-900/10 p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-start items-center">
        <div
          className=" flex justify-start items-center p-2 cursor-pointer rounded border border-slate-900/10 mt-4 hover:border-slate-950"
          onClick={handleAddItem}
        >
          Add Item
        </div>
      </div>
    </div>
  )
}