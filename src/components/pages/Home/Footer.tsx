function Footer() {
    return (
        <footer className=" p-8 md:p-12 lg:w-full border-t border-gray-200 ">
            
            <div className="max-w-7xl mx-auto"> 

                <div className="grid grid-cols-1 justiy-center md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-gray-200">
                    
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-semibold">BeninTravel</h1>
                        <p className="text-gray-400 text-sm">Your gateway to the heart of West Africa</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-lg font-medium">Quick Links</h1>
                        <ul className="flex flex-col gap-2">
                            <li className="text-gray-400 text-sm hover:text-white cursor-pointer">Contact</li>
                            <li className="text-gray-400 text-sm hover:text-white cursor-pointer">FAQ</li>
                            <li className="text-gray-400 text-sm hover:text-white cursor-pointer">Terms or Service</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-lg font-medium">Connect</h1>
                        <ul className="flex flex-row gap-4"> 
                            <li className="text-gray-400 text-sm hover:text-white cursor-pointer">FB</li>
                            <li className="text-gray-400 text-sm hover:text-white cursor-pointer">IG</li>
                            <li className="text-gray-400 text-sm hover:text-white cursor-pointer">TW</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4">
                    <p className="text-center text-xs text-gray-500">
                        &copy; 2024 BeninTravel. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;