import React from "react";
import Image from 'next/image';
import { TodoItem } from "@/types/interface";

interface ListItemProps extends TodoItem {
    toggleItem: (id: string) => void;
}


export const ListItem: React.FC<ListItemProps> = ({
    done,
    title,
    description,
    uuid,
    toggleItem,
}) => (
    <div className=" w-full border rounded border-slate-900/10 p-6 flex flex-row justify-start items-center hover:border-slate-950">
        <div className=" h-full flex flex-row justify-center items-center">
            <div
                className=" h-6 w-6 rounded-sm border border-slate-900/10 cursor-pointer"
                onClick={() => { toggleItem(uuid) }}
            >
                {done && <Image src={"check.svg"} alt="checked" width={24} height={24} />}
            </div>
        </div>
        <div className="flex flex-col flex-1 justify-start items-start ml-4">
            <div className=" h-8 leading-8 ">{title}</div>
            <div className="text-slate-400 text-sm">{description}</div>
        </div>
    </div>
)
