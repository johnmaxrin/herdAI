function Card() {
    return (

       
        <div class="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
            <div class="text-black font-sans text-4xl font-bold">Herd <span class="font-thin">Ai</span></div>
            
            <p class="mt-4 text-xs font-medium text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            
            <div class="mt-4">
                <ul class="space-y-4">
                    <li class="flex items-center">
                        <svg class="w-6 h-6 flex-none fill-gray-100 stroke-gray-700 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="11" />
                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        <p class="ml-2 text-sm">
                            Customizing your
                        </p>
                    </li>

                    <li class="flex items-center">
                        <svg class="w-6 h-6 flex-none fill-gray-100 stroke-gray-700 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="11" />
                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        <p class="ml-2 text-sm">
                            Customizing your
                        </p>
                    </li>

                    <li class="flex items-center">
                        <svg class="w-6 h-6 flex-none fill-gray-100 stroke-gray-700 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="11" />
                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        <p class="ml-2 text-sm">
                            Customizing your
                        </p>
                    </li>
                </ul>

            </div>

            
            <p class="mt-4 text-xs font-medium text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>

            <div class="divider"></div> 
            <div class=" flex justify-end gap-4">
                <button class="bg-black hover:bg-white hover:shadow-md hover:text-black text-sm p-2 rounded-md text-white mt-8">
                    Learn More
                </button>

                <button class=" bg-black hover:shadow-md hover:bg-white hover:text-black text-sm p-2 rounded-md text-white mt-8">
                    Try Demo for free
                </button>
            </div>
           
 
        </div>



    );
}

export default Card;
