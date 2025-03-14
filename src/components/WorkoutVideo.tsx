import React from 'react';
import { XIcon } from 'lucide-react';
interface WorkoutVideoProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}
const WorkoutVideo = ({
  isOpen,
  onClose,
  videoId,
  title
}: WorkoutVideoProps) => {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-xl shadow-lg max-w-4xl w-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="relative pt-[56.25%]">
            <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>;
};
export default WorkoutVideo;