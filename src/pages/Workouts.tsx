import React, { useState } from 'react';
import { PlusIcon, FilterIcon, SearchIcon } from 'lucide-react';
const Workouts = () => {
  const workoutCategories = [{
    name: 'All',
    count: 24,
    active: true
  }, {
    name: 'Strength',
    count: 8,
    active: false
  }, {
    name: 'Cardio',
    count: 6,
    active: false
  }, {
    name: 'Flexibility',
    count: 4,
    active: false
  }, {
    name: 'HIIT',
    count: 6,
    active: false
  }];
  const workouts = [{
    id: 1,
    title: 'Upper Body Strength',
    category: 'Strength',
    duration: '45 min',
    difficulty: 'Intermediate',
    videoId: 'IODxDxX7oi4',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 2,
    title: '30-Minute HIIT',
    category: 'HIIT',
    duration: '30 min',
    difficulty: 'Advanced',
    videoId: 'ml6cT4AZdqI',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
  }, {
    id: 3,
    title: 'Core Crusher',
    category: 'Strength',
    duration: '20 min',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 4,
    title: 'Morning Yoga Flow',
    category: 'Flexibility',
    duration: '35 min',
    difficulty: 'All Levels',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 5,
    title: '5K Run Training',
    category: 'Cardio',
    duration: '50 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 6,
    title: 'Lower Body Blast',
    category: 'Strength',
    duration: '40 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
  }];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    difficulty: 'all',
    duration: 'all'
  });
  const filteredWorkouts = workouts.filter(workout => {
    const matchesCategory = activeCategory === 'All' || workout.category === activeCategory;
    const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = filters.difficulty === 'all' || workout.difficulty.toLowerCase() === filters.difficulty;
    const matchesDuration = filters.duration === 'all' || filters.duration === 'short' && parseInt(workout.duration) <= 30 || filters.duration === 'medium' && parseInt(workout.duration) > 30 && parseInt(workout.duration) <= 45 || filters.duration === 'long' && parseInt(workout.duration) > 45;
    return matchesCategory && matchesSearch && matchesDifficulty && matchesDuration;
  });
  const FilterPanel = () => <div className={`bg-white rounded-lg shadow-lg p-4 absolute right-0 mt-2 z-10 w-64 ${showFilters ? '' : 'hidden'}`}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Difficulty
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2" value={filters.difficulty} onChange={e => setFilters(prev => ({
          ...prev,
          difficulty: e.target.value
        }))}>
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2" value={filters.duration} onChange={e => setFilters(prev => ({
          ...prev,
          duration: e.target.value
        }))}>
            <option value="all">Any Duration</option>
            <option value="short">30 min or less</option>
            <option value="medium">31-45 min</option>
            <option value="long">More than 45 min</option>
          </select>
        </div>
      </div>
    </div>;
  return <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Workouts
        </h1>
        <div className="flex space-x-3">
          <div className="relative flex-1 md:w-64">
            <input type="text" placeholder="Search workouts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <SearchIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="relative">
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
              <FilterIcon className="h-5 w-5 mr-2" />
              <span>Filter</span>
            </button>
            <FilterPanel />
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            <span>Create</span>
          </button>
        </div>
      </div>
      {/* Categories */}
      <div className="flex overflow-x-auto pb-2 mb-6 -mx-4 px-4 md:px-0 md:mx-0">
        <div className="flex space-x-3">
          {workoutCategories.map(category => <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`px-4 py-2 rounded-full flex items-center whitespace-nowrap ${activeCategory === category.name ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <span>{category.name}</span>
              <span className="ml-2 text-xs bg-white px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            </button>)}
        </div>
      </div>
      {/* Workouts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map(workout => <div key={workout.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{
          backgroundImage: `url(${workout.image})`
        }}></div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {workout.title}
                  </h3>
                  <p className="text-sm text-gray-500">{workout.duration}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                  {workout.difficulty}
                </span>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start Workout
              </button>
            </div>
          </div>)}
      </div>
    </div>;
};
export default Workouts;