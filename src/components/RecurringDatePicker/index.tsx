"use client";
import { useState } from 'react';
import FrequencySelector from './parts/FrequencySelector';
import IntervalInput from './parts/IntervalInput';
import WeeklySelector from './parts/WeeklySelector';
import DateRangePicker from './parts/DateRangePicker';
import CalendarPreview from './parts/CalendarPreview';

export default function RecurringDatePicker() {
  // Example state (replace with Zustand/Context if desired)
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('weekly');
  const [interval, setInterval] = useState(2);
  const [daysOfWeek, setDaysOfWeek] = useState<number[]>([1, 3]);
  const [startDate, setStartDate] = useState('2025-07-01');
  const [endDate, setEndDate] = useState('2025-07-31');

  const handleClear = () => {
    setFrequency('weekly');
    setInterval(1);
    setDaysOfWeek([]);
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
      <h2 className="text-xl font-bold mb-4">Recurring Date Picker</h2>
      <div className="flex items-center justify-between mb-4">
        <FrequencySelector value={frequency} onChange={setFrequency} />
        <IntervalInput value={interval} onChange={setInterval} />
      </div>
      {frequency === 'weekly' && (
        <WeeklySelector value={daysOfWeek} onChange={setDaysOfWeek} />
      )}
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <CalendarPreview
        frequency={frequency}
        interval={interval}
        daysOfWeek={daysOfWeek}
        startDate={startDate}
        endDate={endDate}
      />
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={handleClear}>
          Clear
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Save Pattern ✅
        </button>
      </div>
    </div>
  );
}