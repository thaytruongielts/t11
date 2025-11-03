
export interface DailyPlan {
  day: number;
  date: string;
  lesson: string[];
  practice: string[];
}

export interface WeeklyPlan {
  week: number;
  title: string;
  description: string;
  dailyPlans: DailyPlan[];
}
