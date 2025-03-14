import React, { useState } from 'react';
import { PlusIcon, CalendarIcon } from 'lucide-react';
import AddMealModal from '../components/modals/AddMealModal';
const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'];
const Nutrition = () => {
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState('All');
  const [meals, setMeals] = useState([{
    id: 1,
    type: 'Breakfast',
    name: 'Oatmeal with Berries',
    calories: 320,
    protein: 12,
    carbs: 58,
    fat: 6,
    time: '8:00 AM',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
  }, {
    id: 2,
    type: 'Lunch',
    name: 'Grilled Chicken Salad',
    calories: 450,
    protein: 35,
    carbs: 25,
    fat: 22,
    time: '12:30 PM',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
  }, {
    id: 3,
    type: 'Snack',
    name: 'Greek Yogurt with Honey',
    calories: 180,
    protein: 18,
    carbs: 15,
    fat: 5,
    time: '3:30 PM',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
  }, {
    id: 4,
    type: 'Dinner',
    name: 'Salmon with Roasted Vegetables',
    calories: 500,
    protein: 30,
    carbs: 45,
    fat: 20,
    time: '7:00 PM',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
  }]);
  const handleAddMeal = (mealData: any) => {
    const newMeal = {
      id: meals.length + 1,
      ...mealData,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    };
    setMeals([...meals, newMeal]);
  };
  const filteredMeals = selectedMealType === 'All' ? meals : meals.filter(meal => meal.type === selectedMealType);
  return <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Nutrition Tracker</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
            <span>Today</span>
          </button>
          <button onClick={() => setShowAddMeal(true)} className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            <span>Add Meal</span>
          </button>
        </div>
      </div>
      {/* Nutrition Summary */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Daily Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Calories */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                Calories
              </span>
              <span className="text-sm text-gray-500">1450 / 2000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{
              width: '72.5%'
            }}></div>
            </div>
            <div className="mt-1 text-xs text-gray-500 text-right">
              72% of daily goal
            </div>
          </div>
          {/* Protein */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Protein</span>
              <span className="text-sm text-gray-500">95g / 120g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{
              width: '79%'
            }}></div>
            </div>
            <div className="mt-1 text-xs text-gray-500 text-right">
              79% of daily goal
            </div>
          </div>
          {/* Carbs */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Carbs</span>
              <span className="text-sm text-gray-500">145g / 200g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{
              width: '72.5%'
            }}></div>
            </div>
            <div className="mt-1 text-xs text-gray-500 text-right">
              72% of daily goal
            </div>
          </div>
          {/* Fat */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Fat</span>
              <span className="text-sm text-gray-500">45g / 65g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{
              width: '69%'
            }}></div>
            </div>
            <div className="mt-1 text-xs text-gray-500 text-right">
              69% of daily goal
            </div>
          </div>
        </div>
      </div>
      {/* Meals */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Today's Meals</h2>
          <div className="flex space-x-2">
            {mealTypes.map(type => <button key={type} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                {type}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMeals.map(meal => <div key={meal.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex">
              <div className="w-24 bg-cover bg-center" style={{
            backgroundImage: `url(${meal.image})`
          }}></div>
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded mb-1 inline-block">
                      {meal.type}
                    </span>
                    <h3 className="font-semibold text-gray-800">{meal.name}</h3>
                  </div>
                  <span className="text-sm text-gray-500">{meal.time}</span>
                </div>
                <div className="mt-2 flex space-x-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">
                      {meal.calories}
                    </span>
                    <span className="text-gray-500"> kcal</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      {meal.protein}g
                    </span>
                    <span className="text-gray-500"> protein</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      {meal.carbs}g
                    </span>
                    <span className="text-gray-500"> carbs</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      {meal.fat}g
                    </span>
                    <span className="text-gray-500"> fat</span>
                  </div>
                </div>
              </div>
            </div>)}
          <button className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center h-24 hover:bg-gray-50">
            <PlusIcon className="h-6 w-6 text-gray-400 mb-1" />
            <span className="text-gray-500">Add another meal</span>
          </button>
        </div>
      </div>
      {/* Recommended Meals */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-cover bg-center" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`
          }}></div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800">
                  Healthy Veggie Bowl
                </h3>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">380 kcal</span>
                  <span className="text-blue-600 font-medium">Add +</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <AddMealModal isOpen={showAddMeal} onClose={() => setShowAddMeal(false)} onSubmit={handleAddMeal} />
    </div>;
};
export default Nutrition;