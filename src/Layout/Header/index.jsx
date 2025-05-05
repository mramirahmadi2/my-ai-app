import React from 'react';

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
            <nav className="max-w-[85rem] mx-auto px-4 py-3 flex justify-between items-center">
                {/* برند */}
                <a href="/" className="text-xl font-bold">
                    مشاور پزشکی برای تو
                </a>

                {/* منو */}
                <div className="flex items-center gap-x-6">
                    <a href="/" className="text-gray-700 hover:text-blue-500">
                        خانه
                    </a>

                    {/* 👇 Dropdown wrapper */}
                    <div className="relative group">
                        {/* clickable or hover target */}
                        <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
                            حساب کاربری
                        </div>

                        {/* 👇 Dropdown menu — stays open while hovering it */}
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50 text-right">
                            <a
                                href="/edit-profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                ویرایش اطلاعات
                            </a>
                            <a
                                href="/logout"
                                onClick={()=>{localStorage.removeItem("isAuthenticated");}}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                خروج از حساب کاربری
                            </a>
                        </div>
                    </div>

                    <a href="/about" className="text-gray-700 hover:text-blue-500">
                        درباره ما
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
