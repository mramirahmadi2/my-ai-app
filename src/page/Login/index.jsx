import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../assets/login/img2.webp"; // 📌 مسیر تصویر

const Login = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "نام کاربری حداقل باید ۳ کاراکتر باشد")
      .required("نام کاربری الزامی است"),
    password: Yup.string()
      .min(6, "رمز عبور حداقل باید ۶ کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("ورودی‌های فرم:", values);
      alert("ورود با موفقیت انجام شد!");
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }} // 📌 تنظیم پس‌زمینه
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-xl shadow-lg ">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">ورود به حساب کاربری</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6 text-right">
          {/* فیلد نام کاربری */}
          <div>
            <label className="block text-sm font-medium text-gray-700">نام کاربری</label>
            <input
              type="text"
              name="username"
              className={`mt-1 block w-full px-4 py-2 border ${
                formik.touched.username && formik.errors.username ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-2 ${
                formik.touched.username && formik.errors.username ? "focus:ring-red-500" : "focus:ring-blue-500"
              } focus:border-transparent text-right`}
              placeholder="نام کاربری خود را وارد کنید"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
            ) : null}
          </div>

          {/* فیلد رمز عبور */}
          <div>
            <label className="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input
              type="password"
              name="password"
              className={`mt-1 block w-full px-4 py-2 border ${
                formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-2 ${
                formik.touched.password && formik.errors.password ? "focus:ring-red-500" : "focus:ring-blue-500"
              } focus:border-transparent text-right`}
              placeholder="رمز عبور خود را وارد کنید"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            ) : null}
          </div>

          {/* دکمه ورود */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 shadow-md"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
