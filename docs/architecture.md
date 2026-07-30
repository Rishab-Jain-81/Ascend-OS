# ASCEND OS Architecture

## Overview

ASCEND OS follows a feature-based architecture to improve scalability, maintainability, and separation of concerns.

## Goal

Build a production-grade personal engineering dashboard following professional software engineering practices.

## Current Architecture

- React
- Vite
- Tailwind CSS
- React Router
- Feature-based architecture

## Routing

React Router is configured using nested routes.


## Navigation

Navigation is configuration-driven.

The sidebar renders links from `src/config/navigation.js` instead of hardcoding navigation items.

This allows the same configuration to be reused in future features such as:

- Mobile Navigation
- Command Palette
- Breadcrumbs
- Permission-based routing

## Dashboard Architecture

The dashboard is composed using reusable UI components.

DashboardPage
│
├── Card
│   ├── Welcome
│   ├── Current Phase
│   ├── Current Streak
│   ├── Overall Progress
│   └── Today's Tasks

The Card component acts as a generic container while each section provides its own content through React composition.

## Dashboard Data Rendering

Refactored Dashboard to use data-driven rendering

### Dashboard Data Flow

dashboardData

↓

DashboardPage

↓

UI Components

↓

User

UI components receive data through props instead of owning the data themselves.

## Dashboard Component Hierarchy

DashboardPage
│
├── DashboardGrid
│
├── WelcomeSection
├── PhaseCard
├── StreakCard
├── ProgressCard
│   └── ProgressBar
└── TasksCard

The DashboardPage composes feature-specific components while shared UI components remain inside `components/ui`.