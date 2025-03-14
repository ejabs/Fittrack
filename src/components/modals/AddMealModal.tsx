import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
interface AddMealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (mealData: any) => void;
}
const AddMealModal = ({
  isOpen,
  onClose,
  onSubmit
}: AddMealModalProps) => {
  const [mealData, setMealData] = useState({
    name: '',
    type: 'Breakfast',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(mealData);
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30"></div>
        <div className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Add Meal</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meal Name
                </label>
                <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md" value={mealData.name} onChange={e => setMealData({
                ...mealData,
                name: e.target.value
              })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meal Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md" value={mealData.type} onChange={e => setMealData({
                ...mealData,
                type: e.target.value
              })}>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Snack</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Calories
                  </label>
                  <input type="number" required className="w-full px-3 py-2 border border-gray-300 rounded-md" value={mealData.calories} onChange={e => setMealData({
                  ...mealData,
                  calories: e.target.value
                })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Protein (g)
                  </label>
                  <input type="number" required className="w-full px-3 py-2 border border-gray-300 rounded-md" value={mealData.protein} onChange={e => setMealData({
                  ...mealData,
                  protein: e.target.value
                })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Carbs (g)
                  </label>
                  <input type="number" required className="w-full px-3 py-2 border border-gray-300 rounded-md" value={mealData.carbs} onChange={e => setMealData({
                  ...mealData,
                  carbs: e.target.value
                })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fat (g)
                  </label>
                  <input type="number" required className="w-full px-3 py-2 border border-gray-300 rounded-md" value={mealData.fat} onChange={e => setMealData({
                  ...mealData,
                  fat: e.target.value
                })} />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add Meal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
export default AddMealModal;