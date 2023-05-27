import { useState, useEffect } from "react";
import { PillerType } from "../types/pillers";
interface PillerProps {
  color: 'emerald' | 'rose' | 'yellow' | 'violet';
  score: number;
  piller: keyof typeof PillerType;
}

export const Piller = ({ color, score, piller }: PillerProps) => {
  const [scoreState, setScoreState] = useState<number>(score)
  const [displayUp, setDisplayUp] = useState<boolean>(false)
  const [displayDown, setDisplayDown] = useState<boolean>(false)

  const height = 100 - score;

  let borderColor = ''
  let bgColor = ''
  let textColor = ''
  switch (color) {
    case 'emerald':
      borderColor = 'border-emerald-200'
      bgColor = 'bg-emerald-300'
      textColor = 'text-emerald-300'
      break;
    case 'rose':
      borderColor = 'border-rose-200'
      bgColor = 'bg-rose-300'
      textColor = 'text-rose-300'
      break;
    case 'yellow':
      borderColor = 'border-yellow-200'
      bgColor = 'bg-yellow-300'
      textColor = 'text-yellow-300'
      break;
    case 'violet':
      borderColor = 'border-violet-200'
      bgColor = 'bg-violet-300'
      textColor = 'text-violet-300'
      break;
    default:
  }

  useEffect(() => {
    // managing the display of score indicators
    if (scoreState < score) {
      setTimeout(() => {
        setDisplayDown(false)
      }, 2000)
      setDisplayDown(true)
    } else {
      setTimeout(() => {
        setDisplayUp(false)
      }, 2000)
      setDisplayUp(true)
    }
    setScoreState(score)
  }, [score])

  return (
    <div className="flex flex-col items-center relative">
      <div className={`border-2 ${borderColor} w-6 h-24  ${bgColor} duration-300 rounded-xl`}>
        <div
          style={{ height: `${height}%` }}
          className={`w-6 bg-black rounded-t-xl rounded-lg border-b-4 border-white`}>
        </div>
      </div>
      <p className={`${textColor} text-center`}>{score}</p>
      <span className={`${textColor} lowercase`} style={{
        fontSize: '0.5rem',
        fontWeight: 'bold',
        position: 'absolute',
        right: '-1rem',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
      }}>{piller}{'s'} </span>
      {displayUp && <svg className="text-red-400 animate-bounce" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 12L0 4h15l-7.5 8Z" /></svg>}
      {displayDown && <svg className="text-green-400 animate-bounce" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="m7.5 3l7.5 8H0l7.5-8Z" /></svg>}
    </div>
  )
}

Piller.defaultProps = {
  color: 'emerald',
  score: 30,
  piller: PillerType.INVESTOR,
}
