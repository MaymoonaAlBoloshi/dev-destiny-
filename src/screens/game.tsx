import { useRef, useState } from 'react'
import { Piller } from '../components/piller'
// rename file to cmo-events
import { } from '../data/cto-events'
import { CTOEvents } from '../data/cto-events'

function Game() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [employeesScore, setEmployeesScore] = useState(50)
  const [customersScore, setCustomersScore] = useState(50)
  const [investorsScore, setInvestorsScore] = useState(50)
  const [competetorsScore, setCompetetorsScore] = useState(50)

  const handleMouseEnter = (isRight: boolean) => {
    if (cardRef.current) {
      cardRef.current.style.transform = isRight ? 'rotate(25deg)' : 'rotate(-25deg)';
      cardRef.current.style.boxShadow = isRight ? '0 0 40px #059669' : '0 0 40px #991b1b';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotate(0deg)';
      cardRef.current.style.boxShadow = 'none';
      cardRef.current.style.opacity = '1';
    }
  };


  const handleClick = () => {
    if (cardRef.current) {
      cardRef.current.style.opacity = '0.2';
      cardRef.current.style.transform = 'scale(0.8)';
    }
  }
  return (
    <div className="flex flex-col w-screen h-screen">
      <header className=" flex justify-between px-44 basis-1/12 bg-black text-white text-md p-4">
        <Piller color="emerald" score={employeesScore} />
        <Piller color="rose" score={investorsScore} />
        <Piller color="yellow" score={competetorsScore} />
        <Piller color="violet" score={customersScore} />
      </header>
      <main className="flex justify-center items-center gap-12 basis-11/12 bg-black text-md text-white p-4">
        <button onMouseEnter={() => handleMouseEnter(false)}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          className="border-2 border-rose-600 px-2 text-rose-300 py-1 hover:px-3 duration-700 hover:py-2">
          decline
        </button>
        <div ref={cardRef} className="flex flex-col items-center gap-2 flex-row w-64 h-96 border-2 border-yellow-50 transition-all duration-700">
          <p className="text-yellow-200 w-full p-4 text-center">Character</p>
          <img className="w-36" src="https://via.placeholder.com/64" alt="character" />
          <p className="italic text-sm text-center text-yellow-50">
            <span className="text-yellow-200 text-2xl">"</span>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            <span className="text-yellow-200 text-2xl m-b-2">"</span>
          </p>
        </div>
        <button onMouseEnter={() => handleMouseEnter(true)}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          className="border-2 border-emerald-600 px-2 text-emerald-300  py-1 hover:px-3 duration-700 hover:py-2">
          Accept
        </button>
      </main>
    </div >
  )
}

export default Game
//TODO: add audio button with icon
//TODO: add character events
