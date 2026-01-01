export default function CommentEditor({ value, onChange }) {
  return (
    <textarea value={value} onChange={e => onChange(e.target.value)} />
  );
}
