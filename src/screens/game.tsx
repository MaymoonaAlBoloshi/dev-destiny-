import { useEffect, useRef, useState } from 'react'
import { Piller } from '../components/piller'
import { ChoiceCard } from '../components/choiceCard.tsx'

import { CMOEvents } from '../data/cmo-events'
import { CTOEvents } from '../data/cto-events'
import { characters } from '../data/characters.ts'
import { CharacterEvent, Event } from '../types/character-event.ts'
import { PillerType } from '../types/pillers.ts'


const eventsLength = (eventList: any) => eventList.events.length

function Game() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [employeesScore, setEmployeesScore] = useState(50)
  const [customersScore, setCustomersScore] = useState(50)
  const [investorsScore, setInvestorsScore] = useState(50)
  const [competetorsScore, setCompetetorsScore] = useState(50)
  const [randomCharacter, setRandomCharacter] = useState(1) // instead of number lets have the character object
  const [randomEvent, setRandomEvent] = useState<Event>()
  const [eventList, setEventList] = useState<CharacterEvent>(CTOEvents)
  const [characterImage, setCharacterImage] = useState<string>('')

  const getRandomCharacter = () => {
    const random = Math.floor(Math.random() * 2) + 1
    setRandomCharacter(random)
  }

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

      const charImage = isRight ? characters.find((char) => char.shortName === eventList.character)?.imagePositive
        : characters.find((char) => char.shortName === eventList.character)?.imageNegative
      setCharacterImage(charImage || '')
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotate(0deg)';
      cardRef.current.style.boxShadow = 'none';
      cardRef.current.style.opacity = '1';
      const charImage = characters.find((char) => char.shortName === eventList.character)?.imageUrl
      setCharacterImage(charImage || '')
    }
  };


  const cardAnimate = () => {
    if (cardRef.current) {
      cardRef.current.style.opacity = '0.2';
      cardRef.current.style.transform = 'scale(0.8)';
    }
  }

  const handleGameOver = () => {
    console.log('game over')
  }

  const handlConcequeses = () => {
    // if score is 0 or less game over
    employeesScore <= 0 && handleGameOver()
    customersScore <= 0 && handleGameOver()
    investorsScore <= 0 && handleGameOver()
    competetorsScore <= 0 && handleGameOver()
    // if score is 100 or more game over
    employeesScore >= 100 && handleGameOver()
    customersScore >= 100 && handleGameOver()
    investorsScore >= 100 && handleGameOver()
    competetorsScore >= 100 && handleGameOver()

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
    // disable button events 

    setTimeout(() => {
      getRandomCharacter()
    }, 1000)
  }

  const hadleDecline = () => {
    cardAnimate()
    const effects = randomEvent?.RejectEffects || []
    effects.forEach((effect) => {
      pillerScoreUpate(effect.effect, effect.pillerName as PillerType)
    })

    setTimeout(() => {
      getRandomCharacter()
    }, 1000)
  }

  const handleCardDrage = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.clientX > event.screenX) {
      console.log('right')
    } else {
      console.log('left')
    }
  }

  useEffect(() => {
    getRandomCharacter()
  }, [])

  useEffect(() => {
    randEventListSelector()
  }, [randomCharacter])

  useEffect(() => {
    if (eventList) {
      const rand = Math.floor(Math.random() * eventsLength(eventList))
      const charImage: string = characters.find((char) => char.shortName === eventList.character)?.imageUrl || 'https://imgur.com/LOXE3XD'
      setCharacterImage(charImage)
      setRandomEvent(eventList.events[rand])
    }
  }, [eventList])

  useEffect(() => {
    handlConcequeses()
  }, [employeesScore, customersScore, investorsScore, competetorsScore])


  return (
    <div className="flex flex-col w-screen h-screen">
      <header className=" flex justify-between px-44 basis-1/12 bg-black text-white text-md p-4">
        <Piller color="emerald" score={employeesScore} piller='EMPLOYEE' />
        <Piller color="rose" score={investorsScore} piller='INVESTOR' />
        <Piller color="yellow" score={competetorsScore} piller='COMPETITOR' />
        <Piller color="violet" score={customersScore} piller='CUSTOMER' />
      </header>
      <main className="flex justify-center items-center gap-12 basis-11/12 bg-black text-md text-white p-4">
        <button onMouseEnter={() => handleMouseEnter(false)}
          onClick={hadleDecline}
          onMouseLeave={handleMouseLeave}
          className="border-2 border-rose-600 px-2 text-rose-300 py-1 hover:px-3 duration-700 hover:py-2">
          decline
        </button>
        <ChoiceCard
          cardRef={cardRef}
          event={randomEvent as Event}
          eventList={eventList}
          characterImage={characterImage}
          handleCardDrage={handleCardDrage}
          animateCard={handleMouseEnter}
          clearCardAnimation={handleMouseLeave}
        />
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
//TODO: add initial menu screen
//TODO: add character events 4/7
//TODO: add character images 2/7
//TODO: add character color
