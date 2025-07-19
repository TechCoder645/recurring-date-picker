'use client';
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationFields from './CustomizationFields';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';

export default function RecurringDatePicker() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-xl">
      <h1 className="text-xl font-bold mb-4">Recurring Date Picker</h1>
      <RecurrenceOptions />
      <CustomizationFields />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}
