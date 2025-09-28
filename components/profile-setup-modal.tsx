"use client";

import { useState } from "react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { School, Target, MapPin, User, Save, X } from "lucide-react";
import { useSchoolSearch, useUniversitySearch, useProvinces } from "@/hooks/use-education-data";

interface ProfileFormData {
  school: string;
  customSchool: string;
  province: string;
  city: string;
  grade: string;
  targetUniversity: string;
  customUniversity: string;
  targetMajor: string;
}

interface ProfileSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ProfileFormData) => void;
}

export default function ProfileSetupModal({ isOpen, onClose, onSave }: ProfileSetupModalProps) {
  const [formData, setFormData] = useState<ProfileFormData>({
    school: "",
    customSchool: "",
    province: "",
    city: "",
    grade: "",
    targetUniversity: "",
    customUniversity: "",
    targetMajor: "",
  });

  const [showSchoolSuggestions, setShowSchoolSuggestions] = useState(false);
  const [showUniversitySuggestions, setShowUniversitySuggestions] = useState(false);
  const [isSchoolOther, setIsSchoolOther] = useState(false);
  const [isUniversityOther, setIsUniversityOther] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Use hooks for data
  const provinces = useProvinces();
  const schoolSearch = useSchoolSearch();
  const universitySearch = useUniversitySearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Handle search queries for autocomplete
    if (name === 'school' && !isSchoolOther) {
      schoolSearch.setQuery(value);
      setShowSchoolSuggestions(value.length > 0);
    } else if (name === 'targetUniversity' && !isUniversityOther) {
      universitySearch.setQuery(value);
      setShowUniversitySuggestions(value.length > 0);
    }
  };

  const handleSchoolSelect = (schoolName: string) => {
    if (schoolName === "Lainnya") {
      setIsSchoolOther(true);
      setFormData(prev => ({ ...prev, school: "", customSchool: "" }));
    } else {
      setFormData(prev => ({ ...prev, school: schoolName }));
      schoolSearch.setQuery(schoolName);
    }
    setShowSchoolSuggestions(false);
  };

  const handleUniversitySelect = (universityName: string) => {
    if (universityName === "Lainnya") {
      setIsUniversityOther(true);
      setFormData(prev => ({ ...prev, targetUniversity: "", customUniversity: "" }));
    } else {
      setFormData(prev => ({ ...prev, targetUniversity: universityName }));
      universitySearch.setQuery(universityName);
    }
    setShowUniversitySuggestions(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Call API to save profile data
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          school: isSchoolOther ? formData.customSchool : formData.school,
          province: formData.province,
          city: formData.city,
          grade: formData.grade,
          targetUniversity: isUniversityOther ? formData.customUniversity : formData.targetUniversity,
          targetMajor: formData.targetMajor,
        }),
      });

      if (response.ok) {
        onSave(formData);
        onClose();
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <MotionWrapper>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Lengkapi Profil</h2>
                <p className="text-gray-600">Bantu kami memberikan pengalaman yang lebih personal</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Province */}
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                Provinsi *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Pilih provinsi</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                Kota/Kabupaten
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contoh: Jakarta Selatan, Bandung"
              />
            </div>

            {/* Grade */}
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                Kelas *
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Pilih kelas</option>
                <option value="10">Kelas 10</option>
                <option value="11">Kelas 11</option>
                <option value="12">Kelas 12</option>
                <option value="Alumni">Alumni</option>
              </select>
            </div>

            {/* School */}
            <div>
              <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                Asal Sekolah *
              </label>
              {isSchoolOther ? (
                <div className="space-y-2">
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="customSchool"
                      name="customSchool"
                      type="text"
                      value={formData.customSchool}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tulis nama sekolah Anda"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSchoolOther(false)}
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    ← Kembali ke pilihan sekolah
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <School className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <input
                    id="school"
                    name="school"
                    type="text"
                    value={formData.school}
                    onChange={handleInputChange}
                    onFocus={() => formData.school && setShowSchoolSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSchoolSuggestions(false), 200)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ketik nama sekolah Anda"
                    autoComplete="off"
                    required
                  />
                  {(showSchoolSuggestions && (schoolSearch.results.length > 0 || formData.school)) && (
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                      {schoolSearch.results.slice(0, 7).map((school) => (
                        <button
                          key={school.id}
                          type="button"
                          onClick={() => handleSchoolSelect(school.name)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b border-gray-100"
                        >
                          <div className="font-medium text-gray-800">{school.name}</div>
                          <div className="text-sm text-gray-500">{school.city}, {school.province}</div>
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleSchoolSelect("Lainnya")}
                        className="w-full px-4 py-3 text-left hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none text-orange-600 font-medium"
                      >
                        🏫 Sekolah saya tidak ada dalam daftar
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Target University */}
            <div>
              <label htmlFor="targetUniversity" className="block text-sm font-medium text-gray-700 mb-2">
                PTN/PTS Target
              </label>
              {isUniversityOther ? (
                <div className="space-y-2">
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="customUniversity"
                      name="customUniversity"
                      type="text"
                      value={formData.customUniversity}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tulis nama universitas target Anda"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsUniversityOther(false)}
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    ← Kembali ke pilihan universitas
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <input
                    id="targetUniversity"
                    name="targetUniversity"
                    type="text"
                    value={formData.targetUniversity}
                    onChange={handleInputChange}
                    onFocus={() => formData.targetUniversity && setShowUniversitySuggestions(true)}
                    onBlur={() => setTimeout(() => setShowUniversitySuggestions(false), 200)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ketik nama PTN/PTS target Anda"
                    autoComplete="off"
                  />
                  {(showUniversitySuggestions && (universitySearch.results.length > 0 || formData.targetUniversity)) && (
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                      {universitySearch.results.slice(0, 7).map((university) => (
                        <button
                          key={university.id}
                          type="button"
                          onClick={() => handleUniversitySelect(university.shortName || university.name)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b border-gray-100"
                        >
                          <div className="font-medium text-gray-800">
                            {university.shortName || university.name}
                            {university.isPopular && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                Populer
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{university.city}, {university.province}</div>
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleUniversitySelect("Lainnya")}
                        className="w-full px-4 py-3 text-left hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none text-orange-600 font-medium"
                      >
                        🎓 Universitas saya tidak ada dalam daftar
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Target Major */}
            <div>
              <label htmlFor="targetMajor" className="block text-sm font-medium text-gray-700 mb-2">
                Jurusan Target
              </label>
              <input
                id="targetMajor"
                name="targetMajor"
                type="text"
                value={formData.targetMajor}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contoh: Kedokteran, Teknik Informatika, Manajemen"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Lewati
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Simpan Profil
                  </>
                )}
              </button>
            </div>
          </form>
        </MotionWrapper>
      </div>
    </div>
  );
}