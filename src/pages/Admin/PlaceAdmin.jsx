import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import usePlaceStore from '../../config/placeStore';
import usePlaceFormStore from '../../config/placeFormStore';
import { Upload } from '../../components/atoms';

const PlacesAdmin = () => {
  const { form, imgPreview, setFormData, setImgPreview, resetFormData } = usePlaceFormStore();
  const { getPlaceById, addPlace, updatePlace } = usePlaceStore();
  const { name, description, googleMapsLink, address, roomPrice, roomStatus } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        const place = await getPlaceById(id);
        setFormData('name', place.name);
        setFormData('description', place.description);
        setFormData('googleMapsLink', place.googleMapsLink);
        setFormData('address', place.address);
        setFormData('roomPrice', place.roomPrice);
        setFormData('roomStatus', place.roomStatus);
        setFormData('image', place.image);
        setImgPreview(place.image);
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getPlaceById, setFormData, setImgPreview, resetFormData]);

  const onImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgPreview(URL.createObjectURL(file));
      setFormData('image', file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim() && address.trim()) {
      if (isUpdate) {
        updatePlace(id, form);
      } else {
        addPlace(form);
      }
      navigate('/admin/admin-place');
    } else {
      alert('Please fill all required fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <header className="mb-8 text-center">
          <img src={Logo} alt="Logo" className="h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            {isUpdate ? 'Edit Kost' : 'Tambah Kost Baru'}
          </h2>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Kost
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setFormData('name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Masukkan nama kost"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              value={description}
              onChange={(e) => setFormData('description', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
              placeholder="Masukkan deskripsi kost"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setFormData('address', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Masukkan alamat kost"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Harga Kamar (per bulan)
            </label>
            <input
              type="number"
              value={roomPrice}
              onChange={(e) => setFormData('roomPrice', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Contoh: 1200000"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status Kamar
            </label>
            <select
              value={roomStatus}
              onChange={(e) => setFormData('roomStatus', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              required
            >
              <option value="available">Tersedia</option>
              <option value="booked">Terisi</option>
              <option value="maintenance">Perbaikan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Google Maps Link
            </label>
            <input
              type="text"
              value={googleMapsLink}
              onChange={(e) => setFormData('googleMapsLink', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Masukkan tautan Google Maps"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Unggah Foto
            </label>
            <Upload
              onChange={onImgUpload}
              src={imgPreview}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all focus:outline-none"
          >
            {isUpdate ? 'Simpan Perubahan' : 'Tambah Kost'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlacesAdmin;
