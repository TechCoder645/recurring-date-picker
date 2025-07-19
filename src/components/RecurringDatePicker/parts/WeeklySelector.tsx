const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
type Props = {
  value: number[];
  onChange: (days: number[]) => void;
};
export default function WeeklySelector({ value, onChange }: Props) {
  return (
    <div className="mb-4">
      <div className="flex space-x-2">
        {WEEKDAYS.map((day, idx) => (
          <label key={day} className="flex items-center space-x-1">
            <input
              type="checkbox"
              checked={value.includes(idx)}
              onChange={() => {
                onChange(
                  value.includes(idx)
                    ? value.filter(d => d !== idx)
                    : [...value, idx]
                );
              }}
            />
            <span>{day}</span>
          </label>
        ))}
      </div>
    </div>
  );
}