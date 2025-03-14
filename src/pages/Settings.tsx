import React, { useState } from 'react';
import { UserIcon, BellIcon, ShieldIcon, HeartIcon, GlobeIcon } from 'lucide-react';
const settingsSections = [{
  id: 'profile',
  label: 'Profile',
  icon: <UserIcon className="h-5 w-5" />,
  active: true
}, {
  id: 'notifications',
  label: 'Notifications',
  icon: <BellIcon className="h-5 w-5" />,
  active: false
}, {
  id: 'privacy',
  label: 'Privacy',
  icon: <ShieldIcon className="h-5 w-5" />,
  active: false
}, {
  id: 'health',
  label: 'Health',
  icon: <HeartIcon className="h-5 w-5" />,
  active: false
}, {
  id: 'preferences',
  label: 'Preferences',
  icon: <GlobeIcon className="h-5 w-5" />,
  active: false
}];
const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    height: "5'10",
    weight: '176',
    birthDate: '1990-01-01',
    gender: 'Male',
    activityLevel: 'Moderately Active',
    primaryGoal: 'Build Muscle',
    workoutFrequency: '5+ times'
  });
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <ul className="space-y-1">
              {settingsSections.map(section => <li key={section.id}>
                  <button className={`w-full flex items-center px-4 py-3 rounded-lg ${section.active ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                    {section.icon}
                    <span className="ml-3">{section.label}</span>
                  </button>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Profile Settings
            </h2>
            <div className="flex flex-col md:flex-row md:items-center mb-6 pb-6 border-b">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-sm font-medium text-gray-700">
                  Profile Photo
                </h3>
              </div>
              <div className="md:w-2/3 flex items-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserIcon className="h-10 w-10 text-blue-500" />
                </div>
                <div className="ml-6">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-2 block">
                    Upload new photo
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Remove photo
                  </button>
                </div>
              </div>
            </div>
            <form onSubmit={handleSave}>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input type="text" value={formData.firstName} onChange={e => handleChange('firstName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input type="text" value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Health Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Height
                    </label>
                    <div className="flex">
                      <input type="text" value={formData.height} onChange={e => handleChange('height', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      <span className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md">
                        ft/in
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weight
                    </label>
                    <div className="flex">
                      <input type="text" value={formData.weight} onChange={e => handleChange('weight', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      <span className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md">
                        lbs
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input type="date" value={formData.birthDate} onChange={e => handleChange('birthDate', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select value={formData.gender} onChange={e => handleChange('gender', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Activity Level
                    </label>
                    <select value={formData.activityLevel} onChange={e => handleChange('activityLevel', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Sedentary</option>
                      <option>Lightly Active</option>
                      <option selected>Moderately Active</option>
                      <option>Very Active</option>
                      <option>Extremely Active</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Fitness Goals
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Goal
                    </label>
                    <select value={formData.primaryGoal} onChange={e => handleChange('primaryGoal', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Lose Weight</option>
                      <option selected>Build Muscle</option>
                      <option>Improve Endurance</option>
                      <option>Maintain Weight</option>
                      <option>General Fitness</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weekly Workout Frequency
                    </label>
                    <select value={formData.workoutFrequency} onChange={e => handleChange('workoutFrequency', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>1-2 times</option>
                      <option>3-4 times</option>
                      <option selected>5+ times</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>;
};
export default Settings;