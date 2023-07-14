import React from "react"


export const Header: React.FC = () => (
    <div className="w-full h-16 flex flex-row items-center fixed backdrop-blur-2xl px-8 border-b-slate-900/10 border-b z-10">
        <div className="h-full flex flex-row items-center justify-start w-full">
            <div className="text-lg font-bold">Todo List</div>
        </div>
    </div>
)
