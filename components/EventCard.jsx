export default function EventCard({ timestamp, content}) {
  return (
    <div
      className="flex transform transition-all hover:scale-[101%]"
    >
      <div className="flex items-start flex-col sm:flex-row w-full">
        <div className="flex flex-col">
          <h4 className="w-full mb-2 font-medium text-lg md:text-xl text-gray-900 dark:text-gray-100">
            {timestamp}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </div>
  )
}
