const CommentsItem = ({ name, description, country }) => {
  return (
    <div className="p-6 rounded-md bg-gray-50">
      <div className="flex flex-row gap-2">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900 ">{name}</h3>
          <p className="mt-0.5 text-xs text-gray-500">{country}</p>
        </div>
      </div>
      <p className="mt-4 italic text-slate-700">" {description} "</p>
    </div>
  );
};

export default CommentsItem;
