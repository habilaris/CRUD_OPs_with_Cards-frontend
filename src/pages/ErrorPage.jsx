import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();

  return (
    <div>
      <div className="text-neutral-700 flex flex-col items-center ">
        <h3 className="text-8xl">404 Error</h3>
        <p className="text-4xl tracking-[8px] border w-fit">Page not found!</p>
      </div>

      <div className="flex justify-center mt-5">
        <ul className="list-disc ml-5">
          <li>Seems like no page exists on route {location.pathname}</li>
        </ul>
      </div>
    </div>
  );
}

export default ErrorPage;
