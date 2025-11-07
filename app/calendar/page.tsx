"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  addMonths,
  subMonths,
} from "date-fns";
import { PlusCircle, Trash2 } from "lucide-react";

type Event = {
  id: number;
  date: string;
  text: string;
};

export default function CalendarPage() {
  const { status } = useSession();
  const router = useRouter();

  // 🔒 Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin"); // 👈 change if your login page route is different
    }
  }, [status, router]);

  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), "yyyy-MM-dd")
  );
  const [newEvent, setNewEvent] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  const addEvent = () => {
    if (!newEvent.trim()) return;
    setEvents([
      ...events,
      { id: Date.now(), date: selectedDate, text: newEvent },
    ]);
    setNewEvent("");
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const dayEvents = (date: string) => events.filter((e) => e.date === date);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  // Prevent showing page before auth check
  if (status === "unauthenticated") return null;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-8 px-3 sm:px-6 flex justify-center transition-colors duration-300">
      <div className="w-full max-w-5xl bg-white dark:bg-neutral-800 shadow-xl rounded-2xl p-4 sm:p-8 transition-colors duration-300">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-black dark:text-white">
          QuickDo Calendar
        </h1>

        {/* Month Navigation */}
        <div className="flex items-center justify-center sm:justify-between mb-6 gap-3 sm:gap-0">
          <button
            onClick={prevMonth}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-neutral-700 hover:opacity-80"
          >
            ←
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white text-center flex-1">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={nextMonth}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-neutral-700 hover:opacity-80"
          >
            →
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 sm:gap-3 text-center font-medium mb-8">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div
              key={d}
              className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm"
            >
              {d}
            </div>
          ))}

          {days.map((day) => {
            const dateStr = format(day, "yyyy-MM-dd");
            return (
              <div
                key={dateStr}
                onClick={() => setSelectedDate(dateStr)}
                className={`p-2 sm:p-3 rounded-lg sm:rounded-xl cursor-pointer border transition text-xs sm:text-sm md:text-base 
      ${
        selectedDate === dateStr
          ? "bg-neutral-700 dark:bg-neutral-600 text-white border-neutral-700 dark:border-neutral-500"
          : isToday(day)
          ? "border-2 border-black dark:border-white text-neutral-800 dark:text-gray-200 font-semibold"
          : "bg-gray-50 dark:bg-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-600 text-black dark:text-gray-200"
      }`}
              >
                {format(day, "d")}
                {dayEvents(dateStr).length > 0 && (
                  <div className="mt-1 text-[10px] sm:text-xs bg-green-200 text-green-800 dark:bg-green-600 dark:text-white rounded px-1">
                    {dayEvents(dateStr).length} Event
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Event Section */}
        <div className="bg-gray-50 dark:bg-neutral-700 rounded-xl p-4 sm:p-6 shadow-inner transition-colors duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black dark:text-white text-center sm:text-left">
            Events on {format(new Date(selectedDate), "PPP")}
          </h2>

          {/* Input Field */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-6">
            <input
              type="text"
              className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-500 focus:ring-2 outline-none bg-white dark:bg-neutral-600 text-black dark:text-white transition-colors duration-300 text-sm sm:text-base"
              placeholder="Add new event..."
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addEvent()}
            />
            <button
              onClick={addEvent}
              className="flex items-center justify-center gap-2 bg-black dark:bg-neutral-900 text-white px-4 sm:px-5 py-3 rounded-xl hover:opacity-90 transition font-medium text-sm sm:text-base"
            >
              <PlusCircle size={18} /> Add
            </button>
          </div>

          {/* Events List */}
          {dayEvents(selectedDate).length === 0 ? (
            <p className="text-black dark:text-gray-200 text-center text-sm sm:text-base">
              No events for this day.
            </p>
          ) : (
            <ul className="space-y-3">
              {dayEvents(selectedDate).map((event) => (
                <li
                  key={event.id}
                  className="p-3 bg-white dark:bg-neutral-600 border border-gray-300 dark:border-gray-500 rounded-xl shadow flex justify-between items-center transition-colors duration-300"
                >
                  <span className="text-black dark:text-white text-sm sm:text-base">
                    {event.text}
                  </span>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="text-red-500 hover:text-red-400 transition"
                    title="Delete event"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
