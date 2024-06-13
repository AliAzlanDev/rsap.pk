import { NotFoundStatuses } from "@/components/global/not-found-statuses";

export default function NotFound() {
  return (
    <div className=" container-x">
      <h1 className="font-mono md:text-[300px] text-[140px] font-medium text-center mt-20">
        404
      </h1>
      <div className=" max-w-md mx-auto">
        <span className="loading-ellipsis">Data failed...</span>
        <NotFoundStatuses />
      </div>
      <div className="mt-10" />
    </div>
  );
}
