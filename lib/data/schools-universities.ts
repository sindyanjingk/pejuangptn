export interface School {
  id: string;
  name: string;
  type: 'SMA' | 'SMK' | 'MA';
  province: string;
  city: string;
  address?: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  type: 'PTN' | 'PTS';
  province: string;
  city: string;
  website?: string;
  accreditation?: 'A' | 'B' | 'C';
  isPopular?: boolean;
}

export interface Province {
  id: string;
  name: string;
  schools: School[];
  universities: University[];
}

// Data SMA/SMK/MA di Indonesia per Provinsi
export const SCHOOLS_DATA: Province[] = [
  {
    id: 'jkt',
    name: 'DKI Jakarta',
    schools: [
      {
        id: 'sma1-jkt',
        name: 'SMAN 1 Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Pusat'
      },
      {
        id: 'sma8-jkt',
        name: 'SMAN 8 Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Selatan'
      },
      {
        id: 'sma28-jkt',
        name: 'SMAN 28 Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Timur'
      },
      {
        id: 'sma70-jkt',
        name: 'SMAN 70 Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Selatan'
      },
      {
        id: 'sma81-jkt',
        name: 'SMAN 81 Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Timur'
      },
      {
        id: 'labschool-jkt',
        name: 'Labschool Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Selatan'
      },
      {
        id: 'smak1-jkt',
        name: 'SMAK 1 Penabur Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Pusat'
      },
      {
        id: 'smak5-jkt',
        name: 'SMAK 5 Penabur Jakarta',
        type: 'SMA',
        province: 'DKI Jakarta',
        city: 'Jakarta Barat'
      },
      {
        id: 'smkn1-jkt',
        name: 'SMKN 1 Jakarta',
        type: 'SMK',
        province: 'DKI Jakarta',
        city: 'Jakarta Pusat'
      },
      {
        id: 'smkn26-jkt',
        name: 'SMKN 26 Jakarta',
        type: 'SMK',
        province: 'DKI Jakarta',
        city: 'Jakarta Utara'
      }
    ],
    universities: [
      {
        id: 'ui',
        name: 'Universitas Indonesia',
        shortName: 'UI',
        type: 'PTN',
        province: 'DKI Jakarta',
        city: 'Depok',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'ukt',
        name: 'Universitas Kristen Indonesia',
        shortName: 'UKI',
        type: 'PTS',
        province: 'DKI Jakarta',
        city: 'Jakarta Timur',
        accreditation: 'B'
      },
      {
        id: 'uin-jakarta',
        name: 'UIN Syarif Hidayatullah Jakarta',
        shortName: 'UIN Jakarta',
        type: 'PTN',
        province: 'DKI Jakarta',
        city: 'Tangerang Selatan',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'jabar',
    name: 'Jawa Barat',
    schools: [
      {
        id: 'sma1-bdg',
        name: 'SMAN 1 Bandung',
        type: 'SMA',
        province: 'Jawa Barat',
        city: 'Bandung'
      },
      {
        id: 'sma2-bdg',
        name: 'SMAN 2 Bandung',
        type: 'SMA',
        province: 'Jawa Barat',
        city: 'Bandung'
      },
      {
        id: 'sma3-bdg',
        name: 'SMAN 3 Bandung',
        type: 'SMA',
        province: 'Jawa Barat',
        city: 'Bandung'
      },
      {
        id: 'sma5-bdg',
        name: 'SMAN 5 Bandung',
        type: 'SMA',
        province: 'Jawa Barat',
        city: 'Bandung'
      },
      {
        id: 'sma1-bogor',
        name: 'SMAN 1 Bogor',
        type: 'SMA',
        province: 'Jawa Barat',
        city: 'Bogor'
      },
      {
        id: 'sma1-bekasi',
        name: 'SMAN 1 Bekasi',
        type: 'SMA',
        province: 'Jawa Barat',
        city: 'Bekasi'
      },
      {
        id: 'sma1-cimahi',
        name: 'SMAN 1 Cimahi',
        type: 'SMA',
        province: 'Jawa Barat',
        city: 'Cimahi'
      },
      {
        id: 'smkn1-bdg',
        name: 'SMKN 1 Bandung',
        type: 'SMK',
        province: 'Jawa Barat',
        city: 'Bandung'
      },
      {
        id: 'smkn4-bdg',
        name: 'SMKN 4 Bandung',
        type: 'SMK',
        province: 'Jawa Barat',
        city: 'Bandung'
      }
    ],
    universities: [
      {
        id: 'itb',
        name: 'Institut Teknologi Bandung',
        shortName: 'ITB',
        type: 'PTN',
        province: 'Jawa Barat',
        city: 'Bandung',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unpad',
        name: 'Universitas Padjadjaran',
        shortName: 'UNPAD',
        type: 'PTN',
        province: 'Jawa Barat',
        city: 'Bandung',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'ipb',
        name: 'Institut Pertanian Bogor',
        shortName: 'IPB',
        type: 'PTN',
        province: 'Jawa Barat',
        city: 'Bogor',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'upi',
        name: 'Universitas Pendidikan Indonesia',
        shortName: 'UPI',
        type: 'PTN',
        province: 'Jawa Barat',
        city: 'Bandung',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'jateng',
    name: 'Jawa Tengah',
    schools: [
      {
        id: 'sma1-smg',
        name: 'SMAN 1 Semarang',
        type: 'SMA',
        province: 'Jawa Tengah',
        city: 'Semarang'
      },
      {
        id: 'sma3-smg',
        name: 'SMAN 3 Semarang',
        type: 'SMA',
        province: 'Jawa Tengah',
        city: 'Semarang'
      },
      {
        id: 'sma1-solo',
        name: 'SMAN 1 Surakarta',
        type: 'SMA',
        province: 'Jawa Tengah',
        city: 'Surakarta'
      },
      {
        id: 'sma3-solo',
        name: 'SMAN 3 Surakarta',
        type: 'SMA',
        province: 'Jawa Tengah',
        city: 'Surakarta'
      },
      {
        id: 'sma1-magelang',
        name: 'SMAN 1 Magelang',
        type: 'SMA',
        province: 'Jawa Tengah',
        city: 'Magelang'
      },
      {
        id: 'smkn1-smg',
        name: 'SMKN 1 Semarang',
        type: 'SMK',
        province: 'Jawa Tengah',
        city: 'Semarang'
      }
    ],
    universities: [
      {
        id: 'undip',
        name: 'Universitas Diponegoro',
        shortName: 'UNDIP',
        type: 'PTN',
        province: 'Jawa Tengah',
        city: 'Semarang',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'uns',
        name: 'Universitas Sebelas Maret',
        shortName: 'UNS',
        type: 'PTN',
        province: 'Jawa Tengah',
        city: 'Surakarta',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unnes',
        name: 'Universitas Negeri Semarang',
        shortName: 'UNNES',
        type: 'PTN',
        province: 'Jawa Tengah',
        city: 'Semarang',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'diy',
    name: 'D.I. Yogyakarta',
    schools: [
      {
        id: 'sma1-yk',
        name: 'SMAN 1 Yogyakarta',
        type: 'SMA',
        province: 'D.I. Yogyakarta',
        city: 'Yogyakarta'
      },
      {
        id: 'sma3-yk',
        name: 'SMAN 3 Yogyakarta',
        type: 'SMA',
        province: 'D.I. Yogyakarta',
        city: 'Yogyakarta'
      },
      {
        id: 'sma8-yk',
        name: 'SMAN 8 Yogyakarta',
        type: 'SMA',
        province: 'D.I. Yogyakarta',
        city: 'Yogyakarta'
      },
      {
        id: 'sma1-sleman',
        name: 'SMAN 1 Sleman',
        type: 'SMA',
        province: 'D.I. Yogyakarta',
        city: 'Sleman'
      },
      {
        id: 'smkn2-yk',
        name: 'SMKN 2 Yogyakarta',
        type: 'SMK',
        province: 'D.I. Yogyakarta',
        city: 'Yogyakarta'
      }
    ],
    universities: [
      {
        id: 'ugm',
        name: 'Universitas Gadjah Mada',
        shortName: 'UGM',
        type: 'PTN',
        province: 'D.I. Yogyakarta',
        city: 'Yogyakarta',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'uny',
        name: 'Universitas Negeri Yogyakarta',
        shortName: 'UNY',
        type: 'PTN',
        province: 'D.I. Yogyakarta',
        city: 'Yogyakarta',
        accreditation: 'A'
      },
      {
        id: 'uin-yk',
        name: 'UIN Sunan Kalijaga Yogyakarta',
        shortName: 'UIN Yogyakarta',
        type: 'PTN',
        province: 'D.I. Yogyakarta',
        city: 'Yogyakarta',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'jatim',
    name: 'Jawa Timur',
    schools: [
      {
        id: 'sma1-sby',
        name: 'SMAN 1 Surabaya',
        type: 'SMA',
        province: 'Jawa Timur',
        city: 'Surabaya'
      },
      {
        id: 'sma5-sby',
        name: 'SMAN 5 Surabaya',
        type: 'SMA',
        province: 'Jawa Timur',
        city: 'Surabaya'
      },
      {
        id: 'sma1-malang',
        name: 'SMAN 1 Malang',
        type: 'SMA',
        province: 'Jawa Timur',
        city: 'Malang'
      },
      {
        id: 'sma3-malang',
        name: 'SMAN 3 Malang',
        type: 'SMA',
        province: 'Jawa Timur',
        city: 'Malang'
      },
      {
        id: 'sma1-kediri',
        name: 'SMAN 1 Kediri',
        type: 'SMA',
        province: 'Jawa Timur',
        city: 'Kediri'
      },
      {
        id: 'smkn1-sby',
        name: 'SMKN 1 Surabaya',
        type: 'SMK',
        province: 'Jawa Timur',
        city: 'Surabaya'
      }
    ],
    universities: [
      {
        id: 'its',
        name: 'Institut Teknologi Sepuluh Nopember',
        shortName: 'ITS',
        type: 'PTN',
        province: 'Jawa Timur',
        city: 'Surabaya',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unair',
        name: 'Universitas Airlangga',
        shortName: 'UNAIR',
        type: 'PTN',
        province: 'Jawa Timur',
        city: 'Surabaya',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'um',
        name: 'Universitas Negeri Malang',
        shortName: 'UM',
        type: 'PTN',
        province: 'Jawa Timur',
        city: 'Malang',
        accreditation: 'A'
      },
      {
        id: 'ub',
        name: 'Universitas Brawijaya',
        shortName: 'UB',
        type: 'PTN',
        province: 'Jawa Timur',
        city: 'Malang',
        accreditation: 'A',
        isPopular: true
      }
    ]
  },
  {
    id: 'sumut',
    name: 'Sumatera Utara',
    schools: [
      {
        id: 'sma1-medan',
        name: 'SMAN 1 Medan',
        type: 'SMA',
        province: 'Sumatera Utara',
        city: 'Medan'
      },
      {
        id: 'sma2-medan',
        name: 'SMAN 2 Medan',
        type: 'SMA',
        province: 'Sumatera Utara',
        city: 'Medan'
      },
      {
        id: 'sma1-pematangsiantar',
        name: 'SMAN 1 Pematangsiantar',
        type: 'SMA',
        province: 'Sumatera Utara',
        city: 'Pematangsiantar'
      },
      {
        id: 'smkn1-medan',
        name: 'SMKN 1 Medan',
        type: 'SMK',
        province: 'Sumatera Utara',
        city: 'Medan'
      }
    ],
    universities: [
      {
        id: 'usu',
        name: 'Universitas Sumatera Utara',
        shortName: 'USU',
        type: 'PTN',
        province: 'Sumatera Utara',
        city: 'Medan',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unimed',
        name: 'Universitas Negeri Medan',
        shortName: 'UNIMED',
        type: 'PTN',
        province: 'Sumatera Utara',
        city: 'Medan',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'sumbar',
    name: 'Sumatera Barat',
    schools: [
      {
        id: 'sma1-padang',
        name: 'SMAN 1 Padang',
        type: 'SMA',
        province: 'Sumatera Barat',
        city: 'Padang'
      },
      {
        id: 'sma3-padang',
        name: 'SMAN 3 Padang',
        type: 'SMA',
        province: 'Sumatera Barat',
        city: 'Padang'
      },
      {
        id: 'sma1-bukittinggi',
        name: 'SMAN 1 Bukittinggi',
        type: 'SMA',
        province: 'Sumatera Barat',
        city: 'Bukittinggi'
      }
    ],
    universities: [
      {
        id: 'unand',
        name: 'Universitas Andalas',
        shortName: 'UNAND',
        type: 'PTN',
        province: 'Sumatera Barat',
        city: 'Padang',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unp',
        name: 'Universitas Negeri Padang',
        shortName: 'UNP',
        type: 'PTN',
        province: 'Sumatera Barat',
        city: 'Padang',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'sulsel',
    name: 'Sulawesi Selatan',
    schools: [
      {
        id: 'sma1-makassar',
        name: 'SMAN 1 Makassar',
        type: 'SMA',
        province: 'Sulawesi Selatan',
        city: 'Makassar'
      },
      {
        id: 'sma2-makassar',
        name: 'SMAN 2 Makassar',
        type: 'SMA',
        province: 'Sulawesi Selatan',
        city: 'Makassar'
      },
      {
        id: 'sma1-pare',
        name: 'SMAN 1 Parepare',
        type: 'SMA',
        province: 'Sulawesi Selatan',
        city: 'Parepare'
      }
    ],
    universities: [
      {
        id: 'unhas',
        name: 'Universitas Hasanuddin',
        shortName: 'UNHAS',
        type: 'PTN',
        province: 'Sulawesi Selatan',
        city: 'Makassar',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unm',
        name: 'Universitas Negeri Makassar',
        shortName: 'UNM',
        type: 'PTN',
        province: 'Sulawesi Selatan',
        city: 'Makassar',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    schools: [
      {
        id: 'sma1-denpasar',
        name: 'SMAN 1 Denpasar',
        type: 'SMA',
        province: 'Bali',
        city: 'Denpasar'
      },
      {
        id: 'sma4-denpasar',
        name: 'SMAN 4 Denpasar',
        type: 'SMA',
        province: 'Bali',
        city: 'Denpasar'
      },
      {
        id: 'sma1-singaraja',
        name: 'SMAN 1 Singaraja',
        type: 'SMA',
        province: 'Bali',
        city: 'Singaraja'
      }
    ],
    universities: [
      {
        id: 'unud',
        name: 'Universitas Udayana',
        shortName: 'UNUD',
        type: 'PTN',
        province: 'Bali',
        city: 'Denpasar',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'undiksha',
        name: 'Universitas Pendidikan Ganesha',
        shortName: 'UNDIKSHA',
        type: 'PTN',
        province: 'Bali',
        city: 'Singaraja',
        accreditation: 'A'
      }
    ]
  }
];

// Helper functions
export const getAllSchools = (): School[] => {
  return SCHOOLS_DATA.flatMap(province => province.schools);
};

export const getAllUniversities = (): University[] => {
  return SCHOOLS_DATA.flatMap(province => province.universities);
};

export const getSchoolsByProvince = (provinceName: string): School[] => {
  const province = SCHOOLS_DATA.find(p => p.name === provinceName);
  return province ? province.schools : [];
};

export const getUniversitiesByProvince = (provinceName: string): University[] => {
  const province = SCHOOLS_DATA.find(p => p.name === provinceName);
  return province ? province.universities : [];
};

export const getPopularUniversities = (): University[] => {
  return getAllUniversities().filter(uni => uni.isPopular);
};

export const getProvinceNames = (): string[] => {
  return SCHOOLS_DATA.map(province => province.name);
};

export const searchSchools = (query: string): School[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllSchools().filter(school => 
    school.name.toLowerCase().includes(lowercaseQuery) ||
    school.city.toLowerCase().includes(lowercaseQuery) ||
    school.province.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchUniversities = (query: string): University[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllUniversities().filter(uni => 
    uni.name.toLowerCase().includes(lowercaseQuery) ||
    uni.shortName.toLowerCase().includes(lowercaseQuery) ||
    uni.city.toLowerCase().includes(lowercaseQuery) ||
    uni.province.toLowerCase().includes(lowercaseQuery)
  );
};