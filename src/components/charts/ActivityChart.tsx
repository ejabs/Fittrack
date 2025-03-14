import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const ActivityChart = () => {
  const data = [{
    day: 'Mon',
    calories: 650,
    steps: 8432,
    workouts: 2
  }, {
    day: 'Tue',
    calories: 400,
    steps: 6234,
    workouts: 1
  }, {
    day: 'Wed',
    calories: 850,
    steps: 10243,
    workouts: 3
  }, {
    day: 'Thu',
    calories: 300,
    steps: 5432,
    workouts: 1
  }, {
    day: 'Fri',
    calories: 550,
    steps: 7654,
    workouts: 2
  }, {
    day: 'Sat',
    calories: 600,
    steps: 8765,
    workouts: 2
  }, {
    day: 'Sun',
    calories: 750,
    steps: 9876,
    workouts: 2
  }];
  return <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="calories" fill="#8884d8" name="Calories Burned" />
        <Bar yAxisId="right" dataKey="steps" fill="#82ca9d" name="Steps" />
      </BarChart>
    </ResponsiveContainer>;
};
export default ActivityChart;