import { ALL_SCHOOLS_DATA } from './extended-schools';
import { School, University } from './schools-universities';

// Comprehensive data utilities for schools and universities
export class SchoolUniversityService {
  private static instance: SchoolUniversityService;
  private allSchools: School[];
  private allUniversities: University[];
  private allProvinces: string[];

  constructor() {
    this.allSchools = ALL_SCHOOLS_DATA.flatMap(province => province.schools);
    this.allUniversities = ALL_SCHOOLS_DATA.flatMap(province => province.universities);
    this.allProvinces = ALL_SCHOOLS_DATA.map(province => province.name);
  }

  static getInstance(): SchoolUniversityService {
    if (!SchoolUniversityService.instance) {
      SchoolUniversityService.instance = new SchoolUniversityService();
    }
    return SchoolUniversityService.instance;
  }

  // Get all data
  getAllSchools(): School[] {
    return this.allSchools;
  }

  getAllUniversities(): University[] {
    return this.allUniversities;
  }

  getAllProvinces(): string[] {
    return this.allProvinces;
  }

  // Search functions
  searchSchools(query: string, limit?: number): School[] {
    const lowercaseQuery = query.toLowerCase().trim();
    if (!lowercaseQuery) return [];

    const results = this.allSchools.filter(school => 
      school.name.toLowerCase().includes(lowercaseQuery) ||
      school.city.toLowerCase().includes(lowercaseQuery) ||
      school.province.toLowerCase().includes(lowercaseQuery) ||
      school.type.toLowerCase().includes(lowercaseQuery)
    );

    return limit ? results.slice(0, limit) : results;
  }

  searchUniversities(query: string, limit?: number): University[] {
    const lowercaseQuery = query.toLowerCase().trim();
    if (!lowercaseQuery) return [];

    const results = this.allUniversities.filter(uni => 
      uni.name.toLowerCase().includes(lowercaseQuery) ||
      uni.shortName.toLowerCase().includes(lowercaseQuery) ||
      uni.city.toLowerCase().includes(lowercaseQuery) ||
      uni.province.toLowerCase().includes(lowercaseQuery)
    );

    return limit ? results.slice(0, limit) : results;
  }

  // Filter by province
  getSchoolsByProvince(provinceName: string): School[] {
    const province = ALL_SCHOOLS_DATA.find(p => p.name === provinceName);
    return province ? province.schools : [];
  }

  getUniversitiesByProvince(provinceName: string): University[] {
    const province = ALL_SCHOOLS_DATA.find(p => p.name === provinceName);
    return province ? province.universities : [];
  }

  // Filter by city
  getSchoolsByCity(cityName: string): School[] {
    return this.allSchools.filter(school => 
      school.city.toLowerCase() === cityName.toLowerCase()
    );
  }

  getUniversitiesByCity(cityName: string): University[] {
    return this.allUniversities.filter(uni => 
      uni.city.toLowerCase() === cityName.toLowerCase()
    );
  }

  // Filter by type
  getSchoolsByType(type: 'SMA' | 'SMK' | 'MA'): School[] {
    return this.allSchools.filter(school => school.type === type);
  }

  getPTNUniversities(): University[] {
    return this.allUniversities.filter(uni => uni.type === 'PTN');
  }

  getPTSUniversities(): University[] {
    return this.allUniversities.filter(uni => uni.type === 'PTS');
  }

  // Get popular/featured data
  getPopularUniversities(): University[] {
    return this.allUniversities.filter(uni => uni.isPopular);
  }

  getUniversitiesByAccreditation(accreditation: 'A' | 'B' | 'C'): University[] {
    return this.allUniversities.filter(uni => uni.accreditation === accreditation);
  }

  // Get cities for a province
  getCitiesByProvince(provinceName: string): string[] {
    const province = ALL_SCHOOLS_DATA.find(p => p.name === provinceName);
    if (!province) return [];

    const cities = new Set<string>();
    province.schools.forEach(school => cities.add(school.city));
    province.universities.forEach(uni => cities.add(uni.city));

    return Array.from(cities).sort();
  }

  // Statistics
  getStatistics() {
    const stats = {
      totalProvinces: this.allProvinces.length,
      totalSchools: this.allSchools.length,
      totalUniversities: this.allUniversities.length,
      schoolsByType: {
        SMA: this.allSchools.filter(s => s.type === 'SMA').length,
        SMK: this.allSchools.filter(s => s.type === 'SMK').length,
        MA: this.allSchools.filter(s => s.type === 'MA').length,
      },
      universitiesByType: {
        PTN: this.allUniversities.filter(u => u.type === 'PTN').length,
        PTS: this.allUniversities.filter(u => u.type === 'PTS').length,
      },
      popularUniversities: this.allUniversities.filter(u => u.isPopular).length,
      accreditationA: this.allUniversities.filter(u => u.accreditation === 'A').length,
    };

    return stats;
  }

  // Get random samples for demo/testing
  getRandomSchools(count: number = 5): School[] {
    const shuffled = [...this.allSchools].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  getRandomUniversities(count: number = 5): University[] {
    const shuffled = [...this.allUniversities].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Validation helpers
  isValidProvince(provinceName: string): boolean {
    return this.allProvinces.includes(provinceName);
  }

  isValidSchool(schoolName: string): boolean {
    return this.allSchools.some(school => school.name === schoolName);
  }

  isValidUniversity(universityName: string): boolean {
    return this.allUniversities.some(uni => uni.name === universityName || uni.shortName === universityName);
  }

  // Get suggestions for autocomplete
  getSchoolSuggestions(query: string, limit: number = 10): string[] {
    const results = this.searchSchools(query, limit);
    return results.map(school => school.name);
  }

  getUniversitySuggestions(query: string, limit: number = 10): string[] {
    const results = this.searchUniversities(query, limit);
    return results.map(uni => uni.shortName || uni.name);
  }

  getProvinceSuggestions(query: string): string[] {
    const lowercaseQuery = query.toLowerCase().trim();
    if (!lowercaseQuery) return this.allProvinces;

    return this.allProvinces.filter(province => 
      province.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Export singleton instance
export const schoolUniversityService = SchoolUniversityService.getInstance();

// Export convenience functions
export const {
  getAllSchools,
  getAllUniversities,
  getAllProvinces,
  searchSchools,
  searchUniversities,
  getSchoolsByProvince,
  getUniversitiesByProvince,
  getPopularUniversities,
  getStatistics
} = schoolUniversityService;