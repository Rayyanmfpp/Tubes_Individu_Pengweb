import { useState } from "react";
import Header from "./components/Header";
import FormTambah from "./components/FormTambah";
import DaftarTugas from "./components/DaftarTugas";
import Ringkasan from "./components/Ringkasan";
import Footer from "./components/Footer";

function App() {
  const [tugas, setTugas] = useState([]);
  const [input, setInput] = useState("");

  const tambahTugas = () => {
    if (input.trim() === "") return;
    const tugasBaru = { id: Date.now(), nama: input };
    setTugas([...tugas, tugasBaru]);
    setInput("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <Header judul="Daftar Tugas Kuliah" />
      <FormTambah input={input} setInput={setInput} onTambah={tambahTugas} />
      <Ringkasan jumlah={tugas.length} />
      <DaftarTugas tugas={tugas} />
      <Footer teks="Dibuat dengan React" />
    </div>
  );
}

export default App;