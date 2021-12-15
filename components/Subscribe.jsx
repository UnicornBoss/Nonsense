export default function Subscribe() {
  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        订阅周报系列
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        填写你的邮箱，来获取周报「<span className="font-bold text-blue-500">废话连篇</span>」最新文章
      </p>
      <form
        action="https://www.getrevue.co/profile/monkeyboss/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
        className="relative my-4"
      >
        <input
          className="revue-form-field px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
          placeholder="你的邮箱"
          type="email"
          name="member[email]"
          id="member_email"
        />
          <input
            type="submit"
            value="订阅"
            name="member[subscribe]"
            id="member_submit"
            className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          />
      </form>
    </div>
  );
}
