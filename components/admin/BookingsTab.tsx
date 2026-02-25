"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Booking } from "@/lib/types/cms";
import { Card, ListRow, dangerLinkClass, inputClass } from "@/components/admin/AdminPrimitives";

export default function BookingsTab() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      setBookings(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<Booking, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return bookings.filter((item) =>
      [item.name, item.email, item.service, item.status, item.message]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [bookings, search]);

  return (
    <Card title="Bookings">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search booking records"
        className={inputClass}
      />
      <div className="mt-3 space-y-2">
        {filtered.map((item) => (
          <ListRow
            key={item.id}
            title={`${item.name} - ${item.service}`}
            subtitle={`${item.email} | ${item.date} ${item.time} | ${item.status}`}
            actions={
              <div className="flex items-center gap-2">
                <select
                  className="rounded-lg border border-neutral-300 px-2 py-1 text-xs dark:border-neutral-600 dark:bg-neutral-800"
                  value={item.status}
                  onChange={(event) =>
                    updateDoc(doc(db, "bookings", item.id), { status: event.target.value })
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                </select>
                <button
                  type="button"
                  className={dangerLinkClass}
                  onClick={() => deleteDoc(doc(db, "bookings", item.id))}
                >
                  Delete
                </button>
              </div>
            }
          />
        ))}
      </div>
    </Card>
  );
}
