import { parse, format, isValid } from 'date-fns'

export interface TimeEntry {
  id: string;
  business: string;
  date: string; // In DD/MM/YYYY format
  startTime: string;
  endTime: string;
  duration: number;
  notes?: string;
}

export interface Business {
  id: string;
  name: string;
}

export function calculateDuration(startTime: string, endTime: string): number {
  const [startHours, startMinutes] = startTime.split(':').map(Number)
  const [endHours, endMinutes] = endTime.split(':').map(Number)
  
  const startDate = new Date(2023, 0, 1, startHours, startMinutes)
  const endDate = new Date(2023, 0, 1, endHours, endMinutes)
  
  return Math.round((endDate.getTime() - startDate.getTime()) / 60000) // Convert to minutes
}

export function formatDate(dateString: string): string {
  const date = parse(dateString, 'yyyy-MM-dd', new Date())
  return isValid(date) ? format(date, 'dd/MM/yyyy') : ''
}

export function parseDateString(dateString: string): Date | null {
  const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date())
  return isValid(parsedDate) ? parsedDate : null
}

