import React, { useState } from 'react';
import { ClockIcon, DumbbellIcon, PlayIcon } from 'lucide-react';
import WorkoutVideo from './WorkoutVideo';
interface WorkoutCardProps {
  title: string;
  duration: string;
  exercises: number;
  time: string;
  videoId?: string; // YouTube video ID
}
const WorkoutCard = ({
  title,
  duration,
  exercises,
  time,
  videoId = 'dQw4w9WgXcQ' // Default video as fallback
}: WorkoutCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  return <>
      <div className="border border-gray-200 rounded-lg p-4 mb-3">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>{duration}</span>
              <span className="mx-2">•</span>
              <DumbbellIcon className="h-4 w-4 mr-1" />
              <span>{exercises} exercises</span>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600">{time}</span>
        </div>
        <button onClick={() => setShowVideo(true)} className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center">
          <PlayIcon className="h-4 w-4 mr-2" />
          Start Workout
        </button>
      </div>
      <WorkoutVideo isOpen={showVideo} onClose={() => setShowVideo(false)} videoId={videoId} title={title} />
    </>;
};
export default WorkoutCard;