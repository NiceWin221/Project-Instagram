// ...

export default function SaveButton({
  bookmark,
  setBookmark,
  posting,
  savedb
}) {

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
    setBookmark(!bookmark);

    const tx = savedb.transaction("saveInstagram", "readwrite");
    const store = tx.objectStore("saveInstagram");

    if (bookmark) {
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
    <i className={`fa-${bookmark === true ? 'solid' : 'regular'} fa-bookmark ${bookmark === true ? 'saved' : ''}`} style={{ marginLeft: 'auto' }} onClick={handleSaved}></i>
  );
}
