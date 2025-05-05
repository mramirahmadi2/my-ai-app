import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function PrivateChat() {
    const [message, setMessage] = useState('');

    const messages = [
        // 'با استفاده از فرم اطلاعاتت را به من بده',
        // 'از امکانات صوتی من استفاده کن',
        'از زندگی روزمره خودت و تغذیه‌ات به من بگو تا من بهت بگم در معرض چه بیماری‌هایی هستی و کمک کنم که دچار این بیماری‌ها نشی!!',
        'من در خدمت شما هستم! 😊'
    ];

    const handleSend = () => {
        if (message.trim()) {
            console.log('Sent message:', message);
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col justify-between h-screen bg-blue-200 p-4">
            {/* Centered Chat Messages */}
            <div className="flex-grow flex items-center justify-center ">
                <div className="flex flex-col gap-3 items-center">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className="md:w-[500px] text-center px-4 py-2 bg-white rounded-2xl  leading-relaxed"
                            dir="rtl"
                        >
                            {msg}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Input */}
            <div className="mt-4">
                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full">
                    <input
                        type="text"
                        placeholder="پیام خود را تایپ کنید..."
                        className="flex-grow bg-transparent outline-none text-right placeholder:text-gray-400"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        dir="rtl"
                    />
                    <button
                        onClick={handleSend}
                        className="text-blue-600 hover:text-blue-800 transition p-2"
                        aria-label="Send"
                    >
                        <FaPaperPlane className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrivateChat;
