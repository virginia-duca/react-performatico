// src/pages/Asteroides/types.ts
export interface EstimatedDiameter {
  meters: {
    estimated_diameter_max: number;
  };
  kilometers: {
    estimated_diameter_max: number;
  };
}

export interface CloseApproachData {
  miss_distance: {
    kilometers: string;
  };
  relative_velocity: {
    kilometers_per_hour: string;
  };
  close_approach_date: string;
}

export interface Asteroid {
  id: string;
  name_limited: string;
  estimated_diameter: EstimatedDiameter;
  absolute_magnitude_h: number;
  close_approach_data: CloseApproachData[];
  is_potentially_hazardous_asteroid: boolean;
  image: string;
  approach?: {
    close_approach_date: string;
  };
}
