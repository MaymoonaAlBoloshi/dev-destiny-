import { useEffect, useRef, useState } from 'react'
import { Piller } from '../components/piller'
import { CMOEvents } from '../data/cmo-events'
import { CTOEvents } from '../data/cto-events'
import { CharacterEvent, Event } from '../types/character-event.ts'
import { PillerType } from '../types/pillers.ts'


const eventsLength = (eventList: any) => eventList.events.length

function Game() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [employeesScore, setEmployeesScore] = useState(50)
  const [customersScore, setCustomersScore] = useState(50)
  const [investorsScore, setInvestorsScore] = useState(50)
  const [competetorsScore, setCompetetorsScore] = useState(50)
  const [randomCharacter, setRandomCharacter] = useState(1)
  const [randomEvent, setRandomEvent] = useState<Event>()

  const [eventList, setEventList] = useState<CharacterEvent>(CTOEvents)

  const randEventListSelector = () => {
    switch (randomCharacter) {
      case 1:
        setEventList(CMOEvents)
        break;
      case 2:
        setEventList(CTOEvents)
        break;
      default:
        break;
    }
  }

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


  const cardAnimate = () => {
    if (cardRef.current) {
      cardRef.current.style.opacity = '0.2';
      cardRef.current.style.transform = 'scale(0.8)';
    }
  }

  const pillerScoreUpate = (score: number, pillerName: PillerType) => {
    switch (pillerName) {
      case PillerType.EMPLOYEE:
        setEmployeesScore(employeesScore + score)
        break;
      case PillerType.CUSTOMER:
        setCustomersScore(customersScore + score)
        break;
      case PillerType.INVESTOR:
        setInvestorsScore(investorsScore + score)
        break;
      case PillerType.COMPETITOR:
        setCompetetorsScore(competetorsScore + score)
        break;
      default:
        break;
    }
  }

  const handleAccept = () => {
    cardAnimate()
    const effects = randomEvent?.AcceptEffects || []
    effects.forEach((effect) => {
      pillerScoreUpate(effect.effect, effect.pillerName as PillerType)
    })
    return true
  }

  const hadleDecline = () => {
    cardAnimate()
    const effects = randomEvent?.RejectEffects || []
    effects.forEach((effect) => {
      pillerScoreUpate(effect.effect, effect.pillerName as PillerType)
    })
    return true
  }

  useEffect(() => {
    const random = Math.floor(Math.random() * 2) + 1
    setRandomCharacter(random)
  }, [])

  useEffect(() => {
    randEventListSelector()
  }, [randomCharacter])

  useEffect(() => {
    if (eventList) {
      const rand = Math.floor(Math.random() * eventsLength(eventList))
      setRandomEvent(eventList.events[rand])
    }
  }, [eventList])


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
          onClick={hadleDecline}
          onMouseLeave={handleMouseLeave}
          className="border-2 border-rose-600 px-2 text-rose-300 py-1 hover:px-3 duration-700 hover:py-2">
          decline
        </button>
        <div ref={cardRef} className="flex flex-col items-center gap-2 flex-row w-64 h-96 border-2 border-yellow-50 transition-all duration-700">
          <p className="text-yellow-200 w-full p-4 text-center">{eventList.character}</p>
          <img className="w-36" src="https://via.placeholder.com/64" alt="character" />
          <p className="italic text-sm text-center text-yellow-50 px-2">
            <span className="text-yellow-200 text-2xl abosolute">"</span>
            {randomEvent && randomEvent.event}
            <span className="text-yellow-200 text-2xl m-b-2 abosolute">"</span>
          </p>
        </div>
        <button onMouseEnter={() => handleMouseEnter(true)}
          onClick={handleAccept}
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
//TODO: add character images
//TODO: add character color
