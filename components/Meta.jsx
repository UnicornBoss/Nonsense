import Doodle from "./Doodle";

export default function Meta() {
  const rule = `
  @grid: 100x1 / 80%;

  border-radius: 50%;
  background: #1eacff;
  @size: 10px;

  @place-cell: @plot(
    y: sin(2t+E)/π*-2
  )
  `;
  return <Doodle rule={rule} size={320} />;
}
