type Props = {
  value: number;
  onChange: (v: number) => void;
};
export default function IntervalInput({ value, onChange }: Props) {
  return (
    <div>
      <label className="mr-2">Interval:</label>
      <input
        type="number"
        min={1}
        className="border rounded px-2 py-1 w-16"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  );
}