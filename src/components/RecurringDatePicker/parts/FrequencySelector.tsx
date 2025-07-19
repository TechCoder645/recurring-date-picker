type Props = {
  value: 'daily' | 'weekly' | 'monthly' | 'yearly';
  onChange: (v: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
};
export default function FrequencySelector({ value, onChange }: Props) {
  return (
    <div>
      <label className="mr-2">Frequency:</label>
      <select
        className="border rounded px-2 py-1"
        value={value}
        onChange={e => onChange(e.target.value as any)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
}