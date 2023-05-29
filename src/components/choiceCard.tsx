import { useState } from 'react';
import { CharacterEvent, Event } from '../types/character-event'

interface ChoiceCardProps {
  characterImage: string;
  eventList: CharacterEvent;
  event: Event;
  handleCardDrage: (e: React.DragEvent<HTMLDivElement>) => void;
  cardRef: React.RefObject<HTMLDivElement>;
  animateCard: (isRight: boolean) => void;
  clearCardAnimation: () => void;
}

export const ChoiceCard = ({ characterImage, eventList, event, handleCardDrage, cardRef, animateCard, clearCardAnimation }: ChoiceCardProps) => {
  const [lastX, setLastX] = useState(0);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const dragImgEl = new Image();
    dragImgEl.src = '';
    e.dataTransfer.setDragImage(dragImgEl, 0, 0);
    setLastX(e.clientX);
  };


  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.clientX > lastX) {
      console.log('Dragging right', e.clientX - lastX);
      animateCard(true)
    } else if (e.clientX < lastX) {
      console.log('Dragging left');
      animateCard(false)
    }
    setLastX(e.clientX);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    clearCardAnimation()
  };

  return (
    <div
      draggable
      onDrag={handleDrag}
      onDragEnter={handleDragStart}
      onDragEnd={handleDragEnd}
      ref={cardRef}
      className="flex flex-col items-center gap-2 flex-row w-64 h-96 border-2 border-yellow-50 transition-all duration-700 rounded-xl select-none">
      <p className="text-yellow-200 w-full p-4 text-center">{eventList.character}</p>
      <img id="char-image" className="w-36 rounded" src={characterImage} alt="character" />
      <p className="italic text-sm text-center text-yellow-50 px-2">
        <span className="text-yellow-200 text-2xl abosolute">"</span>
        {event && event.event}
        <span className="text-yellow-200 text-2xl m-b-2 abosolute">"</span>
      </p>
    </div>
  )
}
