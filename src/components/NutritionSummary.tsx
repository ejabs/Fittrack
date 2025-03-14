import React from 'react';
const NutritionSummary = () => {
  const nutritionData = {
    calories: {
      consumed: 1450,
      goal: 2000
    },
    protein: {
      consumed: 95,
      goal: 120
    },
    carbs: {
      consumed: 145,
      goal: 200
    },
    fat: {
      consumed: 45,
      goal: 65
    }
  };
  return <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Calories */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Calories</span>
            <span className="text-sm text-gray-500">
              {nutritionData.calories.consumed} / {nutritionData.calories.goal}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{
            width: `${nutritionData.calories.consumed / nutritionData.calories.goal * 100}%`
          }}></div>
          </div>
        </div>
        {/* Protein */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Protein</span>
            <span className="text-sm text-gray-500">
              {nutritionData.protein.consumed}g / {nutritionData.protein.goal}g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{
            width: `${nutritionData.protein.consumed / nutritionData.protein.goal * 100}%`
          }}></div>
          </div>
        </div>
        {/* Carbs */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Carbs</span>
            <span className="text-sm text-gray-500">
              {nutritionData.carbs.consumed}g / {nutritionData.carbs.goal}g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{
            width: `${nutritionData.carbs.consumed / nutritionData.carbs.goal * 100}%`
          }}></div>
          </div>
        </div>
        {/* Fat */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Fat</span>
            <span className="text-sm text-gray-500">
              {nutritionData.fat.consumed}g / {nutritionData.fat.goal}g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{
            width: `${nutritionData.fat.consumed / nutritionData.fat.goal * 100}%`
          }}></div>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Today's Meals
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-800">Breakfast</p>
              <p className="text-xs text-gray-500">
                Oatmeal with berries and nuts
              </p>
            </div>
            <span className="text-sm font-medium text-gray-600">320 kcal</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-800">Lunch</p>
              <p className="text-xs text-gray-500">Grilled chicken salad</p>
            </div>
            <span className="text-sm font-medium text-gray-600">450 kcal</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-800">Snack</p>
              <p className="text-xs text-gray-500">Greek yogurt with honey</p>
            </div>
            <span className="text-sm font-medium text-gray-600">180 kcal</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-800">Dinner</p>
              <p className="text-xs text-gray-500">Salmon with vegetables</p>
            </div>
            <span className="text-sm font-medium text-gray-600">500 kcal</span>
          </div>
        </div>
      </div>
    </div>;
};
export default NutritionSummary;