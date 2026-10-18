# MSR Knowledge Base — Requirements Document

## 1. Project Overview

The MSR Knowledge Base is a web-based reference guide designed to help new PhD students and researchers understand Mining Software Repositories.

The website will organize information into four categories: Data Sources, Collection Methods, Analysis Methods, and Publication Venues.

The goal is to help researchers find relevant information and make informed decisions about their research.

## 2. Stakeholders

- **Primary Users:** New PhD students and MSR researchers.
- **Customer:** MSR Research Group Lead.
- **Developer:** Software engineer responsible for implementing and maintaining the website.

## 3. User Stories

### US-01: Navigation

As a PhD student, I want to switch between the four main categories, so that I can easily find the information I need.

### US-02: Data Sources

As a PhD student, I want to view available data sources and the types of data they provide, so that I can select suitable data for my research.

### US-03: Collection Methods

As a researcher, I want to compare different data collection methods and their pros and cons, so that I can choose an appropriate method for collecting research data.

### US-04: Analysis Methods

As a researcher, I want to explore different analysis methods and their common use cases, so that I can identify suitable approaches for analyzing my research data.

### US-05: Publication Venues

As a researcher, I want to view publication venues and their details, so that I can choose an appropriate venue to submit my research.

### US-06: Readability

As a new PhD student, I want the website to present information in a clear and organized format, so that I can understand and compare research resources easily.

## 4. Functional Requirements

### FR-01: Navigation

The system shall provide four main navigation options:

- Data Sources
- Collection Methods
- Analysis Methods
- Publication Venues

Users shall be able to navigate between the categories using tabs, buttons, or links.

### FR-02: Data Sources

The system shall display the following information for each data source:

- Source name
- Type of data provided
- Brief description

The required data sources are GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, and npm Registry.

### FR-03: Collection Methods

The system shall display the following information for each collection method:

- Method name
- Purpose
- Advantages and disadvantages

The required methods are REST APIs, GraphQL, Web Scraping (Selenium), Web Scraping (BeautifulSoup), Database Dumps, and Manual Download.

### FR-04: Analysis Methods

The system shall display the following information for each analysis method:

- Method name
- Type of analysis
- Common use cases

The required methods are Statistical Analysis, Regression Analysis, Thematic Analysis, Grounded Theory, Machine Learning, Time Series Analysis, Network Analysis, and Visualization.

### FR-05: Publication Venues

The system shall display the following information for each publication venue:

- Venue name and abbreviation
- Type (conference or journal)
- Focus area
- Relevance to MSR (high or medium)

The required conferences are ICSE, FSE, ASE, MSR, EASE, and SANER.

The required journals are EMSE, TSE, and TOSEM.

### FR-06: Content Presentation

The system shall present information using organized tables, lists, or cards. Users shall be able to identify the selected category and view its corresponding content.

## 5. Non-Functional Requirements

### NFR-01: Usability

The website should be easy to navigate and understand, particularly for new PhD students who may not be familiar with MSR research.

### NFR-02: Readability

Information should be presented using clear headings, readable text, and consistent formatting.

### NFR-03: Visual Design

The website should have a clean, simple, and professional appearance. Basic CSS styling should be used without unnecessary animations or visual complexity.

## 6. Acceptance Criteria

The following criteria define the expected behavior of the proposed website:

- **AC-01:** Four navigation options are available at the top of the website.
- **AC-02:** Selecting a navigation option displays the corresponding section.
- **AC-03:** The Data Sources section contains all seven required sources with their names, data types, and descriptions.
- **AC-04:** The Collection Methods section provides the required methods, their purposes, and their pros and cons.
- **AC-05:** The Analysis Methods section provides the required methods, analysis types, and common use cases.
- **AC-06:** The Publication Venues section lists the required conferences and journals with their relevant details.
- **AC-07:** The website uses a clear, readable, and consistent layout.

## 7. Implementation Scope

For Assignment 1, development will focus on one milestone:

**Milestone 1: Page Structure, Navigation, and Data Sources**

This milestone is planned to include:

- Basic HTML page structure.
- Navigation for the four main categories.
- Working navigation between sections.
- Data Sources content.
- Basic CSS styling.

The remaining content categories will be planned as future milestones:

- **Milestone 2:** Collection Methods
- **Milestone 3:** Analysis Methods
- **Milestone 4:** Publication Venues

The future milestones will be documented and tracked using GitHub Issues.

Only Milestone 1 is planned for implementation in this assignment. Requirements for the remaining milestones are documented for future development.
