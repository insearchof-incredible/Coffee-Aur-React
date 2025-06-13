import React from 'react'

function Card() {
  return (
    <div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-[300px]">
        <div className="flex flex-col items-center justify-between pt-9 px-6 pb-6 relative">
          <span className="relative mx-auto -mt-16 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="46"
              width="65"
              viewBox="0 0 65 46"
            >
              {/* PASTE ALL <path> TAGS HERE */}
              <path
                stroke="#000"
                fill="#EAB789"
                d="M49.157 15.69L44.58.655l-12.422 1.96L21.044.654l-8.499 2.615-6.538 5.23-4.576 9.153v11.114l4.576 8.5 7.846 5.23 10.46 1.96 7.845-2.614 9.153 2.615 11.768-2.615 7.846-7.846 1.96-5.884.655-7.191-7.846-1.308-6.537-3.922z"
              ></path>
              <path
                fill="#9C6750"
                d="M32.286 3.749c-6.94 3.65-11.69 11.053-11.69 19.591 0 8.137 4.313 15.242 10.724 19.052a20.513 20.513 0 01-8.723 1.937c-11.598 0-21-9.626-21-21.5 0-11.875 9.402-21.5 21-21.5 3.495 0 6.79.874 9.689 2.42z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
              {/* ...other path tags... */}
            </svg>
          </span>

          <h5 className="text-sm font-semibold mb-2 text-left mr-auto text-zinc-700">
            Your privacy is important to us
          </h5>

          <p className="w-full mb-4 text-sm text-justify text-zinc-600">
            We process your personal information to measure and improve our
            sites and services, to assist our campaigns and to provide
            personalised content.
            <br />
            For more information see our{" "}
            <a
              href="#"
              className="mb-2 text-sm cursor-pointer font-semibold transition-colors hover:text-[#634647] underline underline-offset-2"
            >
              Privacy Policy
            </a>
          </p>

          <button className="mb-2 text-sm mr-auto text-zinc-600 cursor-pointer font-semibold transition-colors hover:text-[#634647] hover:underline underline-offset-2">
            More Options
          </button>

          <button
            className="absolute font-semibold right-6 bottom-6 cursor-pointer py-2 px-8 w-max break-keep text-sm rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
            type="button"
          >
            Accept
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Card

