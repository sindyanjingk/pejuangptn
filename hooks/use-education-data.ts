"use client";

import { useState, useEffect, useMemo } from 'react';
import { schoolUniversityService } from '@/lib/data/data-service';
import { School, University } from '@/lib/data/schools-universities';

// Hook for school search with debouncing
export function useSchoolSearch(initialQuery: string = '') {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<School[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const searchResults = schoolUniversityService.searchSchools(query, 20);
      setResults(searchResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return {
    query,
    setQuery,
    results,
    isLoading,
    suggestions: results.map(school => school.name)
  };
}

// Hook for university search with debouncing
export function useUniversitySearch(initialQuery: string = '') {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const searchResults = schoolUniversityService.searchUniversities(query, 20);
      setResults(searchResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return {
    query,
    setQuery,
    results,
    isLoading,
    suggestions: results.map(uni => uni.shortName || uni.name)
  };
}

// Hook for province-based data
export function useProvinceData(provinceName: string) {
  const data = useMemo(() => {
    if (!provinceName) return { schools: [], universities: [], cities: [] };

    return {
      schools: schoolUniversityService.getSchoolsByProvince(provinceName),
      universities: schoolUniversityService.getUniversitiesByProvince(provinceName),
      cities: schoolUniversityService.getCitiesByProvince(provinceName)
    };
  }, [provinceName]);

  return data;
}

// Hook for all provinces
export function useProvinces() {
  const provinces = useMemo(() => {
    return schoolUniversityService.getAllProvinces();
  }, []);

  return provinces;
}

// Hook for popular universities
export function usePopularUniversities() {
  const popularUniversities = useMemo(() => {
    return schoolUniversityService.getPopularUniversities();
  }, []);

  return popularUniversities;
}

// Hook for statistics
export function useEducationStatistics() {
  const stats = useMemo(() => {
    return schoolUniversityService.getStatistics();
  }, []);

  return stats;
}

// Hook for autocomplete with multiple types
export function useEducationAutocomplete(type: 'school' | 'university' | 'province') {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      let results: string[] = [];

      switch (type) {
        case 'school':
          results = schoolUniversityService.getSchoolSuggestions(query);
          break;
        case 'university':
          results = schoolUniversityService.getUniversitySuggestions(query);
          break;
        case 'province':
          results = schoolUniversityService.getProvinceSuggestions(query);
          break;
      }

      setSuggestions(results);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [query, type]);

  return {
    query,
    setQuery,
    suggestions,
    isLoading
  };
}

// Hook for form validation
export function useEducationValidation() {
  const validateSchool = (schoolName: string): boolean => {
    return schoolUniversityService.isValidSchool(schoolName);
  };

  const validateUniversity = (universityName: string): boolean => {
    return schoolUniversityService.isValidUniversity(universityName);
  };

  const validateProvince = (provinceName: string): boolean => {
    return schoolUniversityService.isValidProvince(provinceName);
  };

  return {
    validateSchool,
    validateUniversity,
    validateProvince
  };
}