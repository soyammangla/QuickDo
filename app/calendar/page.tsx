"use client";
import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
} from "date-fns";
import { PlusCircle } from "lucide-react";

type Event = {
  id: number;
  date: string;
  text: string;
};

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), "yyyy-MM-dd")
  );
  const [newEvent, setNewEvent] = useState("");

  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const days = eachDayOfInterval({ start, end });

  const addEvent = () => {
    if (!newEvent.trim()) return;
    setEvents([
      ...events,
      { id: Date.now(), date: selectedDate, text: newEvent },
    ]);
    setNewEvent("");
  };

  const dayEvents = (date: string) => events.filter((e) => e.date === date);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-12 px-4 flex justify-center transition-colors duration-300">
      <div className="w-full max-w-5xl bg-white dark:bg-neutral-800 shadow-xl rounded-2xl p-8 transition-colors duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          📅 QuickDo Calendar
        </h1>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3 text-center font-medium mb-8">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-gray-500 dark:text-gray-300">
              {d}
            </div>
          ))}
          {days.map((day) => {
            const dateStr = format(day, "yyyy-MM-dd");
            return (
              <div
                key={dateStr}
                onClick={() => setSelectedDate(dateStr)}
                className={`p-3 rounded-xl cursor-pointer border transition
    ${
      selectedDate === dateStr
        ? "bg-neutral-700 dark:bg-neutral-600 text-white border-neutral-700 dark:border-neutral-500"
        : isToday(day)
        ? "border-2 border-black dark:border-white text-neutral-800 dark:text-gray-200 font-semibold"
        : "bg-gray-50 dark:bg-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-600"
    }`}
              >
                {format(day, "d")}
                {dayEvents(dateStr).length > 0 && (
                  <div className="mt-1 text-xs bg-green-200 text-green-800 rounded px-1">
                    {dayEvents(dateStr).length} event
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Event Section */}
        <div className="bg-gray-50 dark:bg-neutral-700 rounded-xl p-6 shadow-inner transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-4">
            Events on {format(new Date(selectedDate), "PPP")}
          </h2>

          {/* Input */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-500 focus:ring-2 outline-none bg-white dark:bg-neutral-600 transition-colors duration-300"
              placeholder="Add new event..."
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addEvent()}
            />
            <button
              onClick={addEvent}
              className="flex items-center gap-2 bg-black dark:bg-neutral-900 text-white px-5 py-3 rounded-xl hover:opacity-90 transition font-medium"
            >
              <PlusCircle size={20} /> Add
            </button>
          </div>

          {/* Events List */}
          {dayEvents(selectedDate).length === 0 ? (
            <p className="text-black dark:text-gray-200 text-center">
              No events for this day.
            </p>
          ) : (
            <ul className="space-y-3">
              {dayEvents(selectedDate).map((event) => (
                <li
                  key={event.id}
                  className="p-3 bg-white dark:bg-neutral-600 border border-gray-300 dark:border-gray-500 rounded-xl shadow flex justify-between items-center transition-colors duration-300"
                >
                  <span>{event.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
