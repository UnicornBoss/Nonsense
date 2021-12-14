export default function Banner() {
  return (
      <div className="w-full bg-black text-white py-2 font-bold text-center overflow-scroll">
          🚀 发布了跑步记录页面
          <a href="https://jogging.archy.club" className="text-blue-500">
            {' '}
            Jogging{' '}
          </a>
          0.0.1版本，不过数据还是用的
          <a href="https://yihong.run/" className="text-blue-500">
            大佬
          </a>
          的。
      </div>
  );
}
