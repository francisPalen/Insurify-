import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import CarMetricsSection from "../../components/CarMetricsSection";
import HomeMetricsSection from "../../components/HomeMetricsSection";
import LifeMetricsSection from "../../components//LifeMetricsSection";

describe("Metrics Sections", () => {
  const carMetrics = {
    average_speed: "60",
    braking_score: "80",
    miles_travelled: "5000",
  };

  const homeMetrics = {
    theft_incidents: "1",
    fire_incidents: "2",
  };

  const lifeMetrics = {
    smoker: "No",
    last_medical_checkup: "2023-01-01",
  };

  test("renders CarMetricsSection with provided data", () => {
    render(<CarMetricsSection carMetrics={carMetrics} />);
    expect(screen.getByText(/Zooming Along at 60 MPH!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Smooth Stops, Smooth Savings!/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Miles Traveled: 5000. Memories Made: Countless!/i)
    ).toBeInTheDocument();
  });

  test("renders HomeMetricsSection with provided data", () => {
    render(<HomeMetricsSection homeMetrics={homeMetrics} />);
    expect(
      screen.getByText(/Low Theft, Low Stress, Low Costs!/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Flame-Free, Fee-Free!/i)).toBeInTheDocument();
  });

  test("renders LifeMetricsSection with provided data", () => {
    render(<LifeMetricsSection lifeMetrics={lifeMetrics} />);
    expect(screen.getByText(/Smoke-Free and Lovin' It!/i)).toBeInTheDocument();
  });
});
