function FormTambah({ input, setInput, onTambah }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nama tugas..."
        style={{ flex: 1, padding: 8 }}
      />
      <button onClick={onTambah}>Tambah</button>
    </div>
  );
}

export default FormTambah;
