
import Style from './Style.module.css'
import Button from "../../components/Button.jsx";
import {useNavigate} from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
        <div className={`${Style.firstImage} h-1/3 w-full flex flex-col`}>
            <span className="text-white text-2xl font-bold ">I&apos;m your private doctor</span>
            <div
                className="w-full flex flex-col gap-4 mt-3 sm:flex-row sm:justify-center items-center sm:gap-6 px-4">
                <Button
                    variant="primary"
                    onClick={() => navigate('/medicine-form')}
                    className="w-full sm:w-auto text-center"
                >
                    فرم پزشکی
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => navigate('/new-chat')}
                    className="w-full sm:w-auto text-center"
                >
                    چت خصوصی
                </Button>
            </div>

        </div>
        <div className={`${Style.secondImage} h-1/3 w-full`}>
            {/*<span className="text-white text-2xl font-bold">form</span> */}
            {/*<button>چت با ai</button>*/}
            {/*<button>فرم پزشکی</button>*/}
        </div>
    </div>
  )
}

export default Home
