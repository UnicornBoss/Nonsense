import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full bg-black text-white py-2 font-bold text-center overflow-scroll">
       📚 闭关读书中，具体内容详见<Link href="/media"><a className="text-blue-500">多媒体</a></Link>
    </div>
  );
}
