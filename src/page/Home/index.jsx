
import Style from './Style.module.css'
const Home = () => {
  return (
    <div className="h-screen">
      <div className={`${Style.firstImage} h-1/3 w-full`}>
         <span className="text-white text-2xl font-bold">I&apos;m your private doctor</span>
      </div>
      <div className={`${Style.secondImage} h-1/3 w-full`}>
        <span className="text-white text-2xl font-bold">form</span> 
        <button>چت با ai</button>
        <button>فرم پزشکی</button>
      </div>
    </div>
  )
}

export default Home
