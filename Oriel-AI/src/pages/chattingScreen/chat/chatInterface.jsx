    import React, { useState } from "react";
    import { Message } from "./message";
    import { ActionButtons } from "./actionButtons";

    export const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { content: "Tell me a joke", isUser: true },
        { content: "Why don't skeletons fight each other?\nBecause they don't have the guts!", isUser: false }
    ]);

    const actionButtons = [
        { src: "https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/4193303624eb2d79ae41b26a50a52293ebe6c34316c4b4ad6e424e2f28b64222?apiKey=3cd348705fda488781d88a6d4e5446c2&", alt: "Action 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/143d7277e5c85d62ef4318a6a256c0286449efd87300b42fe232b93d3be0300a?apiKey=3cd348705fda488781d88a6d4e5446c2&", alt: "Action 2" },
        { src: "https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/94db540fb41e3e86b1bfd31eb2b6589eaccc6dd1a561a9d84a058e3a0ffa046a?apiKey=3cd348705fda488781d88a6d4e5446c2&", alt: "Action 3" }
    ];

    return (
        <main className="flex flex-col rounded-none max-w-[848px]">
        <section className="messages-container" aria-label="Chat messages">
        {/* Move this div to the right */}
        <div className="flex justify-end">
            <div className="gap-2.5 self-end px-4 py-2 text-base bg-violet-100 rounded-xl text-neutral-900">
            Tell me a joke
            </div>
        </div>
    
        {/* Other elements */}
        <div className="flex gap-3.5 items-start mt-9 max-w-full text-base text-black w-[373px]">
            <Message
            content="Why don't skeletons fight each other?Because they don't have the guts!"
            icon="https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/ed020b93fc98114f956bb10cc983e7bd2c6bdb35f80aee10f6139c878636fd6e?apiKey=3cd348705fda488781d88a6d4e5446c2&"
            actionIcon="https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/5c0fded4dfcda483c29a2294877776f5a941a67dec5c7de4a39be0b04736de1b?apiKey=3cd348705fda488781d88a6d4e5446c2&"
            isUser={false}
            />
        </div>
    
        {/* Action buttons and purple box aligned to right */}
    <div className="flex justify-end items-end gap-2.5 mt-10">
    <div className="flex gap-0.5 justify-end items-center px-4 py-2.5 bg-purple-100 rounded-xl">
        <button
        aria-label="First action"
        className="focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/0da944e04962ce422a7703a49aba3f1912e13020c5bc344b9a7a88a52de85cab?apiKey=3cd348705fda488781d88a6d4e5446c2&"
            alt="Action icon 1"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
        />
        </button>
        <button
        aria-label="Second action"
        className="focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/73504467d6c0e4e539292fa0117155b2da3c6e76ed300b8ff2a1bd6681c4d11e?apiKey=3cd348705fda488781d88a6d4e5446c2&"
            alt="Action icon 2"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
        />
        </button>
    </div>


    </div>

        
    
        <div className="flex flex-wrap gap-5 justify-between items-start mt-9 w-full max-md:max-w-full">
            <div className="flex flex-col self-start">
            <Message
                content="Do you want to hear another one ?"
                icon="https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/dad990d8cd8353d099d3a7969bce11a436c24b2b7386735e40902db4731ce70c?apiKey=3cd348705fda488781d88a6d4e5446c2&"
                actionIcon="https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/5c0fded4dfcda483c29a2294877776f5a941a67dec5c7de4a39be0b04736de1b?apiKey=3cd348705fda488781d88a6d4e5446c2&"
                isUser={false}
            />
            <ActionButtons buttons={actionButtons} />
            </div>
            <div 
            className="gap-0.5 self-end px-4 py-2.5 mt-36 text-base text-black bg-rose-100 rounded-xl min-h-[35px] max-md:mt-10"
            role="textbox"
            aria-label="User response"
            >
            Yeah i want to hear another one
            </div>
        </div>
        </section>
    
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/3cd348705fda488781d88a6d4e5446c2/a9304874a90887478bc45b6ea1d3bd7512d150543370eac3c885c925058ef4ce?apiKey=3cd348705fda488781d88a6d4e5446c2&"
        alt="Decorative element"
        className="object-contain mt-4 max-w-full rounded-none aspect-[1.96] w-[100px]"
        />
    </main>
    
    );
    };