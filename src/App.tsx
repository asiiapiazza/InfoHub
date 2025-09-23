<meta name="viewport" content="width=device-width, initial-scale=1.0" />;
import {
  GraduationCapIcon,
  CalendarDotsIcon,
  DesktopIcon,
} from "@phosphor-icons/react";
export default function App() {
  return (
    <div className="m-8 grid grid-cols-12 gap-4">
      {/* titolo */}
      <div className="col-span-12 text-black text-2xl text-center">InfoHub</div>

      <div className="flex col-span-12 justify-center gap-8">
        <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
          <div className="mb-2">
            <GraduationCapIcon size={32} color="green" />
          </div>
          <div className="text-center font-semibold">Segreteria Online</div>
        </div>
        <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
          <div className="mb-2">
            <CalendarDotsIcon size={32} color="blue" />
          </div>
          <div className="text-center font-semibold">Calendario Lezioni</div>
        </div>
        <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
          <div className="mb-2">
            <CalendarDotsIcon size={32} color="red" />
          </div>
          <div className="text-center font-semibold">Calendario Esami</div>
        </div>
        <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
          <div className="mb-2">
            <DesktopIcon size={32} color="purple" />
          </div>
          <div className="text-center font-semibold">Esami Online</div>
        </div>
      </div>
    </div>
  );
}
