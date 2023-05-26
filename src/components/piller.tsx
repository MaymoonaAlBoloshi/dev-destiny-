interface PillerProps {
  color: 'emerald' | 'rose' | 'yellow' | 'violet';
  score: number;
}

export const Piller = ({ color, score }: PillerProps) => {
  const height = 100 - score;

  return (
    <div>
      <div className={`border-2 border-${color}-200 w-6 h-24  bg-${color}-300 duration-300`}>
        <div
          style={{ height: `${height}%` }}
          className={`w-6 bg-black`}>
        </div>
      </div>
      <p className={`text-${color}-300 text-center`}>{score}</p>
    </div>
  )
}

Piller.defaultProps = {
  color: 'emerald',
  score: 30,
}
