function DaftarTugas({ tugas }) {
  if (tugas.length === 0) {
    return <p>Belum ada data tugas</p>;
  }

  return (
    <ul>
      {tugas.map((t) => (
        <li key={t.id}>{t.nama}</li>
      ))}
    </ul>
  );
}

export default DaftarTugas;
