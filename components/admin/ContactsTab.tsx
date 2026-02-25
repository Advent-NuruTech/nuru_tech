"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { ContactMessage } from "@/lib/types/cms";
import { Card, ListRow, dangerLinkClass, inputClass } from "@/components/admin/AdminPrimitives";

export default function ContactsTab() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "contacts"), (snapshot) => {
      setContacts(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<ContactMessage, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return contacts.filter((item) =>
      [item.name, item.email, item.phone, item.location, item.message]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [contacts, search]);

  return (
    <Card title="Contact Inbox">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search contacts"
        className={inputClass}
      />
      <div className="mt-3 space-y-2">
        {filtered.map((item) => (
          <ListRow
            key={item.id}
            title={`${item.name} - ${item.email}`}
            subtitle={`${item.location || "No location"} | ${item.phone || "No phone"} | ${item.message.slice(0, 180)}`}
            actions={
              <button
                type="button"
                className={dangerLinkClass}
                onClick={() => deleteDoc(doc(db, "contacts", item.id))}
              >
                Delete
              </button>
            }
          />
        ))}
      </div>
    </Card>
  );
}
