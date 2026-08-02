export default function LotusMark({ size = 30 }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 34c-7-4-11-11-11-18 4 2 8 6 11 12 3-6 7-10 11-12 0 7-4 14-11 18z" stroke="#c8922e" strokeWidth="1.3" />
      <path d="M20 34c-4-6-5-13-3-20 3 3 5 8 5 14 0 6-2 11-5 14z" stroke="#e8b04a" strokeWidth="1" opacity="0.7" />
      <path d="M20 34c4-6 5-13 3-20-3 3-5 8-5 14 0 6 2 11 5 14z" stroke="#e8b04a" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
