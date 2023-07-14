"use client"

import React from "react"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ListItem } from "@/components/todolist-item"
import { TodoItem } from "@/types/interface"
import { v4 as uuidv4 } from "uuid"


const initData: TodoItem[] = [
  { title: "A sample ongoing todo", description: "Do assignment 2-A", done: false, createTime: new Date().getTime(), uuid: uuidv4() },
  { title: "A sample todo already done", description: "Do assignment 2-A", done: true, createTime: new Date().getTime(), uuid: uuidv4() },
]


export default function Home() {
  const [todoList, setTodoList] = React.useState<TodoItem[]>(initData);

  const toggleItem = (id: string) => {
    const newList: TodoItem[] = []

    for (let i = 0; i < todoList.length; i++) {
      const item = todoList[i]

      if (item.uuid === id) {
        newList.push({ ...todoList[i], done: !todoList[i].done })
      } else {
        newList.push({ ...todoList[i] })
      }
    }

    // Sort by created timestamp
    newList.sort((item1, item2) => item1.createTime - item2.createTime)

    setTodoList(newList)
  }

  const addItem = (newItem: TodoItem) => {
    const newList: TodoItem[] = [...todoList]

    newList.push({ ...newItem })

    // Sort by created timestamp
    newList.sort((item1, item2) => item1.createTime - item2.createTime)

    setTodoList(newList)
  }

  return (
    <>
      <Header />
      <main className=" pt-20 min-h-full pb-48">
        <div className="flex justify-start items-center px-8 mb-2">
          <div className="flex-1">Ongoing</div>
          <div className=" w-6"></div>
          <div className="flex-1">Done</div>
        </div>
        <div className=" w-full px-8 flex justify-center">
          <div className=" mt-1 flex-1 flex flex-col">
            {
              todoList.filter(data => data.done === false).map(data => (
                <div className=" mb-4">
                  <ListItem
                    {...data}
                    toggleItem={toggleItem}
                  />
                </div>
              ))
            }
          </div>
          <div className=" w-6"></div>
          <div className=" mt-1 flex-1 flex flex-col">
            {
              todoList.filter(data => data.done === true).map(data => (
                <div className=" mb-4">
                  <ListItem
                    {...data}
                    toggleItem={toggleItem}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </main>
      <Footer addItem={addItem} />
    </>
  )
}
