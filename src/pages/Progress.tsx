import React, { useState } from 'react';
import { CalendarIcon, ChevronDownIcon, ChevronUpIcon, TrendingUpIcon, UserIcon, ScaleIcon, RulerIcon } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Progress = () => {
  const [activeTab, setActiveTab] = useState('weight');
  const [timeRange, setTimeRange] = useState('1M');
  const tabs = [{
    id: 'weight',
    label: 'Weight',
    icon: <ScaleIcon className="h-5 w-5" />
  }, {
    id: 'measurements',
    label: 'Measurements',
    icon: <RulerIcon className="h-5 w-5" />
  }, {
    id: 'activity',
    label: 'Activity',
    icon: <TrendingUpIcon className="h-5 w-5" />
  }, {
    id: 'body',
    label: 'Body Stats',
    icon: <UserIcon className="h-5 w-5" />
  }];
  const timeRanges = ['1W', '1M', '3M', '6M', '1Y', 'All'];
  const weightData = [{
    date: '2023-05-01',
    value: 182
  }, {
    date: '2023-05-08',
    value: 180
  }, {
    date: '2023-05-15',
    value: 179
  }, {
    date: '2023-05-22',
    value: 178
  }, {
    date: '2023-05-29',
    value: 176
  }];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'weight':
        return <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weightData} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={date => new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })} />
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>;
      case 'measurements':
        return <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Chest', 'Waist', 'Hips', 'Arms', 'Thighs', 'Calves'].map(measurement => <div key={measurement} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">
                      {measurement}
                    </h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-800">
                        {(Math.random() * 20 + 20).toFixed(1)}
                      </span>
                      <span className="text-sm text-gray-500">inches</span>
                    </div>
                    <div className="flex items-center mt-2 text-green-500 text-sm">
                      <ChevronDownIcon className="h-4 w-4" />
                      <span>0.5" this month</span>
                    </div>
                  </div>)}
            </div>
          </div>;
      case 'activity':
        return <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Weekly Average
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Steps</span>
                      <span>8,942 / 10,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{
                      width: '89.42%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Active Minutes</span>
                      <span>45 / 60</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '75%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Workouts</span>
                      <span>4 / 5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-purple-500 h-2 rounded-full" style={{
                      width: '80%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Activity Score
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-800">8.5</span>
                  <span className="text-sm text-gray-500">/ 10</span>
                </div>
                <div className="flex items-center mt-2 text-green-500 text-sm">
                  <TrendingUpIcon className="h-4 w-4" />
                  <span>+0.3 this week</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Streak
                </h3>
                <div className="text-3xl font-bold text-gray-800">12</div>
                <div className="text-sm text-gray-500 mt-1">Active days</div>
              </div>
            </div>
          </div>;
      case 'body':
        return <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">BMI</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-800">24.8</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">Normal weight</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Body Fat %
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-800">
                    18.2%
                  </span>
                </div>
                <div className="flex items-center mt-2 text-green-500 text-sm">
                  <ChevronDownIcon className="h-4 w-4" />
                  <span>-1.5% this month</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Lean Mass
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-800">
                    143.8
                  </span>
                  <span className="text-sm text-gray-500">lbs</span>
                </div>
                <div className="flex items-center mt-2 text-green-500 text-sm">
                  <TrendingUpIcon className="h-4 w-4" />
                  <span>+2.1 lbs this month</span>
                </div>
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Progress Tracking</h1>
        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
          <span>Last 30 Days</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Current Weight</p>
              <p className="text-xl font-bold text-gray-800">176 lbs</p>
            </div>
            <div className="flex items-center text-green-500">
              <ChevronDownIcon className="h-5 w-5" />
              <span className="text-sm font-medium">6 lbs</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Body Fat</p>
              <p className="text-xl font-bold text-gray-800">18.2%</p>
            </div>
            <div className="flex items-center text-green-500">
              <ChevronDownIcon className="h-5 w-5" />
              <span className="text-sm font-medium">1.5%</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Muscle Mass</p>
              <p className="text-xl font-bold text-gray-800">65.4 lbs</p>
            </div>
            <div className="flex items-center text-green-500">
              <ChevronUpIcon className="h-5 w-5" />
              <span className="text-sm font-medium">2.1 lbs</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">BMI</p>
              <p className="text-xl font-bold text-gray-800">24.8</p>
            </div>
            <div className="flex items-center text-green-500">
              <ChevronDownIcon className="h-5 w-5" />
              <span className="text-sm font-medium">0.8</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div className="flex flex-wrap border-b mb-4">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center mr-6 py-2 border-b-2 ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>)}
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {activeTab === 'weight' ? 'Weight History' : activeTab === 'measurements' ? 'Body Measurements' : activeTab === 'activity' ? 'Activity Tracking' : 'Body Composition'}
          </h2>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {timeRanges.map(range => <button key={range} onClick={() => setTimeRange(range)} className={`px-3 py-1 text-sm rounded-md ${timeRange === range ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'}`}>
                {range}
              </button>)}
          </div>
        </div>
        {renderTabContent()}
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Measurement History
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Weight
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Body Fat
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chest
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Waist
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hips
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(5)].map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - i * 7);
              return <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {date.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {176 + i} lbs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {(18.2 + i * 0.3).toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {42 - i * 0.2} in
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {34 - i * 0.3} in
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {38 - i * 0.2} in
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default Progress;