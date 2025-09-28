import { Province, SCHOOLS_DATA } from './schools-universities';

// Extended data untuk provinsi lainnya di Indonesia
export const EXTENDED_SCHOOLS_DATA: Province[] = [
  {
    id: 'aceh',
    name: 'Aceh',
    schools: [
      {
        id: 'sma1-banda-aceh',
        name: 'SMAN 1 Banda Aceh',
        type: 'SMA',
        province: 'Aceh',
        city: 'Banda Aceh'
      },
      {
        id: 'sma2-banda-aceh',
        name: 'SMAN 2 Banda Aceh',
        type: 'SMA',
        province: 'Aceh',
        city: 'Banda Aceh'
      },
      {
        id: 'sma1-lhokseumawe',
        name: 'SMAN 1 Lhokseumawe',
        type: 'SMA',
        province: 'Aceh',
        city: 'Lhokseumawe'
      },
      {
        id: 'smkn1-banda-aceh',
        name: 'SMKN 1 Banda Aceh',
        type: 'SMK',
        province: 'Aceh',
        city: 'Banda Aceh'
      }
    ],
    universities: [
      {
        id: 'unsyiah',
        name: 'Universitas Syiah Kuala',
        shortName: 'UNSYIAH',
        type: 'PTN',
        province: 'Aceh',
        city: 'Banda Aceh',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'uin-ar-raniry',
        name: 'UIN Ar-Raniry Banda Aceh',
        shortName: 'UIN Ar-Raniry',
        type: 'PTN',
        province: 'Aceh',
        city: 'Banda Aceh',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'sumsel',
    name: 'Sumatera Selatan',
    schools: [
      {
        id: 'sma1-palembang',
        name: 'SMAN 1 Palembang',
        type: 'SMA',
        province: 'Sumatera Selatan',
        city: 'Palembang'
      },
      {
        id: 'sma3-palembang',
        name: 'SMAN 3 Palembang',
        type: 'SMA',
        province: 'Sumatera Selatan',
        city: 'Palembang'
      },
      {
        id: 'sma1-lubuklinggau',
        name: 'SMAN 1 Lubuklinggau',
        type: 'SMA',
        province: 'Sumatera Selatan',
        city: 'Lubuklinggau'
      }
    ],
    universities: [
      {
        id: 'unsri',
        name: 'Universitas Sriwijaya',
        shortName: 'UNSRI',
        type: 'PTN',
        province: 'Sumatera Selatan',
        city: 'Palembang',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unp-palembang',
        name: 'Universitas Negeri Palembang',
        shortName: 'UNP Palembang',
        type: 'PTN',
        province: 'Sumatera Selatan',
        city: 'Palembang',
        accreditation: 'B'
      }
    ]
  },
  {
    id: 'riau',
    name: 'Riau',
    schools: [
      {
        id: 'sma1-pekanbaru',
        name: 'SMAN 1 Pekanbaru',
        type: 'SMA',
        province: 'Riau',
        city: 'Pekanbaru'
      },
      {
        id: 'sma2-pekanbaru',
        name: 'SMAN 2 Pekanbaru',
        type: 'SMA',
        province: 'Riau',
        city: 'Pekanbaru'
      },
      {
        id: 'sma1-dumai',
        name: 'SMAN 1 Dumai',
        type: 'SMA',
        province: 'Riau',
        city: 'Dumai'
      }
    ],
    universities: [
      {
        id: 'unri',
        name: 'Universitas Riau',
        shortName: 'UNRI',
        type: 'PTN',
        province: 'Riau',
        city: 'Pekanbaru',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'uin-suska',
        name: 'UIN Sultan Syarif Kasim Riau',
        shortName: 'UIN SUSKA',
        type: 'PTN',
        province: 'Riau',
        city: 'Pekanbaru',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'lampung',
    name: 'Lampung',
    schools: [
      {
        id: 'sma1-bandar-lampung',
        name: 'SMAN 1 Bandar Lampung',
        type: 'SMA',
        province: 'Lampung',
        city: 'Bandar Lampung'
      },
      {
        id: 'sma2-bandar-lampung',
        name: 'SMAN 2 Bandar Lampung',
        type: 'SMA',
        province: 'Lampung',
        city: 'Bandar Lampung'
      },
      {
        id: 'sma1-metro',
        name: 'SMAN 1 Metro',
        type: 'SMA',
        province: 'Lampung',
        city: 'Metro'
      }
    ],
    universities: [
      {
        id: 'unila',
        name: 'Universitas Lampung',
        shortName: 'UNILA',
        type: 'PTN',
        province: 'Lampung',
        city: 'Bandar Lampung',
        accreditation: 'A',
        isPopular: true
      }
    ]
  },
  {
    id: 'kalimantan-barat',
    name: 'Kalimantan Barat',
    schools: [
      {
        id: 'sma1-pontianak',
        name: 'SMAN 1 Pontianak',
        type: 'SMA',
        province: 'Kalimantan Barat',
        city: 'Pontianak'
      },
      {
        id: 'sma2-pontianak',
        name: 'SMAN 2 Pontianak',
        type: 'SMA',
        province: 'Kalimantan Barat',
        city: 'Pontianak'
      },
      {
        id: 'sma1-singkawang',
        name: 'SMAN 1 Singkawang',
        type: 'SMA',
        province: 'Kalimantan Barat',
        city: 'Singkawang'
      }
    ],
    universities: [
      {
        id: 'untan',
        name: 'Universitas Tanjungpura',
        shortName: 'UNTAN',
        type: 'PTN',
        province: 'Kalimantan Barat',
        city: 'Pontianak',
        accreditation: 'A',
        isPopular: true
      }
    ]
  },
  {
    id: 'kalimantan-timur',
    name: 'Kalimantan Timur',
    schools: [
      {
        id: 'sma1-samarinda',
        name: 'SMAN 1 Samarinda',
        type: 'SMA',
        province: 'Kalimantan Timur',
        city: 'Samarinda'
      },
      {
        id: 'sma2-samarinda',
        name: 'SMAN 2 Samarinda',
        type: 'SMA',
        province: 'Kalimantan Timur',
        city: 'Samarinda'
      },
      {
        id: 'sma1-balikpapan',
        name: 'SMAN 1 Balikpapan',
        type: 'SMA',
        province: 'Kalimantan Timur',
        city: 'Balikpapan'
      }
    ],
    universities: [
      {
        id: 'unmul',
        name: 'Universitas Mulawarman',
        shortName: 'UNMUL',
        type: 'PTN',
        province: 'Kalimantan Timur',
        city: 'Samarinda',
        accreditation: 'A',
        isPopular: true
      }
    ]
  },
  {
    id: 'kalimantan-selatan',
    name: 'Kalimantan Selatan',
    schools: [
      {
        id: 'sma1-banjarmasin',
        name: 'SMAN 1 Banjarmasin',
        type: 'SMA',
        province: 'Kalimantan Selatan',
        city: 'Banjarmasin'
      },
      {
        id: 'sma3-banjarmasin',
        name: 'SMAN 3 Banjarmasin',
        type: 'SMA',
        province: 'Kalimantan Selatan',
        city: 'Banjarmasin'
      },
      {
        id: 'sma1-martapura',
        name: 'SMAN 1 Martapura',
        type: 'SMA',
        province: 'Kalimantan Selatan',
        city: 'Martapura'
      }
    ],
    universities: [
      {
        id: 'unlam',
        name: 'Universitas Lambung Mangkurat',
        shortName: 'UNLAM',
        type: 'PTN',
        province: 'Kalimantan Selatan',
        city: 'Banjarmasin',
        accreditation: 'A',
        isPopular: true
      }
    ]
  },
  {
    id: 'sulawesi-utara',
    name: 'Sulawesi Utara',
    schools: [
      {
        id: 'sma1-manado',
        name: 'SMAN 1 Manado',
        type: 'SMA',
        province: 'Sulawesi Utara',
        city: 'Manado'
      },
      {
        id: 'sma2-manado',
        name: 'SMAN 2 Manado',
        type: 'SMA',
        province: 'Sulawesi Utara',
        city: 'Manado'
      },
      {
        id: 'sma1-tomohon',
        name: 'SMAN 1 Tomohon',
        type: 'SMA',
        province: 'Sulawesi Utara',
        city: 'Tomohon'
      }
    ],
    universities: [
      {
        id: 'unsrat',
        name: 'Universitas Sam Ratulangi',
        shortName: 'UNSRAT',
        type: 'PTN',
        province: 'Sulawesi Utara',
        city: 'Manado',
        accreditation: 'A',
        isPopular: true
      },
      {
        id: 'unima',
        name: 'Universitas Negeri Manado',
        shortName: 'UNIMA',
        type: 'PTN',
        province: 'Sulawesi Utara',
        city: 'Manado',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'sulawesi-tengah',
    name: 'Sulawesi Tengah',
    schools: [
      {
        id: 'sma1-palu',
        name: 'SMAN 1 Palu',
        type: 'SMA',
        province: 'Sulawesi Tengah',
        city: 'Palu'
      },
      {
        id: 'sma2-palu',
        name: 'SMAN 2 Palu',
        type: 'SMA',
        province: 'Sulawesi Tengah',
        city: 'Palu'
      }
    ],
    universities: [
      {
        id: 'untad',
        name: 'Universitas Tadulako',
        shortName: 'UNTAD',
        type: 'PTN',
        province: 'Sulawesi Tengah',
        city: 'Palu',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'ntt',
    name: 'Nusa Tenggara Timur',
    schools: [
      {
        id: 'sma1-kupang',
        name: 'SMAN 1 Kupang',
        type: 'SMA',
        province: 'Nusa Tenggara Timur',
        city: 'Kupang'
      },
      {
        id: 'sma2-kupang',
        name: 'SMAN 2 Kupang',
        type: 'SMA',
        province: 'Nusa Tenggara Timur',
        city: 'Kupang'
      },
      {
        id: 'sma1-ende',
        name: 'SMAN 1 Ende',
        type: 'SMA',
        province: 'Nusa Tenggara Timur',
        city: 'Ende'
      }
    ],
    universities: [
      {
        id: 'undana',
        name: 'Universitas Nusa Cendana',
        shortName: 'UNDANA',
        type: 'PTN',
        province: 'Nusa Tenggara Timur',
        city: 'Kupang',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'ntb',
    name: 'Nusa Tenggara Barat',
    schools: [
      {
        id: 'sma1-mataram',
        name: 'SMAN 1 Mataram',
        type: 'SMA',
        province: 'Nusa Tenggara Barat',
        city: 'Mataram'
      },
      {
        id: 'sma2-mataram',
        name: 'SMAN 2 Mataram',
        type: 'SMA',
        province: 'Nusa Tenggara Barat',
        city: 'Mataram'
      },
      {
        id: 'sma1-bima',
        name: 'SMAN 1 Bima',
        type: 'SMA',
        province: 'Nusa Tenggara Barat',
        city: 'Bima'
      }
    ],
    universities: [
      {
        id: 'unram',
        name: 'Universitas Mataram',
        shortName: 'UNRAM',
        type: 'PTN',
        province: 'Nusa Tenggara Barat',
        city: 'Mataram',
        accreditation: 'A',
        isPopular: true
      }
    ]
  },
  {
    id: 'papua',
    name: 'Papua',
    schools: [
      {
        id: 'sma1-jayapura',
        name: 'SMAN 1 Jayapura',
        type: 'SMA',
        province: 'Papua',
        city: 'Jayapura'
      },
      {
        id: 'sma2-jayapura',
        name: 'SMAN 2 Jayapura',
        type: 'SMA',
        province: 'Papua',
        city: 'Jayapura'
      }
    ],
    universities: [
      {
        id: 'uncen',
        name: 'Universitas Cenderawasih',
        shortName: 'UNCEN',
        type: 'PTN',
        province: 'Papua',
        city: 'Jayapura',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'maluku',
    name: 'Maluku',
    schools: [
      {
        id: 'sma1-ambon',
        name: 'SMAN 1 Ambon',
        type: 'SMA',
        province: 'Maluku',
        city: 'Ambon'
      },
      {
        id: 'sma2-ambon',
        name: 'SMAN 2 Ambon',
        type: 'SMA',
        province: 'Maluku',
        city: 'Ambon'
      }
    ],
    universities: [
      {
        id: 'unpatti',
        name: 'Universitas Pattimura',
        shortName: 'UNPATTI',
        type: 'PTN',
        province: 'Maluku',
        city: 'Ambon',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'bengkulu',
    name: 'Bengkulu',
    schools: [
      {
        id: 'sma1-bengkulu',
        name: 'SMAN 1 Bengkulu',
        type: 'SMA',
        province: 'Bengkulu',
        city: 'Bengkulu'
      },
      {
        id: 'sma2-bengkulu',
        name: 'SMAN 2 Bengkulu',
        type: 'SMA',
        province: 'Bengkulu',
        city: 'Bengkulu'
      }
    ],
    universities: [
      {
        id: 'unib',
        name: 'Universitas Bengkulu',
        shortName: 'UNIB',
        type: 'PTN',
        province: 'Bengkulu',
        city: 'Bengkulu',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'jambi',
    name: 'Jambi',
    schools: [
      {
        id: 'sma1-jambi',
        name: 'SMAN 1 Jambi',
        type: 'SMA',
        province: 'Jambi',
        city: 'Jambi'
      },
      {
        id: 'sma2-jambi',
        name: 'SMAN 2 Jambi',
        type: 'SMA',
        province: 'Jambi',
        city: 'Jambi'
      }
    ],
    universities: [
      {
        id: 'unja',
        name: 'Universitas Jambi',
        shortName: 'UNJA',
        type: 'PTN',
        province: 'Jambi',
        city: 'Jambi',
        accreditation: 'A'
      }
    ]
  },
  {
    id: 'gorontalo',
    name: 'Gorontalo',
    schools: [
      {
        id: 'sma1-gorontalo',
        name: 'SMAN 1 Gorontalo',
        type: 'SMA',
        province: 'Gorontalo',
        city: 'Gorontalo'
      }
    ],
    universities: [
      {
        id: 'ung',
        name: 'Universitas Negeri Gorontalo',
        shortName: 'UNG',
        type: 'PTN',
        province: 'Gorontalo',
        city: 'Gorontalo',
        accreditation: 'A'
      }
    ]
  }
];

// Combine all data
export const ALL_SCHOOLS_DATA = [...SCHOOLS_DATA, ...EXTENDED_SCHOOLS_DATA];

// Specific lists for popular universities
export const TOP_PTN_INDONESIA = [
  'Universitas Indonesia',
  'Institut Teknologi Bandung',
  'Universitas Gadjah Mada',
  'Institut Teknologi Sepuluh Nopember',
  'Universitas Airlangga',
  'Universitas Padjadjaran',
  'Universitas Diponegoro',
  'Universitas Sebelas Maret',
  'Universitas Brawijaya',
  'Institut Pertanian Bogor',
  'Universitas Sumatera Utara',
  'Universitas Hasanuddin',
  'Universitas Andalas',
  'Universitas Sriwijaya',
  'Universitas Udayana'
];

export const POPULAR_MAJORS = [
  'Kedokteran',
  'Teknik Informatika',
  'Teknik Elektro',
  'Manajemen',
  'Akuntansi',
  'Hukum',
  'Psikologi',
  'Arsitektur',
  'Teknik Sipil',
  'Farmasi',
  'Kedokteran Gigi',
  'Teknik Mesin',
  'Ekonomi',
  'Ilmu Komunikasi',
  'Teknik Kimia',
  'Fisika',
  'Kimia',
  'Matematika',
  'Biologi',
  'Sastra Inggris'
];