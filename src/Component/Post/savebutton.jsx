import { useEffect, useState } from "react";

export default function SaveButton({
  posting,
  savedb
}) {
  // Bookmark Toggle
  const postId = posting.id
  const [test, setTest] = useState(null)

  useEffect(() => {
    const request = indexedDB.open("myDatabase", 1);

    request.onerror = function (event) {
      console.error("Database error:", event.target.error);
    };

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      db.createObjectStore("likes", { keyPath: "id" });
    };

    request.onsuccess = function (event) {
      const db = event.target.result;

      const transaction = db.transaction(["likes"], "readwrite");
      const objectStore = transaction.objectStore("likes");

      const getLikedRequest = objectStore.get(postId);

      getLikedRequest.onsuccess = function (event) {
        const data = event.target.result;
        setTest(data ? data.value : false);
      };

      transaction.oncomplete = function () {
        db.close();
      };
    };
  }, []);

  useEffect(() => {
    if (test !== null) {
      const request = indexedDB.open("myDatabase", 1);

      request.onerror = function (event) {
        console.error("Database error:", event.target.error);
      };

      request.onsuccess = function (event) {
        const db = event.target.result;

        const transaction = db.transaction(["likes"], "readwrite");
        const objectStore = transaction.objectStore("likes");

        objectStore.put({ id: postId, value: test });

        
      };
    }
  }, [test]);

  // Open or create the indexedDB
  const save = indexedDB.open('save', 1);

  save.addEventListener("success", (event) => {
    savedb = event.target.result;
  });

  save.addEventListener("upgradeneeded", (event) => {
    savedb = event.target.result;
    if (!savedb.objectStoreNames.contains("saveInstagram")) {
      const objectStore = savedb.createObjectStore("saveInstagram", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  });


  const handleSaved = () => {
    const tx = savedb.transaction("saveInstagram", "readwrite");
    const store = tx.objectStore("saveInstagram");

    if (test) {
      const deleteStore = store.delete(posting.id)
      deleteStore.onsuccess = (e) => {
        console.log('Post unsaved successfully');
      };

      deleteStore.onerror = (e) => {
        console.error('Error unsaving post:', e.target.error);
      };
    } else {
      const objectStore = store.add(posting);

      objectStore.onsuccess = (e) => {
        console.log('Post saved successfully');
      };

      objectStore.onerror = (e) => {
        console.error('Error saving post:', e.target.error);
      };
    }
  };

  return (
    <i className={`fa-${test === true ? 'solid' : 'regular'} fa-bookmark ${test === true ? 'saved' : ''}`} style={{ marginLeft: 'auto' }} onClick={() => {setTest((prev) => !prev); handleSaved()}}></i>
  );
}
