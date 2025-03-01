import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionPanel from "../ActionPanel";
import { UserDetailsContext } from "../../Context/UserDetailsContext";
import { ThemeProvider } from "../../Context/ThemeChangerContext";

const mockUserDetails = {
    name: "John Doe",
    description: "A passionate software developer.",

    detailedDescription: [
        "I have been developing web applications for over 5 years.",
        "I specialize in JavaScript and React, but also have experience with Node.js and Express.",
        "I enjoy learning new technologies and improving my skills."
    ],
    location: "New York, USA",
    availability: true,
    githubLink: "https://github.com/johndoe",
    linkedinLink: "https://linkedin.com/in/johndoe",
    profileImage: {
        asset: {
            url: "https://example.com/profile.jpg",
        },
    },
    cvDocument: {
        asset: {
            url: "https://example.com/johndoe_cv.pdf",
        },
    },
    FooterText: "Lorem ipsum ",
    skillSet: [
        {
            name: "Node.js",
            _rawImage: {
                _type: "image",
                asset: {
                    _ref: "image-11223-400x400-jpg",
                    _type: "reference",
                },
            },
        },
    ],
    Experience: [
        {
            CompanyName: "Creative Dev Studio",
            PositionName: "Software Engineer",
            Description: "Led a team to deliver high-quality software solutions, ensuring scalable architecture and maintainable code. Focused on modernizing legacy systems with Node.js and microservices.",
            StartDate: "2024-01-01",
            EndDate: "Present",
        },
    ],
    work: [
        {

            name: "TrendMart",
            description: "Trendmart is an ecommerce website that has a variety of products for sale.",
            ProjectUrl: "https://trend-mart-app.vercel.app/",
            skills: ["React", "Typescript"],
            _rawProjectImage: {
                asset: {
                    _ref: "image-ef42e743baa29d3d7cd3b2242557bc7ddd3f2625-1916x854-png",
                },
            },
        },

    ],
    reviews: [
        {
            name: 'John Doe',
            description: "Hello world",
            background: "Freelancer"
        }
    ]
};


describe("ActionPanel component tests", () => {
    it("renders ActionPanel component", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <ThemeProvider>
                    <ActionPanel />
                </ThemeProvider>
            </UserDetailsContext.Provider>
        );
        const actionPanel = screen.getByTestId("ActionPanel");
        expect(actionPanel).toBeInTheDocument();
    });

    it("renders both buttons in ActionPanel", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <ThemeProvider>
                    <ActionPanel />
                </ThemeProvider>
            </UserDetailsContext.Provider>
        );

        const switchThemeButton = screen.getByText(/Switch Theme/i);
        expect(switchThemeButton).toBeInTheDocument();

        const downloadButton = screen.getByText(/Download CV/i);
        expect(downloadButton).toBeInTheDocument();
    });

    it("checks if IoSunnyOutline icon is rendered", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <ThemeProvider>
                    <ActionPanel />
                </ThemeProvider>
            </UserDetailsContext.Provider>
        );

        const icon = screen.getByTestId("ActionPanel").querySelector("svg");
        expect(icon).toBeInTheDocument();
    });
});
