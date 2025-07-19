type Props = {
  startDate: string;
  endDate: string;
  onStartDateChange: (v: string) => void;
  onEndDateChange: (v: string) => void;
};
export default function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: Props) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div>
        <label className="mr-2">Start Date:</label>
        <input
          type="date"
          className="border rounded px-2 py-1"
          value={startDate}
          onChange={e => onStartDateChange(e.target.value)}
        />
      </div>
      <div>
        <label className="mr-2">End Date:</label>
        <input
          type="date"
          className="border rounded px-2 py-1"
          value={endDate}
          onChange={e => onEndDateChange(e.target.value)}
        />
      </div>
    </div>
  );
}