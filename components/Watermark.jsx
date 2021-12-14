import Doodle from "./Doodle";

export default function Watermark() {
  return (
    <Doodle
      rule={`
        @grid: 1 / 100px 100px;
        background-size: 200px 200px;
        background-image: @doodle(
          @grid: 10 / 100%;
          @size: 2px;
          font-size: 3px;
          color: hsl(@r240, 30%, 50%);
          box-shadow: @m3x5(
            calc(4em - @nx * 1em) calc(@ny * 1em)
            @p(@m3(currentColor), @m2(transparent)),
            calc(2em + @nx * 1em) calc(@ny * 1em)
            @lp
          );
        );
      `}
      size={100}
    />
  );
}
