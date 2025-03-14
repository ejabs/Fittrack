import React from 'react';
import { CalendarIcon, FlameIcon, HeartIcon, FootprintsIcon, TrendingUpIcon } from 'lucide-react';
import ActivityChart from '../components/charts/ActivityChart';
import WorkoutCard from '../components/WorkoutCard';
import NutritionSummary from '../components/NutritionSummary';
const Dashboard = () => {
  return <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <span className="text-gray-600 font-medium">
            Today, {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <FlameIcon className="h-6 w-6 text-red-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Calories Burned</p>
              <p className="text-xl font-bold text-gray-800">486</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <HeartIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Avg. Heart Rate</p>
              <p className="text-xl font-bold text-gray-800">72 bpm</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <FootprintsIcon className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Steps</p>
              <p className="text-xl font-bold text-gray-800">8,942</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUpIcon className="h-6 w-6 text-purple-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Minutes</p>
              <p className="text-xl font-bold text-gray-800">124</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Weekly Activity
          </h2>
          <ActivityChart />
        </div>
        {/* Upcoming Workout */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Today's Workout
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <WorkoutCard title="Upper Body Strength" duration="45 min" exercises={5} time="10:00 AM" />
        </div>
      </div>
      {/* Nutrition Summary */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Nutrition Summary
          </h2>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Add Meal
          </button>
        </div>
        <NutritionSummary />
      </div>
    </div>;
};
export default Dashboard;