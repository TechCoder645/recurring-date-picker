import { generateRecurringDates } from '../utils/recurrenceUtils';

type Props = {
  frequency: string;
  interval: number;
  daysOfWeek: number[];
  startDate: string;
  endDate: string;
};

export default function CalendarPreview({
  frequency,
  interval,
  daysOfWeek,
  startDate,
  endDate,
}: Props) {
  // For demo, always show July 2025
  const year = 2025;
  const month = 6; // July (0-based)
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Generate recurring dates for the visible month
  const recurringDates = generateRecurringDates({
    frequency,
    interval,
    daysOfWeek,
    startDate,
    endDate,
    maxCount: 100,
  }).filter(
    d => d.getFullYear() === year && d.getMonth() === month
  );

  const daysInMonth = lastDay.getDate();
  const startWeekday = firstDay.getDay();

  const calendarCells = [];
  for (let i = 0; i < startWeekday; i++) {
    calendarCells.push(<td key={`empty-${i}`}></td>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isRecurring = recurringDates.some(d => d.getDate() === day);
    calendarCells.push(
      <td
        key={day}
        className={isRecurring ? 'bg-blue-200 font-bold rounded' : ''}
      >
        {day}
      </td>
    );
  }

  // Split into weeks
  const rows = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    rows.push(
      <tr key={i}>{calendarCells.slice(i, i + 7)}</tr>
    );
  }

  return (
    <div className="mb-4">
      <div className="font-semibold mb-2">🔁 Preview Calendar:</div>
      <div className="border rounded p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <span>[ July 2025 ]</span>
          <span>◀️ ▶️</span>
        </div>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}