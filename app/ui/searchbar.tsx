'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    return (
        <div className="flex w-full drop-shadow-lg">
            <Link href={`place/${query}`} className="inline-flex items-center px-3 text-sm bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </Link>
            <input type="text" onChange={e => { setQuery(e.currentTarget.value); }} className="rounded-e-lg bg-white bg-opacity-25 border text-white block flex-1 min-w-0 text-m p-2.5"/>
        </div>
    )
}