import { PhotoIcon } from "@heroicons/react/24/outline";

export default function UploadDesign() {
  return (
    <div className="mx-auto w-3/4 sm:w-1/3 ">
      <button
        type="button"
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        <PhotoIcon className="mx-auto h-20 w-20 text-gray-300" />
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Upload a Picture of your Design
        </span>
      </button>
    </div>
  );
}
