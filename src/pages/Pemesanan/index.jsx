import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePlaceStore from "../../config/placeStore.js";
import { axiosInstance } from "../../config/axiosInstance.js";
import { Button } from "../../components/atoms";

const Pemesanan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPlaceById } = usePlaceStore();
  const [place, setPlace] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    roomNumber: "",
    address: "",
    phoneNumber: "",
    guardianName: "",
    guardianPhone: "",
    paymentProof: null,
  });

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const data = await getPlaceById(id);
        setPlace(data);
      } catch (err) {
        setError("Gagal memuat data kost");
      }
    };
    fetchPlace();
  }, [getPlaceById, id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.paymentProof) {
      setError("Bukti pembayaran wajib diunggah.");
      return;
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("placeId", id);
      formData.append("fullName", form.fullName);
      formData.append("roomNumber", form.roomNumber);
      formData.append("address", form.address);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("guardianName", form.guardianName);
      formData.append("guardianPhone", form.guardianPhone);
      formData.append("paymentProof", form.paymentProof);

      await axiosInstance.post("/bookings", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/daftar-tempat");
    } catch (err) {
      setError("Gagal mengirim pemesanan. Coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#a04925]">Form Pemesanan</h1>
          <p className="text-gray-600 mt-2">
            {place ? `Kost: ${place.name}` : "Memuat data kost..."}
          </p>
        </div>

        {error && (
          <div className="mb-4 text-red-600 font-medium">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nomor Kamar
            </label>
            <input
              type="text"
              name="roomNumber"
              value={form.roomNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Alamat Tempat Tinggal
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Wali
            </label>
            <input
              type="text"
              name="guardianName"
              value={form.guardianName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nomor Wali
            </label>
            <input
              type="tel"
              name="guardianPhone"
              value={form.guardianPhone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bukti Pembayaran (JPG/PNG/PDF)
            </label>
            <input
              type="file"
              name="paymentProof"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              accept="image/*,application/pdf"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Kirim Pemesanan"}
            </Button>
            <Button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
              onClick={() => navigate(-1)}
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pemesanan;
