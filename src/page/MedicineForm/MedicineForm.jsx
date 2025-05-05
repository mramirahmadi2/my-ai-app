import React, { useState } from 'react';

function MedicineForm() {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        location: '',
        foodHabits: '',
        dailyActivities: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4">
            <div className="w-full max-w-xl space-y-6" dir="rtl">
                {/* Description */}
                <div className="bg-white p-4 rounded-2xl text-right leading-relaxed shadow">
                    <p>
                        با پر کردن این فرم، ما به شما می‌گوییم که در معرض چه بیماری‌هایی ممکن است قرار بگیرید
                        و راه‌حل مناسب به شما پیشنهاد خواهیم کرد. خواهشمندیم در کمال صداقت این فرم را پر کنید.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">
                    {/* Gender */}
                    <div>
                        <label className="block mb-1 font-medium">جنسیت</label>
                        <input
                            type="text"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-full border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block mb-1 font-medium">سن</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-full border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-medium">محل زندگی</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-full border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    {/* Food Habits */}
                    <div>
                        <label className="block mb-1 font-medium">عادت‌های غذایی خود را شرح دهید</label>
                        <textarea
                            name="foodHabits"
                            placeholder="عادت‌های غذایی خود را شرح دهید"
                            value={formData.foodHabits}
                            onChange={handleChange}
                            className="w-full h-24 px-4 py-2 rounded-2xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                        />
                    </div>

                    {/* Daily Activities */}
                    <div>
                        <label className="block mb-1 font-medium">کارهای روزانه خود را شرح دهید</label>
                        <textarea
                            name="dailyActivities"
                            placeholder="کارهای روزانه خود را شرح دهید"
                            value={formData.dailyActivities}
                            onChange={handleChange}
                            className="w-full h-24 px-4 py-2 rounded-2xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-green-400 hover:bg-green-500 rounded-full font-semibold"
                    >
                        ثبت
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MedicineForm;
